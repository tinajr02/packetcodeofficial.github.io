const menuBar = document.querySelector(".icon-sqare");
const navBar = document.querySelector(".navigation");
menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
window.onscroll=()=>{
  navBar.classList.remove("active");
}