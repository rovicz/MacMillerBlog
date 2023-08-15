export default function initDropMenu() {
  const dropdownContent = document.getElementById("myDropdown");
  const dropdownImg = document.querySelector(".dropdown-img");

  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
    dropdownImg.classList.remove("vsgtransform");
  } else {
    dropdownContent.classList.add("show");
    dropdownImg.classList.add("vsgtransform");
  }
}
