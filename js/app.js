const menuBTn = document.querySelector(".menu-icon span");
const cancelBTn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBTn.onclick = () => {
  items.classList.add("active");
  menuBTn.classList.add("hide");
  cancelBTn.classList.add("show");
};
cancelBTn.onclick = () => {
  items.classList.remove("active");
  menuBTn.classList.remove("hide");
  cancelBTn.classList.remove("show");
};
