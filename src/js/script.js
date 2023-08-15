import initDropMenu from "./modules/dropDownMenu.js";
import initAnimacaoScroll from "./modules/scrollAnimation.js";
import initScrollTop from "./modules/scrollTop.js";

initAnimacaoScroll();
initScrollTop();

const dropbtn = document.querySelector(".dropbtn");
dropbtn.addEventListener("click", initDropMenu);
