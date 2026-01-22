import {
  TextObjectType
} from "./chunk-LOAVQ5PN-cached.js";
import {
  getIdFromChannelMention,
  makeChannelMention
} from "./chunk-HRFGMP2Q-cached.js";
import {
  makeMentionFromUserID
} from "./chunk-A3KNU2XZ-cached.js";
import {
  ProfileCard_default
} from "./chunk-GDHKI2YN-cached.js";
import {
  logExceptNavigationDuplicated,
  validateURL
} from "./chunk-OBUPKMDO-cached.js";
import {
  CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR,
  CHATROOM_MEMBER_MENTION_SPECIAL_CHAR,
  CHATROOM_PRIVACY_LEVEL,
  CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS
} from "./chunk-UYGYRQRQ-cached.js";
import {
  OPEN_TOUCH_LINK_HELPER
} from "./chunk-4UEGBI3X-cached.js";
import {
  mapGetters
} from "./chunk-J6S33KSG-cached.js";
import {
  L
} from "./chunk-5ORPBQD5-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape2(html2) {
  return html2.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ""), "\n");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let raw = "";
      let itemContents = "";
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        let blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = raw.trimEnd();
      list2.items[list2.items.length - 1].text = itemContents.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (const header of headers) {
      item.header.push({
        text: header,
        tokens: this.lexer.inline(header)
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell)
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = "\\p{P}$+<=>`^|~";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    let lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/^\S*/)?.[0];
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html2, block2) {
    return html2;
  }
  heading(text, level, raw) {
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul";
    const startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text, task, checked) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag2 = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const genericToken = token;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          const headingToken = token;
          out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape2(this.parseInline(headingToken.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const codeToken = token;
          out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
          continue;
        }
        case "table": {
          const tableToken = token;
          let header = "";
          let cell = "";
          for (let j = 0; j < tableToken.header.length; j++) {
            cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), { header: true, align: tableToken.align[j] });
          }
          header += this.renderer.tablerow(cell);
          let body = "";
          for (let j = 0; j < tableToken.rows.length; j++) {
            const row = tableToken.rows[j];
            cell = "";
            for (let k = 0; k < row.length; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: tableToken.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          const blockquoteToken = token;
          const body = this.parse(blockquoteToken.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          const listToken = token;
          const ordered = listToken.ordered;
          const start = listToken.start;
          const loose = listToken.loose;
          let body = "";
          for (let j = 0; j < listToken.items.length; j++) {
            const item = listToken.items[j];
            const checked = item.checked;
            const task = item.task;
            let itemBody = "";
            if (item.task) {
              const checkbox = this.renderer.checkbox(!!checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox + " "
                  });
                }
              } else {
                itemBody += checkbox + " ";
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, !!checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          const htmlToken = token;
          out += this.renderer.html(htmlToken.text, htmlToken.block);
          continue;
        }
        case "paragraph": {
          const paragraphToken = token;
          out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
          continue;
        }
        case "text": {
          let textToken = token;
          let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          const escapeToken = token;
          out += renderer.text(escapeToken.text);
          break;
        }
        case "html": {
          const tagToken = token;
          out += renderer.html(tagToken.text);
          break;
        }
        case "link": {
          const linkToken = token;
          out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
          break;
        }
        case "image": {
          const imageToken = token;
          out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
          break;
        }
        case "strong": {
          const strongToken = token;
          out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
          break;
        }
        case "em": {
          const emToken = token;
          out += renderer.em(this.parseInline(emToken.tokens, renderer));
          break;
        }
        case "codespan": {
          const codespanToken = token;
          out += renderer.codespan(codespanToken.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          const delToken = token;
          out += renderer.del(this.parseInline(delToken.tokens, renderer));
          break;
        }
        case "text": {
          const textToken = token;
          out += renderer.text(textToken.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              values = values.concat(this.walkTokens(genericToken[childTokens], callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, options2) => {
      const origOpt = { ...options2 };
      const opt = { ...this.defaults, ...origOpt };
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = this.#onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// frontend/views/utils/markdown-utils.js
marked.use({
  extensions: [
    {
      name: "link",
      level: "inline",
      renderer(token) {
        const { isValid, isExternalLink } = validateURL(token.href, true);
        if (isValid) {
          const { href, text } = token;
          return `<a class="link" href="${href}" ${isExternalLink ? 'target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
        }
        return token.raw;
      }
    }
  ]
});
function renderMarkdown(str) {
  const strSplitByCodeMarkdown = splitStringByMarkdownCode(str);
  strSplitByCodeMarkdown.forEach((entry, index) => {
    if (entry.type === "plain" && strSplitByCodeMarkdown[index - 1]?.text !== "```") {
      let entryText = entry.text;
      entryText = entryText.replace(/</g, "&lt;").replace(/(?<!(^|\n))>/g, "&gt;");
      entryText = entryText.replace(/\n(?=\n)/g, "\n\n<br/>\n");
      entry.text = entryText;
    }
  });
  str = combineMarkdownSegmentListIntoString(strSplitByCodeMarkdown);
  let converted = marked.parse(str, { gfm: true });
  converted = converted.replace(/<([a-z]+)>\n/g, "<$1>").replace(/\n<\/([a-z]+)>/g, "</$1>");
  converted = converted.replace(/<br\/>\s*?(<ul>|<ol>|<blockquote>)/g, "$1").replace(/(<\/ul>|<\/ol>|<\/blockquote>)\s*?<br\/>/g, "$1");
  return converted;
}
function injectOrStripSpecialChar(str, type, startIndex, endIndex) {
  const charMap = {
    "bold": "**",
    "italic": "_",
    "code": "`",
    "strikethrough": "~"
  };
  let segment = str.slice(startIndex, endIndex);
  let before = str.slice(0, startIndex);
  let after = str.slice(endIndex);
  let focusStart = startIndex;
  let focusEnd = endIndex;
  const specialChar = charMap[type];
  if (!specialChar) {
    return {
      output: str,
      focusIndex: { start: focusStart, end: focusEnd }
    };
  }
  if (before.endsWith(specialChar) && after.startsWith(specialChar)) {
    const len = specialChar.length;
    before = before.slice(0, before.length - len);
    after = after.slice(len);
    focusStart -= len;
    focusEnd -= len * 2;
  } else if (segment.startsWith(specialChar) && segment.endsWith(specialChar)) {
    const len = specialChar.length;
    segment = segment.slice(len, segment.length - len);
    focusEnd -= len * 2;
  } else {
    const len = specialChar.length;
    segment = `${specialChar}${segment}${specialChar}`;
    focusEnd += len * 2;
  }
  const output = before + segment + after;
  return { output, focusIndex: { start: focusStart, end: focusEnd } };
}
function injectOrStripLink(str, startIndex, endIndex) {
  let segment = str.slice(startIndex, endIndex);
  let before = str.slice(0, startIndex);
  let after = str.slice(endIndex);
  let focusIndex;
  if (before.endsWith("[") && /^\]\(.+\)/.test(after)) {
    before = before.slice(0, before.length - 1);
    after = after.replace(/^\]\(.+\)/, "");
    focusIndex = {
      start: (before + segment).length,
      end: (before + segment).length
    };
  } else if (/^\[(.*)\]\(.+\)$/.test(segment)) {
    segment = segment.replace(/^\[(.*)\]\(.+\)$/, "$1");
    focusIndex = {
      start: (before + segment).length,
      end: (before + segment).length
    };
  } else {
    segment = `[${segment}](url)`;
    focusIndex = {
      start: (before + segment).length - 4,
      end: (before + segment).length - 1
    };
  }
  return {
    output: before + segment + after,
    focusIndex
  };
}
function splitStringByMarkdownCode(str) {
  const regExCodeMultiple = /(```[a-z]*?\n[\s\S]*?```$)/gm;
  const regExCodeInline = /(`[^`]+`)/g;
  const splitByMulitpleCode = str.split(regExCodeMultiple);
  const finalArr = [];
  for (const segment of splitByMulitpleCode) {
    if (regExCodeMultiple.test(segment)) {
      finalArr.push({ type: "code", text: segment });
    } else {
      const splitByInlineCode = segment.split(regExCodeInline).map((piece) => {
        return regExCodeInline.test(piece) ? { type: "code", text: piece } : { type: "plain", text: piece };
      });
      finalArr.push(...splitByInlineCode);
    }
  }
  return finalArr;
}
function combineMarkdownSegmentListIntoString(segmentList) {
  return segmentList.reduce(
    (concatenated, entry) => concatenated + entry.text,
    ""
  );
}

// frontend/views/containers/chatroom/chat-mentions/chat-mentions-utils.js
function htmlStringToDomObjectTree(htmlString) {
  const parser2 = new DOMParser();
  htmlString = replaceMultiple(htmlString, { "&lt;": "(&lt;)", "&gt;": "(&gt;)" });
  const doc = parser2.parseFromString(htmlString, "text/html");
  const rootNode = doc.body;
  return createRecursiveDomObjects(rootNode)?.children || [];
}
function isOnlyNewlines(str) {
  return /^[\n]*$/.test(str);
}
function replaceMultiple(input, replacements) {
  return Object.entries(replacements).reduce(
    // $FlowFixMe[prop-missing]
    (str, [from, to]) => str.replaceAll(from, to),
    input
  );
}
function createRecursiveDomObjects(element) {
  const isNodeTypeText = element?.nodeType === Node.TEXT_NODE;
  const isNodeCodeElement = element?.nodeName === "CODE";
  const nodeObj = isNodeTypeText ? {
    tagName: null,
    attributes: {},
    text: replaceMultiple(element.textContent, { "(<)": "&lt;", "(>)": "&gt;" })
  } : {
    tagName: element.tagName,
    text: isNodeCodeElement ? replaceMultiple(
      element.innerText,
      {
        "<br>": "",
        "&gt;": ">",
        "&lt;": "<",
        "(<)": "<",
        "(>)": ">"
      }
    ) : void 0,
    attributes: {}
  };
  if (element.attributes?.length) {
    for (const attr of element.attributes) {
      nodeObj.attributes[attr.name] = attr.value;
    }
  }
  if (!isNodeCodeElement && element.childNodes?.length) {
    nodeObj.children = [];
    for (const child of element.childNodes) {
      nodeObj.children.push(createRecursiveDomObjects(child));
    }
    nodeObj.children = nodeObj.children.filter((child) => {
      if (child.tagName) return true;
      else return Boolean(child.text?.length) && !isOnlyNewlines(child.text);
    });
  }
  return nodeObj;
}

// frontend/views/containers/chatroom/chat-mentions/RenderMessageText.vue
var __vue_script__ = {
  name: "RenderMessageText",
  components: {
    ProfileCard: ProfileCard_default
  },
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    },
    tag: {
      type: String,
      default: "p"
    },
    edited: Boolean,
    isReplyingMessage: Boolean
  },
  computed: {
    ...mapGetters([
      "usernameFromID",
      "chatRoomsInDetail"
    ]),
    textObjects() {
      return this.generateTextObjectsFromText(this.text);
    },
    possibleMentions() {
      return [
        // Use `reverseNamespaceLookups` instead of `ourContactProfilesById`
        // so that all known usernames can be treated as a mention, even those
        // that correspond to contracts we don't subscribe to.
        // For example, if someone else leaves a group and then we join from
        // a different device, we might not sync their contract.
        ...Object.keys(this.$store.state.reverseNamespaceLookups).map((u) => makeMentionFromUserID(u).me).filter((v) => !!v),
        makeChannelMention("[^\\s]+", true)
        // chat-mention as contractID has a format of `#:chatID:...`. So target them as a pattern instead of the exact strings.
      ];
    },
    showTrailingEllipsis() {
      return this.isReplyingMessage && this.text.length === CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS;
    }
  },
  methods: {
    isText(o) {
      return o.type === TextObjectType.Text;
    },
    isMemberMention(o) {
      return o.type === TextObjectType.MemberMention;
    },
    isChannelMention(o) {
      return o.type === TextObjectType.ChannelMention;
    },
    generateTextObjectsFromText(text) {
      const containsMentionChar = (str) => new RegExp(`[${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR}]`, "g").test(text);
      const wrapEmojis = (str) => {
        const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|[\u2615-\u27BF]|\u200D)/gu;
        return str.replace(emojiRegex, '<span class="chat-emoji">$1</span>');
      };
      if (!text) {
        return [];
      }
      if (!containsMentionChar(text)) {
        return [{
          type: TextObjectType.Text,
          text: wrapEmojis(text)
        }];
      }
      const allMention = makeMentionFromUserID("").all;
      const regExpPossibleMentions = new RegExp(`(?<=\\s|^)(${allMention}|${this.possibleMentions.join("|")})(?=[^\\w\\d]|$)`);
      return text.split(regExpPossibleMentions).map((t) => {
        const genDefaultTextObj = (text2) => ({
          type: TextObjectType.Text,
          text: wrapEmojis(text2)
        });
        const genChannelMentionObj = (text2) => {
          const chatRoomID = getIdFromChannelMention(text2);
          const found = Object.values(this.chatRoomsInDetail).find((details) => details.id === chatRoomID);
          if (found) {
            const isPrivate = found.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE;
            const shouldDisable = isPrivate && !found.joined;
            return {
              type: TextObjectType.ChannelMention,
              text: shouldDisable ? L("private channel") : found.name,
              icon: isPrivate ? "lock" : "hashtag",
              disabled: shouldDisable,
              chatRoomID: found.id
            };
          } else {
            return {
              type: TextObjectType.ChannelMention,
              text: L("unknown chatroom"),
              icon: "ban",
              disabled: true,
              chatRoomID
            };
          }
        };
        const genMemberMentionObj = (text2) => {
          const userID = text2.slice(1);
          return {
            type: TextObjectType.MemberMention,
            text: CHATROOM_MEMBER_MENTION_SPECIAL_CHAR + this.usernameFromID(userID),
            userID,
            toMe: userID === this.currentUserID
          };
        };
        if (t === allMention) {
          return { type: TextObjectType.MemberMention, text: t, toMe: true };
        }
        return regExpPossibleMentions.test(t) ? t.startsWith(CHATROOM_MEMBER_MENTION_SPECIAL_CHAR) ? genMemberMentionObj(t) : genChannelMentionObj(t) : genDefaultTextObj(t);
      });
    },
    navigateToChatRoom(obj) {
      if (obj.disabled || obj.chatRoomID === this.$route.params?.chatRoomID) {
        return;
      }
      this.$router.push({
        name: "GroupChatConversation",
        params: { chatRoomID: obj.chatRoomID }
      });
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.tag,
    _vm._g(
      _vm._b(
        {
          tag: "component",
          staticClass: "c-message-text",
          class: {
            "is-replying": _vm.isReplyingMessage,
            "has-trailing-ellipsis": _vm.showTrailingEllipsis
          }
        },
        "component",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm._l(_vm.textObjects, function(objText) {
        return [
          _vm.isText(objText) ? _c("span", {
            directives: [
              {
                name: "safe-html",
                rawName: "v-safe-html:a",
                value: objText.text,
                expression: "objText.text",
                arg: "a"
              }
            ]
          }) : _vm.isMemberMention(objText) ? [
            objText.userID ? _c(
              "span",
              { staticClass: "c-mention-profile-card-wrapper" },
              [
                _c(
                  "profile-card",
                  {
                    attrs: {
                      contractID: objText.userID,
                      direction: "top-left"
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "c-member-mention",
                        class: { "c-mention-to-me": objText.toMe }
                      },
                      [_vm._v(_vm._s(objText.text))]
                    )
                  ]
                )
              ],
              1
            ) : _c(
              "span",
              { staticClass: "c-member-mention c-mention-to-me" },
              [_vm._v(_vm._s(objText.text))]
            )
          ] : _vm.isChannelMention(objText) ? _c(
            "span",
            {
              staticClass: "c-channel-mention",
              class: { "is-disabled": objText.disabled },
              attrs: { tabindex: objText.disabled ? void 0 : 0 },
              on: {
                click: function($event) {
                  return _vm.navigateToChatRoom(objText);
                },
                keyup: function($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                    return null;
                  }
                  return _vm.navigateToChatRoom(objText);
                }
              }
            },
            [
              _c("i", { class: "icon-" + objText.icon }),
              _c("span", [_vm._v(_vm._s(objText.text))])
            ]
          ) : _vm._e()
        ];
      }),
      !_vm.isReplyingMessage && _vm.edited ? _c("i18n", { staticClass: "c-edited" }, [_vm._v("(edited)")]) : _vm._e()
    ],
    2
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-5f00393c_0", { source: '.c-mention-profile-card-wrapper[data-v-5f00393c] {\n  display: inline-block;\n}\n.c-member-mention[data-v-5f00393c],\n.c-channel-mention[data-v-5f00393c] {\n  background-color: var(--primary_2);\n  color: var(--primary_0);\n  padding: 0 0.2rem 0.2rem;\n}\n.c-member-mention.c-mention-to-me[data-v-5f00393c] {\n  background-color: var(--warning_1);\n}\n.c-message-text.is-replying[data-v-5f00393c] {\n  border-left: 2px;\n  border-color: #dbdbdb;\n  border-style: none none none solid;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  font-style: italic;\n  padding-left: 0.25rem;\n  white-space: pre-line;\n  margin-bottom: 0.5rem;\n}\n.c-message-text.is-replying[data-v-5f00393c]:hover {\n  cursor: pointer;\n  color: var(--text_2);\n  border-color: var(--text_1);\n}\n.c-message-text.is-replying .c-member-mention[data-v-5f00393c],\n.c-message-text.is-replying .c-channel-mention[data-v-5f00393c] {\n  background-color: transparent;\n}\n.c-message-text.is-replying.has-trailing-ellipsis[data-v-5f00393c]::after {\n  content: "...";\n  position: relative;\n  margin-top: 0.25rem;\n}\n.c-channel-mention[data-v-5f00393c] {\n  cursor: pointer;\n  transition: color 150ms;\n  outline: none;\n}\n.c-channel-mention[data-v-5f00393c]:hover, .c-channel-mention[data-v-5f00393c]:focus {\n  text-decoration: underline;\n}\n.c-channel-mention[data-v-5f00393c]:focus {\n  color: var(--text_1);\n}\n.c-channel-mention.is-disabled[data-v-5f00393c] {\n  cursor: inherit;\n  background-color: var(--general_1);\n  color: var(--text_1);\n}\n.c-channel-mention.is-disabled[data-v-5f00393c]:hover, .c-channel-mention.is-disabled[data-v-5f00393c]:focus {\n  text-decoration: none;\n  background-color: var(--general_1);\n}\n.c-channel-mention i[data-v-5f00393c] {\n  font-size: 0.75em;\n  margin-right: 4px;\n}\n.c-edited[data-v-5f00393c] {\n  margin-left: 0.2rem;\n  font-size: 0.7rem;\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=RenderMessageText.vue.map */', map: { "version": 3, "sources": ["frontend/views/containers/chatroom/chat-mentions/RenderMessageText.vue", "RenderMessageText.vue"], "names": [], "mappings": "AA2LA;EACA,qBAAA;AC1LA;AD6LA;;EAEA,kCAAA;EACA,uBAAA;EACA,wBAAA;AC1LA;AD6LA;EACA,kCAAA;AC1LA;AD8LA;EACA,gBAAA;EACA,qBAAA;EACA,kCAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;AC3LA;AD6LA;EACA,eAAA;EACA,oBAAA;EACA,2BAAA;AC3LA;AD8LA;;EAEA,6BAAA;AC5LA;AD+LA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AC7LA;ADkMA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;AC/LA;ADiMA;EAEA,0BAAA;AChMA;ADmMA;EACA,oBAAA;ACjMA;ADoMA;EACA,eAAA;EACA,kCAAA;EACA,oBAAA;AClMA;ADoMA;EAEA,qBAAA;EACA,kCAAA;ACnMA;ADuMA;EACA,iBAAA;EACA,iBAAA;ACrMA;ADyMA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;ACtMA;;AAEA,gDAAgD", "file": "RenderMessageText.vue", "sourcesContent": ["<template lang='pug'>\ncomponent.c-message-text(\n  :is='tag'\n  v-bind='$attrs'\n  v-on='$listeners'\n  :class='{ \"is-replying\": isReplyingMessage, \"has-trailing-ellipsis\": showTrailingEllipsis }'\n)\n  template(v-for='objText in textObjects')\n    span(\n      v-if='isText(objText)'\n      v-safe-html:a='objText.text'\n    )\n\n    template(v-else-if='isMemberMention(objText)')\n      span.c-mention-profile-card-wrapper(v-if='objText.userID')\n        profile-card(:contractID='objText.userID' direction='top-left')\n          span.c-member-mention(:class='{\"c-mention-to-me\": objText.toMe}') {{ objText.text }}\n      span.c-member-mention(v-else class='c-mention-to-me') {{ objText.text }}\n\n    span.c-channel-mention(\n      v-else-if='isChannelMention(objText)'\n      :tabindex='objText.disabled ? undefined : 0'\n      :class='{ \"is-disabled\": objText.disabled }'\n      @click='navigateToChatRoom(objText)'\n      @keyup.enter='navigateToChatRoom(objText)'\n    )\n      i(:class='\"icon-\" + objText.icon')\n      span {{ objText.text }}\n\n  i18n.c-edited(v-if='!isReplyingMessage && edited') (edited)\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport ProfileCard from '../../../../../frontend/views/components/ProfileCard.vue'\nimport {\n  CHATROOM_PRIVACY_LEVEL,\n  CHATROOM_MEMBER_MENTION_SPECIAL_CHAR,\n  CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR,\n  CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS\n} from '../../../../../frontend/model/contracts/shared/constants.js'\nimport { makeMentionFromUserID, makeChannelMention, getIdFromChannelMention } from '../../../../../frontend/model/chatroom/utils.js'\nimport { TextObjectType } from '../../../../../frontend/utils/constants.js'\nimport { L } from '../../../../../frontend/common/common.js'\n\nexport default ({\n  name: 'RenderMessageText',\n  components: {\n    ProfileCard\n  },\n  props: {\n    text: {\n      type: String,\n      required: true,\n      default: ''\n    },\n    tag: {\n      type: String,\n      default: 'p'\n    },\n    edited: Boolean,\n    isReplyingMessage: Boolean\n  },\n  computed: {\n    ...mapGetters([\n      'usernameFromID',\n      'chatRoomsInDetail'\n    ]),\n    textObjects () {\n      return this.generateTextObjectsFromText(this.text)\n    },\n    possibleMentions () {\n      return [\n        // Use `reverseNamespaceLookups` instead of `ourContactProfilesById`\n        // so that all known usernames can be treated as a mention, even those\n        // that correspond to contracts we don't subscribe to.\n        // For example, if someone else leaves a group and then we join from\n        // a different device, we might not sync their contract.\n        ...Object.keys(this.$store.state.reverseNamespaceLookups).map(u => makeMentionFromUserID(u).me).filter(v => !!v),\n        makeChannelMention('[^\\\\s]+', true) // chat-mention as contractID has a format of `#:chatID:...`. So target them as a pattern instead of the exact strings.\n      ]\n    },\n    showTrailingEllipsis () {\n      return this.isReplyingMessage && this.text.length === CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS\n    }\n  },\n  methods: {\n    isText (o) {\n      return o.type === TextObjectType.Text\n    },\n    isMemberMention (o) {\n      return o.type === TextObjectType.MemberMention\n    },\n    isChannelMention (o) {\n      return o.type === TextObjectType.ChannelMention\n    },\n    generateTextObjectsFromText (text) {\n      const containsMentionChar = str => new RegExp(`[${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR}]`, 'g').test(text)\n      const wrapEmojis = str => {\n        const emojiRegex = /(\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F|[\\u2615-\\u27BF]|\\u200D)/gu\n        // We should be able to style the emojis in message-text (reference issue: https://github.com/okTurtles/group-income/issues/2464)\n        return str.replace(emojiRegex, '<span class=\"chat-emoji\">$1</span>')\n      }\n\n      if (!text) { return [] }\n      if (!containsMentionChar(text)) {\n        return [{\n          type: TextObjectType.Text,\n          text: wrapEmojis(text)\n        }]\n      }\n      const allMention = makeMentionFromUserID('').all\n      const regExpPossibleMentions = new RegExp(`(?<=\\\\s|^)(${allMention}|${this.possibleMentions.join('|')})(?=[^\\\\w\\\\d]|$)`)\n\n      return text\n        // We try to find all the mentions and render them as mentions instead\n        // of regular text. The `(?<=\\\\s|^)` part ensures that a mention is\n        // preceded by a space or is the start of a line and the `(?=[^\\\\w\\\\d]|$)`\n        // ensures that it's followed by an end-of-line or a character that's not\n        // a letter or a number (so `Hi @user!` works).\n        .split(regExpPossibleMentions)\n        .map(t => {\n          const genDefaultTextObj = (text) => ({\n            type: TextObjectType.Text,\n            text: wrapEmojis(text)\n          })\n          const genChannelMentionObj = (text) => {\n            const chatRoomID = getIdFromChannelMention(text)\n            const found = Object.values(this.chatRoomsInDetail).find(details => details.id === chatRoomID)\n\n            if (found) {\n              const isPrivate = found.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE\n              const shouldDisable = isPrivate && !found.joined\n\n              return {\n                type: TextObjectType.ChannelMention,\n                text: shouldDisable ? L('private channel') : found.name,\n                icon: isPrivate ? 'lock' : 'hashtag',\n                disabled: shouldDisable,\n                chatRoomID: found.id\n              }\n            } else {\n              return {\n                type: TextObjectType.ChannelMention,\n                text: L('unknown chatroom'),\n                icon: 'ban',\n                disabled: true,\n                chatRoomID\n              }\n            }\n          }\n\n          const genMemberMentionObj = (text) => {\n            const userID = text.slice(1)\n            return {\n              type: TextObjectType.MemberMention,\n              text: CHATROOM_MEMBER_MENTION_SPECIAL_CHAR + this.usernameFromID(userID),\n              userID,\n              toMe: userID === this.currentUserID\n            }\n          }\n\n          if (t === allMention) {\n            return { type: TextObjectType.MemberMention, text: t, toMe: true }\n          }\n\n          return regExpPossibleMentions.test(t)\n            ? t.startsWith(CHATROOM_MEMBER_MENTION_SPECIAL_CHAR)\n              ? genMemberMentionObj(t)\n              : genChannelMentionObj(t)\n            : genDefaultTextObj(t)\n        })\n    },\n    navigateToChatRoom (obj) {\n      if (obj.disabled || obj.chatRoomID === this.$route.params?.chatRoomID) { return }\n      this.$router.push({\n        name: 'GroupChatConversation',\n        params: { chatRoomID: obj.chatRoomID }\n      })\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../../frontend/assets/style/_variables.scss\";\n\n.c-mention-profile-card-wrapper {\n  display: inline-block;\n}\n\n.c-member-mention,\n.c-channel-mention {\n  background-color: $primary_2;\n  color: $primary_0;\n  padding: 0 0.2rem 0.2rem;\n}\n\n.c-member-mention.c-mention-to-me {\n  background-color: $warning_1;\n}\n\n.c-message-text {\n  &.is-replying {\n    border-left: 2px;\n    border-color: #dbdbdb; // var(--text_1);\n    border-style: none none none solid;\n    font-size: 0.75rem;\n    color: var(--text_1);\n    font-style: italic;\n    padding-left: 0.25rem;\n    white-space: pre-line;\n    margin-bottom: 0.5rem;\n\n    &:hover {\n      cursor: pointer;\n      color: var(--text_2);\n      border-color: var(--text_1); // var(--text_2);\n    }\n\n    .c-member-mention,\n    .c-channel-mention {\n      background-color: transparent;\n    }\n\n    &.has-trailing-ellipsis::after {\n      content: \"...\";\n      position: relative;\n      margin-top: 0.25rem;\n    }\n  }\n}\n\n.c-channel-mention {\n  cursor: pointer;\n  transition: color 150ms;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n\n  &:focus {\n    color: $text_1;\n  }\n\n  &.is-disabled {\n    cursor: inherit;\n    background-color: $general_1;\n    color: $text_1;\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      background-color: $general_1;\n    }\n  }\n\n  i {\n    font-size: 0.75em;\n    margin-right: 4px;\n  }\n}\n\n.c-edited {\n  margin-left: 0.2rem;\n  font-size: 0.7rem;\n  color: var(--text_1);\n}\n</style>\n", '.c-mention-profile-card-wrapper {\n  display: inline-block;\n}\n\n.c-member-mention,\n.c-channel-mention {\n  background-color: var(--primary_2);\n  color: var(--primary_0);\n  padding: 0 0.2rem 0.2rem;\n}\n\n.c-member-mention.c-mention-to-me {\n  background-color: var(--warning_1);\n}\n\n.c-message-text.is-replying {\n  border-left: 2px;\n  border-color: #dbdbdb;\n  border-style: none none none solid;\n  font-size: 0.75rem;\n  color: var(--text_1);\n  font-style: italic;\n  padding-left: 0.25rem;\n  white-space: pre-line;\n  margin-bottom: 0.5rem;\n}\n.c-message-text.is-replying:hover {\n  cursor: pointer;\n  color: var(--text_2);\n  border-color: var(--text_1);\n}\n.c-message-text.is-replying .c-member-mention,\n.c-message-text.is-replying .c-channel-mention {\n  background-color: transparent;\n}\n.c-message-text.is-replying.has-trailing-ellipsis::after {\n  content: "...";\n  position: relative;\n  margin-top: 0.25rem;\n}\n\n.c-channel-mention {\n  cursor: pointer;\n  transition: color 150ms;\n  outline: none;\n}\n.c-channel-mention:hover, .c-channel-mention:focus {\n  text-decoration: underline;\n}\n.c-channel-mention:focus {\n  color: var(--text_1);\n}\n.c-channel-mention.is-disabled {\n  cursor: inherit;\n  background-color: var(--general_1);\n  color: var(--text_1);\n}\n.c-channel-mention.is-disabled:hover, .c-channel-mention.is-disabled:focus {\n  text-decoration: none;\n  background-color: var(--general_1);\n}\n.c-channel-mention i {\n  font-size: 0.75em;\n  margin-right: 4px;\n}\n\n.c-edited {\n  margin-left: 0.2rem;\n  font-size: 0.7rem;\n  color: var(--text_1);\n}\n\n/*# sourceMappingURL=RenderMessageText.vue.map */'] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-5f00393c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\ncomponent.c-message-text(\n  :is='tag'\n  v-bind='$attrs'\n  v-on='$listeners'\n  :class='{ \"is-replying\": isReplyingMessage, \"has-trailing-ellipsis\": showTrailingEllipsis }'\n)\n  template(v-for='objText in textObjects')\n    span(\n      v-if='isText(objText)'\n      v-safe-html:a='objText.text'\n    )\n\n    template(v-else-if='isMemberMention(objText)')\n      span.c-mention-profile-card-wrapper(v-if='objText.userID')\n        profile-card(:contractID='objText.userID' direction='top-left')\n          span.c-member-mention(:class='{\"c-mention-to-me\": objText.toMe}') {{ objText.text }}\n      span.c-member-mention(v-else class='c-mention-to-me') {{ objText.text }}\n\n    span.c-channel-mention(\n      v-else-if='isChannelMention(objText)'\n      :tabindex='objText.disabled ? undefined : 0'\n      :class='{ \"is-disabled\": objText.disabled }'\n      @click='navigateToChatRoom(objText)'\n      @keyup.enter='navigateToChatRoom(objText)'\n    )\n      i(:class='\"icon-\" + objText.icon')\n      span {{ objText.text }}\n\n  i18n.c-edited(v-if='!isReplyingMessage && edited') (edited)\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nimport ProfileCard from '../../../../../frontend/views/components/ProfileCard.vue'\nimport {\n  CHATROOM_PRIVACY_LEVEL,\n  CHATROOM_MEMBER_MENTION_SPECIAL_CHAR,\n  CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR,\n  CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS\n} from '../../../../../frontend/model/contracts/shared/constants.js'\nimport { makeMentionFromUserID, makeChannelMention, getIdFromChannelMention } from '../../../../../frontend/model/chatroom/utils.js'\nimport { TextObjectType } from '../../../../../frontend/utils/constants.js'\nimport { L } from '../../../../../frontend/common/common.js'\n\nexport default ({\n  name: 'RenderMessageText',\n  components: {\n    ProfileCard\n  },\n  props: {\n    text: {\n      type: String,\n      required: true,\n      default: ''\n    },\n    tag: {\n      type: String,\n      default: 'p'\n    },\n    edited: Boolean,\n    isReplyingMessage: Boolean\n  },\n  computed: {\n    ...mapGetters([\n      'usernameFromID',\n      'chatRoomsInDetail'\n    ]),\n    textObjects () {\n      return this.generateTextObjectsFromText(this.text)\n    },\n    possibleMentions () {\n      return [\n        // Use `reverseNamespaceLookups` instead of `ourContactProfilesById`\n        // so that all known usernames can be treated as a mention, even those\n        // that correspond to contracts we don't subscribe to.\n        // For example, if someone else leaves a group and then we join from\n        // a different device, we might not sync their contract.\n        ...Object.keys(this.$store.state.reverseNamespaceLookups).map(u => makeMentionFromUserID(u).me).filter(v => !!v),\n        makeChannelMention('[^\\\\s]+', true) // chat-mention as contractID has a format of `#:chatID:...`. So target them as a pattern instead of the exact strings.\n      ]\n    },\n    showTrailingEllipsis () {\n      return this.isReplyingMessage && this.text.length === CHATROOM_REPLYING_MESSAGE_LIMITS_IN_CHARS\n    }\n  },\n  methods: {\n    isText (o) {\n      return o.type === TextObjectType.Text\n    },\n    isMemberMention (o) {\n      return o.type === TextObjectType.MemberMention\n    },\n    isChannelMention (o) {\n      return o.type === TextObjectType.ChannelMention\n    },\n    generateTextObjectsFromText (text) {\n      const containsMentionChar = str => new RegExp(`[${CHATROOM_MEMBER_MENTION_SPECIAL_CHAR}${CHATROOM_CHANNEL_MENTION_SPECIAL_CHAR}]`, 'g').test(text)\n      const wrapEmojis = str => {\n        const emojiRegex = /(\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F|[\\u2615-\\u27BF]|\\u200D)/gu\n        // We should be able to style the emojis in message-text (reference issue: https://github.com/okTurtles/group-income/issues/2464)\n        return str.replace(emojiRegex, '<span class=\"chat-emoji\">$1</span>')\n      }\n\n      if (!text) { return [] }\n      if (!containsMentionChar(text)) {\n        return [{\n          type: TextObjectType.Text,\n          text: wrapEmojis(text)\n        }]\n      }\n      const allMention = makeMentionFromUserID('').all\n      const regExpPossibleMentions = new RegExp(`(?<=\\\\s|^)(${allMention}|${this.possibleMentions.join('|')})(?=[^\\\\w\\\\d]|$)`)\n\n      return text\n        // We try to find all the mentions and render them as mentions instead\n        // of regular text. The `(?<=\\\\s|^)` part ensures that a mention is\n        // preceded by a space or is the start of a line and the `(?=[^\\\\w\\\\d]|$)`\n        // ensures that it's followed by an end-of-line or a character that's not\n        // a letter or a number (so `Hi @user!` works).\n        .split(regExpPossibleMentions)\n        .map(t => {\n          const genDefaultTextObj = (text) => ({\n            type: TextObjectType.Text,\n            text: wrapEmojis(text)\n          })\n          const genChannelMentionObj = (text) => {\n            const chatRoomID = getIdFromChannelMention(text)\n            const found = Object.values(this.chatRoomsInDetail).find(details => details.id === chatRoomID)\n\n            if (found) {\n              const isPrivate = found.privacyLevel === CHATROOM_PRIVACY_LEVEL.PRIVATE\n              const shouldDisable = isPrivate && !found.joined\n\n              return {\n                type: TextObjectType.ChannelMention,\n                text: shouldDisable ? L('private channel') : found.name,\n                icon: isPrivate ? 'lock' : 'hashtag',\n                disabled: shouldDisable,\n                chatRoomID: found.id\n              }\n            } else {\n              return {\n                type: TextObjectType.ChannelMention,\n                text: L('unknown chatroom'),\n                icon: 'ban',\n                disabled: true,\n                chatRoomID\n              }\n            }\n          }\n\n          const genMemberMentionObj = (text) => {\n            const userID = text.slice(1)\n            return {\n              type: TextObjectType.MemberMention,\n              text: CHATROOM_MEMBER_MENTION_SPECIAL_CHAR + this.usernameFromID(userID),\n              userID,\n              toMe: userID === this.currentUserID\n            }\n          }\n\n          if (t === allMention) {\n            return { type: TextObjectType.MemberMention, text: t, toMe: true }\n          }\n\n          return regExpPossibleMentions.test(t)\n            ? t.startsWith(CHATROOM_MEMBER_MENTION_SPECIAL_CHAR)\n              ? genMemberMentionObj(t)\n              : genChannelMentionObj(t)\n            : genDefaultTextObj(t)\n        })\n    },\n    navigateToChatRoom (obj) {\n      if (obj.disabled || obj.chatRoomID === this.$route.params?.chatRoomID) { return }\n      this.$router.push({\n        name: 'GroupChatConversation',\n        params: { chatRoomID: obj.chatRoomID }\n      })\n    }\n  }\n}: Object)\n<\/script>\n\n<style lang=\"scss\" scoped>\n@import \"../../../../../frontend/assets/style/_variables.scss\";\n\n.c-mention-profile-card-wrapper {\n  display: inline-block;\n}\n\n.c-member-mention,\n.c-channel-mention {\n  background-color: $primary_2;\n  color: $primary_0;\n  padding: 0 0.2rem 0.2rem;\n}\n\n.c-member-mention.c-mention-to-me {\n  background-color: $warning_1;\n}\n\n.c-message-text {\n  &.is-replying {\n    border-left: 2px;\n    border-color: #dbdbdb; // var(--text_1);\n    border-style: none none none solid;\n    font-size: 0.75rem;\n    color: var(--text_1);\n    font-style: italic;\n    padding-left: 0.25rem;\n    white-space: pre-line;\n    margin-bottom: 0.5rem;\n\n    &:hover {\n      cursor: pointer;\n      color: var(--text_2);\n      border-color: var(--text_1); // var(--text_2);\n    }\n\n    .c-member-mention,\n    .c-channel-mention {\n      background-color: transparent;\n    }\n\n    &.has-trailing-ellipsis::after {\n      content: \"...\";\n      position: relative;\n      margin-top: 0.25rem;\n    }\n  }\n}\n\n.c-channel-mention {\n  cursor: pointer;\n  transition: color 150ms;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n\n  &:focus {\n    color: $text_1;\n  }\n\n  &.is-disabled {\n    cursor: inherit;\n    background-color: $general_1;\n    color: $text_1;\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      background-color: $general_1;\n    }\n  }\n\n  i {\n    font-size: 0.75em;\n    margin-right: 4px;\n  }\n}\n\n.c-edited {\n  margin-left: 0.2rem;\n  font-size: 0.7rem;\n  color: var(--text_1);\n}\n</style>\n";
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }
  component._scopeId = scope;
  if (true) {
    let hook;
    if (false) {
      hook = function(context) {
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      component._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function(context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function(context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook !== void 0) {
      if (component.functional) {
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }
  return component;
}
function __vue_create_injector__() {
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;
    const group = isOldIE ? css.media || "default" : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);
      if (false) {
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
        code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
      }
      if (isOldIE) {
        style.element = style.element || document.querySelector("style[data-group=" + group + "]");
      }
      if (!style.element) {
        const head = document.head || document.getElementsByTagName("head")[0];
        const el = style.element = document.createElement("style");
        el.type = "text/css";
        if (css.media) el.setAttribute("media", css.media);
        if (isOldIE) {
          el.setAttribute("data-group", group);
          el.setAttribute("data-next-index", "0");
        }
        head.appendChild(el);
      }
      if (isOldIE) {
        index = parseInt(style.element.getAttribute("data-next-index"));
        style.element.setAttribute("data-next-index", index + 1);
      }
      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  };
}
var __vue_component__ = /* @__PURE__ */ __vue_normalize__(
  { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
  __vue_inject_styles__,
  __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  false,
  __vue_create_injector__,
  void 0,
  void 0
);
var RenderMessageText_default = __vue_component__;

// frontend/views/containers/chatroom/chat-mentions/RenderMessageWithMarkdown.js
var RenderMessageWithMarkdown = {
  name: "RenderMessageWithMarkdown",
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    },
    edited: Boolean,
    isReplyingMessage: Boolean
  },
  render: function(createElement) {
    const { text, edited = false, isReplyingMessage = false } = this.$props;
    const domTree = htmlStringToDomObjectTree(renderMarkdown(text));
    const recursiveCall = (entry) => {
      if (entry.tagName) {
        const hasChildren = Array.isArray(entry.children);
        const isCodeElement = entry.tagName === "CODE";
        const routerOptions = { isInAppRouter: false, route: {}, href: "" };
        if (entry.tagName === "A" && entry.attributes.href) {
          const { href } = entry.attributes;
          const { url, isHttpValid } = validateURL(href, true);
          const appRouteBase = this.$router.options.base;
          const appOrigin = document.location.origin + appRouteBase;
          if (isHttpValid && url.href.startsWith(appOrigin)) {
            const path = url.pathname.split(appRouteBase)[1];
            const query = {};
            for (const [key, value] of url.searchParams) {
              query[key] = value;
            }
            routerOptions.route = { path, query, hash: url.hash };
            routerOptions.href = this.$router.resolve(routerOptions.route).href;
            routerOptions.isInAppRouter = true;
          }
        }
        const opts = routerOptions.isInAppRouter ? {
          class: "link",
          attrs: { href: routerOptions.href },
          on: {
            click: (e) => {
              routerOptions.route && this.$router.push(routerOptions.route).catch(logExceptNavigationDuplicated);
              e?.preventDefault();
            },
            touchhold: (e) => {
              routerOptions.href && esm_default("okTurtles.events/emit", OPEN_TOUCH_LINK_HELPER, routerOptions.href);
              e?.preventDefault();
            }
          }
        } : { attrs: entry.attributes || {} };
        return createElement(
          entry.tagName.toLowerCase(),
          opts,
          hasChildren ? entry.children.map((child) => recursiveCall(child)) : isCodeElement ? entry.text : void 0
        );
      } else if (entry.text) {
        return createElement(
          RenderMessageText_default,
          {
            attrs: entry.attributes || {},
            props: {
              text: entry.text,
              tag: "span"
            }
          }
        );
      }
    };
    return createElement(
      "div",
      {
        class: {
          "c-replying": isReplyingMessage,
          "custom-markdown-content": true
        },
        attrs: { ...this.$attrs || {} },
        on: { ...this.$listeners || {} }
      },
      [
        ...domTree.map((entry) => recursiveCall(entry)),
        edited && createElement(
          "span",
          {
            class: { "c-edited": true }
          },
          L("(edited)")
        )
      ].filter(Boolean)
    );
  }
};
var RenderMessageWithMarkdown_default = RenderMessageWithMarkdown;

export {
  renderMarkdown,
  injectOrStripSpecialChar,
  injectOrStripLink,
  splitStringByMarkdownCode,
  combineMarkdownSegmentListIntoString,
  RenderMessageText_default,
  RenderMessageWithMarkdown_default
};
//# sourceMappingURL=chunk-ZWWQHF5P-cached.js.map
