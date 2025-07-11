const toggleIcon= document.querySelector("#toggle-Icon");
const navBar= document.querySelector("#navBar");
toggleIcon.addEventListener("click",()=>{
  navBar.classList.toggle("nav-toggle");
})