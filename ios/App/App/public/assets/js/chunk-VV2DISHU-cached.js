// frontend/model/settings/colors.js
var colors_default = {
  "light": {
    "name": "light",
    "theme": "light",
    primary_0: "#0288d1",
    primary_1: "#b3dbf2",
    primary_2: "#e5f3fA",
    success_0: "#40854f",
    success_1: "#bfd4c3",
    success_2: "#e4f1e7",
    warning_0: "#ff6f00",
    warning_0_text: "#73492a",
    warning_1: "#ffcea8",
    warning_2: "#ffeee0",
    danger_0: "#c62828",
    danger_1: "#ebb3b3",
    danger_2: "#faebeb",
    danger_3: "#c62828",
    text_0: "#363636",
    text_1: "#707070",
    general_0: "#dbdbdb",
    general_1: "#ededed",
    general_2: "#f5f5f5",
    background_0: "#ffffff"
  },
  "dark": {
    "name": "dark",
    "theme": "dark",
    primary_0: "#2CB1E5",
    primary_1: "#637D87",
    primary_2: "#3D5965",
    success_0: "#7BD199",
    success_1: "#647A70",
    success_2: "#29593A",
    warning_0: "#F28A2B",
    warning_1: "#615850",
    warning_2: "#825E3D",
    danger_0: "#FF938C",
    danger_1: "#807474",
    danger_2: "#5F3A38",
    danger_3: "#FF4B40",
    text_0: "#E8E8E8",
    text_1: "#AEAEAE",
    general_0: "#717879",
    general_1: "#1E2021",
    general_2: "#2E3032",
    background_0: "#383C3E"
  }
  // 'green': {
  //   'name': 'green',
  //   'theme': 'light',
  //   primary_0: '#0288d1',
  //   primary_1: '#b3dbf2',
  //   primary_2: '#e5f3fA',
  //   success_0: '#40854f',
  //   success_1: '#bfd4c3',
  //   success_2: '#e4f1e7',
  //   warning_0: '#ff6f00',
  //   warning_1: '#ffcea8',
  //   warning_2: '#ffeee0',
  //   danger_0: '#c62828',
  //   danger_1: '#ebb3b3',
  //   danger_2: '#faebeb',
  //   text_0: '#363636',
  //   text_1: '#7a7a7a',
  //   general_0: '#dbdbdb',
  //   general_1: '#ededed',
  //   general_2: '#f5f5f5',
  //   background_0: '#ffffff'
  // },
  // 'yellow': {
  //   'name': 'yellow',
  //   'theme': 'light',
  //   primary_0: '#0288d1',
  //   primary_1: '#b3dbf2',
  //   primary_2: '#e5f3fA',
  //   success_0: '#40854f',
  //   success_1: '#bfd4c3',
  //   success_2: '#e4f1e7',
  //   warning_0: '#ff6f00',
  //   warning_1: '#ffcea8',
  //   warning_2: '#ffeee0',
  //   danger_0: '#c62828',
  //   danger_1: '#ebb3b3',
  //   danger_2: '#faebeb',
  //   text_0: '#363636',
  //   text_1: '#7a7a7a',
  //   general_0: '#dbdbdb',
  //   general_1: '#ededed',
  //   general_2: '#f5f5f5',
  //   background_0: '#ffffff'
  // }
};

// frontend/views/utils/colorsManipulation.js
var colorsManipulation_default = {
  methods: {
    // Takes colors in hex format (i.e. #F06D06)
    // and lightens or darkens them with a value
    lightenDarkenColor(col, amt) {
      return this.HSLToHex(...this.hexToHSLDarken(col, amt));
    },
    // Modified version of https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
    hexToRgbA(hex, alpha) {
      let c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = Number("0x" + c.join(""));
        return `rgba(${[c >> 16 & 255, c >> 8 & 255, c & 255].join(",")},${alpha})`;
      }
      throw new Error("Bad Hexa");
    },
    // Modified version of https://gist.github.com/mjackson/5311256
    HSLToHex(h, s, l) {
      let r = 0;
      let g = 0;
      let b = 0;
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p2, q2, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
          if (t < 1 / 2) return q2;
          if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          return p2;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    },
    // Modified version of https://gist.github.com/mjackson/5311256
    hexToHSLDarken(hex, increase) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result === null) return [NaN, NaN, NaN];
      let r = parseInt(result[1], 16);
      let g = parseInt(result[2], 16);
      let b = parseInt(result[3], 16);
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;
      let s = 0;
      let l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: {
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          }
          case g: {
            h = (b - r) / d + 2;
            break;
          }
          case b: {
            h = (r - g) / d + 4;
            break;
          }
        }
        h /= 6;
      }
      l = l + increase;
      return [h, s, l];
    }
  }
};

export {
  colors_default,
  colorsManipulation_default
};
//# sourceMappingURL=chunk-VV2DISHU-cached.js.map
