'use strict'

const util = require('util')
const chalk = require('chalk')
const { exec, execSync, fork } = require('child_process')
const execP = util.promisify(exec)
const path = require('path')

const { resolve } = path
const packageJSON = require('./package.json')

const {
  CI = '',
  NODE_ENV = 'development'
} = process.env

let CONTRACTS_VERSION = packageJSON.contractsVersion
// In development, append a timestamp so that browsers will detect a new version
// and reload whenever the live server is restarted.
const GI_VERSION = packageJSON.version + (NODE_ENV === 'development' && process.argv[2] === 'dev' ? `@${new Date().toISOString()}` : '')
Object.assign(process.env, { CONTRACTS_VERSION, GI_VERSION })

// file paths
const distDir = 'dist'
const distAssets = `${distDir}/assets`
const distCSS = `${distDir}/assets/css`
const distContracts = `${distDir}/contracts`
const distJS = `${distDir}/assets/js`
const srcDir = 'frontend'
const serviceWorkerDir = `${srcDir}/controller/serviceworkers`
const contractsDir = `${srcDir}/model/contracts`
const mainSrc = path.join(srcDir, 'main.js')
const manifestJSON = path.join(contractsDir, 'manifests.json')

const isDevelopment = NODE_ENV === 'development'
const isProduction =  NODE_ENV === 'production'

// Helper functions

function pick (o, props) {
  const x = {}
  for (const k of props) { x[k] = o[k] }
  return x
}

function clone (o) {
  return JSON.parse(JSON.stringify(o))
}

async function execWithErrMsg (cmd, errMsg) {
  const { stdout, stderr } = await execP(cmd, {
    // this is needed to get it to work in certain Windows environments
    shell: process.env.SHELL || '/bin/sh'
  })
  if (stderr) {
    console.error(chalk`{red ${errMsg}:}`, stderr)
    throw new Error(errMsg)
  }
  return { stdout }
}

module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt)

  const GI_GIT_VERSION = process.env.CI
    ? process.env.GI_VERSION
    : execSync('git describe --dirty').toString('utf8').trim()
  Object.assign(process.env, { GI_GIT_VERSION })

  process.env.API_URL = isDevelopment
    ? 'https://debug.groupincome.org/'
    : 'https://groupincome.app/'

  async function generateManifests (dir, version) {
    const keyFile = process.env.KEY_FILE || 'key.json'
    const pubKeyFile = process.env.PUB_KEY_FILE || 'key.pub.json'
    if (fs.existsSync(keyFile)) {
      grunt.log.writeln(chalk.underline(`Key file ${keyFile} exists, using that.`))
    } else {
      grunt.log.writeln(chalk.underline(`\nRunning 'chel keygen --pubout ${pubKeyFile} --out ${keyFile}'`))
      const { stdout } = await execWithErrMsg(`./node_modules/.bin/chel keygen --pubout ${pubKeyFile} --out ${keyFile}`)
      console.log(stdout)
    }
    grunt.log.writeln(chalk.underline("\nRunning 'chel manifest'"))
    // TODO: do this with JS instead of POSIX commands for Windows support
    const { stdout } = await execWithErrMsg(`ls ${dir}/*-slim.js | sed -En 's/.*\\/(.*)-slim.js/\\1/p' | xargs -I {} node_modules/.bin/chel manifest -n gi.contracts/{} -v ${version} -s ${dir}/{}-slim.js ${keyFile} ${dir}/{}.js`, 'error generating manifests')
    console.log(stdout)
  }

  async function deployAndUpdateMainSrc (manifestDir, dest) {
    grunt.log.writeln(chalk.underline(`Running 'chel deploy' to ${dest}`))
    // If we're writing to a URL, don't try to create a directory
    try {
      const url = new URL(dest)
      // Likely a drive letter
      if (url.protocol.length < 3) {
        throw new Error('Not a URL')
      }
    } catch {
      await access(dest).catch(async () => await mkdir(dest))
    }

    const { stdout } = await execWithErrMsg(`./node_modules/.bin/chel deploy ${dest} ${manifestDir}/*.manifest.json`, 'error deploying contracts')
    console.log(stdout)
    const r = /contracts\/([^.]+)\.(?:x|[\d.]+)\.manifest.*\/(.*)/g
    const manifests = Object.fromEntries(Array.from(stdout.replace(/\\/g, '/').matchAll(r), x => [`gi.contracts/${x[1]}`, x[2]]))
    fs.writeFileSync(manifestJSON, JSON.stringify({ manifests }, null, 2) + '\n', 'utf8')
    console.log(chalk.green('manifest JSON written to:'), manifestJSON, '\n')
  }

  async function genManifestsAndDeploy (dir, version, dest = dbPath) {
    await generateManifests(dir, version)
    await deployAndUpdateMainSrc(dir, dest)
  }

  async function genManifestsAndDeploy (dir, version, dest = dbPath) {
    await generateManifests(dir, version)
    await deployAndUpdateMainSrc(dir, dest)
  }

  // Used by both the alias plugin and the Vue plugin.
  const aliasPluginOptions = {
    entries: {
      '@assets': './frontend/assets',
      '@common': './frontend/common',
      '@components': './frontend/views/components',
      '@containers': './frontend/views/containers',
      '@controller': './frontend/controller',
      '@model': './frontend/model',
      '@pages': './frontend/views/pages',
      '@svgs': './frontend/assets/svgs',
      '@utils': './frontend/utils',
      '@view-utils': './frontend/views/utils',
      '@views': './frontend/views',
      'vue': './node_modules/vue/dist/vue.esm.js',
      '~': '.'
    }
  }

  // https://browsersync.io/docs/options
  const browserSyncOptions = {
    cors: true,
    files: [
      // Glob matching uses https://github.com/micromatch/picomatch
      `${distJS}/main.js`,
      `${distDir}/index.html`,
      `${distAssets}/**/*`,
      `${distCSS}/**/*`
    ],
    ghostMode: false,
    logLevel: grunt.option('debug') ? 'debug' : 'info',
    open: false,
    port: 3080,
    proxy: {
      target: process.env.API_URL,
      ws: true
    },
    reloadDelay: 100,
    reloadThrottle: 2000,
    tunnel: grunt.option('tunnel') && `gi${crypto.randomBytes(2).toString('hex')}`
  }

  const esbuildOptionBags = {
    // Native options that are shared between our esbuild tasks.
    default: {
      bundle: true,
      chunkNames: '[name]-[hash]-cached',
      define: {
        'process.env.BUILD': "'web'", // Required by Vuelidate.
        'process.env.CI': `'${CI}'`,
        'process.env.CONTRACTS_VERSION': `'${CONTRACTS_VERSION}'`,
        'process.env.GI_VERSION': `'${GI_VERSION}'`,
        'process.env.GI_GIT_VERSION': `'${GI_GIT_VERSION}'`,
        'process.env.LIGHTWEIGHT_CLIENT': `'${LIGHTWEIGHT_CLIENT}'`,
        'process.env.MAX_EVENTS_AFTER': `'${MAX_EVENTS_AFTER}'`,
        'process.env.NODE_ENV': `'${NODE_ENV}'`,
        'process.env.EXPOSE_SBP': `'${EXPOSE_SBP}'`,
        'process.env.ENABLE_UNSAFE_NULL_CRYPTO': `'${ENABLE_UNSAFE_NULL_CRYPTO}'`,
        'process.env.UNSAFE_TRUST_ALL_MANIFEST_SIGNING_KEYS': `'${UNSAFE_TRUST_ALL_MANIFEST_SIGNING_KEYS}'`
      },
      external: ['crypto', '*.eot', '*.ttf', '*.woff', '*.woff2'],
      format: 'esm',
      loader: {
        '.eot': 'file',
        '.ttf': 'file',
        '.woff': 'file',
        '.woff2': 'file'
      },
      minifyIdentifiers: isProduction,
      minifySyntax: isProduction,
      minifyWhitespace: isProduction,
      outdir: distJS,
      sourcemap: true,
      // Warning: split mode has still a few issues. See https://github.com/okTurtles/group-income/pull/1196
      splitting: !grunt.option('no-chunks')
    },
    // Native options used when building the main entry point.
    main: {
      assetNames: '../css/[name]',
      entryPoints: [mainSrc]
    },
    // Native options used when building our service worker(s).
    serviceWorkers: {
      entryPoints: ['./frontend/controller/serviceworkers/sw-primary.js']
    }
  }
}