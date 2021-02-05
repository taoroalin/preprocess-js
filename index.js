const minifyHTML = (text) => {
  return text.replace(/>\w+</, "><")
}