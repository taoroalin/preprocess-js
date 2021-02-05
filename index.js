const minifyHTML = (text) => {
  return text.replace(/>\s+</, "><").replace(/\s{2,}/, " ")
}

const minifyCSS = (text) => {
  return text.replace(/;\s+/, ";").replace(/\{\s+/, "{").replace(/\}\s+/, "}");
}

const preprocessTemplates = (htmlText) => {
  return htmlText;
}