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
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
});
searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value;
  const searchUrl = `https://www.google.com/search?q=${searchQuery}+jobs`;
  window.open(searchUrl, "_blank");
});
searchButton.disabled = true;
if (searchInput.value.trim() !== "") {
  searchButton.disabled = false;
}
const scrollToTopButton = document.querySelector("#scroll-to-top");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const languageButton = document.querySelector(".language-button");
const languageMenu = document.querySelector(".language-menu");

languageButton.addEventListener("click", () => {
  languageMenu.style.display =
    languageMenu.style.display === "block" ? "none" : "block";
});

languageMenu.addEventListener("click", (event) => {
  const selectedLanguage = event.target.textContent;
  const languageInput = document.querySelector(".language-input");
  languageInput.value = selectedLanguage;
  languageMenu.style.display = "none";
});

const lis = document.querySelectorAll(".li-container li");

lis.forEach((li) => {
  li.addEventListener("mouseover", () => {
    li.style.fontWeight = "600";
    li.style.fontFamily = "montserrat";
    li.style.cursor = "pointer";
  });

  li.addEventListener("mouseout", () => {
    li.style.fontWeight = "400";
    li.style.fontFamily = "montserrat-light";
    li.style.cursor = "default";
  });
});
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: "smooth" });
}
