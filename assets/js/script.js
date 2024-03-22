let BtnToggle = document.querySelector(".nav-toggle-btn");
let ActiveList = document.querySelector(".link-list");
BtnToggle.addEventListener("click", function () {
  BtnToggle.classList.toggle("active");
  ActiveList.classList.toggle("active-list");
});

let NavPar = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (scrollY >= 150) {
    NavPar.style.position = "fixed";
    
  } else {
    NavPar.style.position = "static";
  }
});


