document.getElementById("font-select").addEventListener("change", function () {
  const fontType = this.value;
  document.getElementById("textarea").style.fontFamily = fontType;
});
document.getElementById("font-size-select").addEventListener("change", function () {
  const fontSize = this.value;
  document.getElementById("textarea").style.fontSize = fontSize;
});
document.getElementById("italic").addEventListener("change", function () {
  const fontStyle = this.checked ? "italic" : "normal";
  document.getElementById("textarea").style.fontStyle = fontStyle;
});

document.getElementById("bold").addEventListener("change", function () {
  const fontWeight = this.checked ? "bold" : "normal";
  document.getElementById("textarea").style.fontWeight = fontWeight;
});
document.getElementById("underLine").addEventListener("change", function () {
  const fontUnderLine = this.checked ? "underline": "none";
  document.getElementById("textarea").style.textDecoration = fontUnderLine;
});
