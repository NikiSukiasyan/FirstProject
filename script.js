function addLine(link) {
  link.style.borderBottom = "3px solid white";
  link.style.fontWeight = 600;
  link.parentNode.style.paddingBottom = "12px";
  link.style.fontFamily = "montserratBold";
}

function removeLine(link) {
  link.style.borderBottom = "";
  link.style.fontWeight = 290;
  link.parentNode.style.paddingBottom = "";
  link.style.fontFamily = "montserratlight";
}
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput.value;
  const searchUrl = `https://www.google.com/search?q=${searchQuery}+jobs`;
  window.open(searchUrl, "_blank");
});
