import {
  IMAGE_ATTACHMENT_MAX_SIZE,
  KILOBYTE
} from "./chunk-LOAVQ5PN-cached.js";
import {
  esm_default
} from "./chunk-5B2FVEZA-cached.js";

// frontend/utils/image.js
function imageDataURItoBlob(dataURI) {
  const [prefix, data] = dataURI.split(",");
  const [imageType] = /image\/[^;]+/.exec(prefix) || [""];
  const byteString = atob(data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: imageType });
}
var imageUpload = async (imageFile, params) => {
  const file = imageFile;
  console.debug("will upload a picture of type:", file.type);
  const { download } = await esm_default("chelonia/fileUpload", imageFile, { type: file.type, cipher: "aes256gcm" }, params);
  return download;
};
function supportsWebP() {
  const verySmallWebP = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
  const img = new Image();
  return new Promise((resolve) => {
    img.onload = () => {
      resolve(img.height > 0);
    };
    img.onerror = (e) => {
      resolve(false);
    };
    img.src = verySmallWebP;
  });
}
function loadImage(url) {
  const imgEl = new Image();
  return new Promise((resolve) => {
    imgEl.onload = () => {
      resolve(imgEl);
    };
    imgEl.src = url;
  });
}
function generateImageBlobByCanvas({
  sourceImage,
  resizingFactor,
  quality,
  compressToType
}) {
  const { naturalWidth, naturalHeight } = sourceImage;
  const canvasEl = document.createElement("canvas");
  const c = canvasEl.getContext("2d");
  canvasEl.width = naturalWidth * resizingFactor;
  canvasEl.height = naturalHeight * resizingFactor;
  c.drawImage(
    sourceImage,
    0,
    0,
    canvasEl.width,
    canvasEl.height
  );
  return new Promise((resolve) => {
    canvasEl.toBlob((blob) => {
      resolve(blob);
    }, compressToType, quality);
  });
}
function getResizingFactor(sourceImage) {
  const imageMaxDimension = { width: 2048, height: 1536 };
  const { naturalWidth, naturalHeight } = sourceImage;
  if (naturalWidth > imageMaxDimension.width || naturalHeight > imageMaxDimension.height) {
    return Math.min(imageMaxDimension.width / naturalWidth, imageMaxDimension.height / naturalHeight);
  }
  return 1;
}
async function compressImage(imgUrl, sourceMimeType) {
  const compressToType = await supportsWebP() ? "image/webp" : "image/jpeg";
  const sourceImage = await loadImage(imgUrl);
  let quality = ["image/jpeg", "image/webp"].includes(sourceMimeType) ? 0.8 : 0.9;
  const resizingFactor = getResizingFactor(sourceImage);
  while (true) {
    const blob = await generateImageBlobByCanvas({
      sourceImage,
      resizingFactor,
      quality,
      compressToType
    });
    const sizeDiff = blob.size - IMAGE_ATTACHMENT_MAX_SIZE;
    if (sizeDiff <= 0 || // if the compressed image is already smaller than the max size, return the compressed image.
    quality <= 0.3) {
      return blob;
    } else {
      const minusFactor = sizeDiff > 100 * KILOBYTE ? 0.1 : 0.05;
      quality -= minusFactor;
    }
  }
}

export {
  imageDataURItoBlob,
  imageUpload,
  compressImage
};
//# sourceMappingURL=chunk-DXIHOQP2-cached.js.map
