# iOS Development flow
This is about launching 'live-reload' mode for iOS development. We need two separate cmd terminal open for this.
One for running `grunt dev` command, and the other for running `npm run dev:ios` command.
The `npx cap open ios` command executed as part of `npm run dev:ios` will launch Xcode. Select either iOS emulator or a physical iOS device if you have one connected and press the play button. Then the Xcode will install/launch the app on the device.

## 1. `npx cap sync` command
The `npx cap sync` command is the glue between the web code and the native iOS/Android projects. It performs:
- Moving the built web assets to the ios/Android folder
- Installing native plugins

There are times when this command needs to be run:
1. After Installing or Removing a Plugin
2. After Changing `capacitor.config.json` file

## 2. `"server"` entry in `capacitor.config.json` file
It is there to enable [live-reload](https://capacitorjs.com/docs/guides/live-reload) for development in mobile emulators / our physical devices. Once the development is done and the app needs to be built for PROD, this should be removed.

## 3. Steps for launching 'live-reload' app with android device.

3-1. IMPORTANT!!
Go to `AndroidMainfest.xml` file and on the <application> tag, specify `android:usesCleartextTraffic="true"` on it.

3-2. In `capacitor.config.json` file, add below section:

```js
"server": {
  "url": "http://localhost:3000",
  "cleartext": true
}
```

3-3. Run `npx cap sync android` command.

3-4. Connect my android device to my Mac. Make sure Mac recognise the device.

3-5. Launch the GI dev-server by running `grunt dev`

3-6. On another command shell, run `adb reverse port:3000 port:3000`. This sets up _reverse port forwarding_ between my android device and my development computer(Mac). -
Any application on the Android device that tries to connect to `localhost:3000` (on the device) will have its traffic automatically redirected to `localhost:3000` on your computer. This is extremely useful for testing and debugging mobile applications that need to communicate with a backend server running locally on your development machine.

If `adb`(Android Debug Bridge) is not installed yet, use homebrew to download and install it on the machine.

## 4. live-reload mode with iOS simulator
There is no reverse port forwarding step required for developing with iOS emulator. (iOS simulator runs as a process directly on your macOS networking stack. It shares your Mac's localhost automatically.) But it does require some `clearText: true` equvalent task. Go to `Info.plist` file and add:

```html
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
  <key>NSAllowsLocalNetworking</key>
  <true/>
</dict>
```

at the end of the top level `<dict>` tag.

Adding
```js
"server": {
  "url": "http://localhost:3000",
  "cleartext": true
}
```
and running `npx cap sync ios` ->
run `npx cap open ios` ->
run `grunt dev` ->
Press the play button in the Xcode to launch the iOS emulator and the app

will do.
