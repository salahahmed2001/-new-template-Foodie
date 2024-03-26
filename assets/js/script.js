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
    BtnBack.style.opacity = "1";
  } else {
    NavPar.style.position = "static";
    BtnBack.style.opacity = "0";
  }
});

let BtnBack = document.querySelector(".btn-back");
BtnBack.addEventListener("click", function () {
  if (scrollY > 0) {
    scrollTo(window);
  }
});

let DeliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;
window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = DeliveryBoy.getBoundingClientRect().top;
  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;
    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }
    lastScrollPos = activeScrollPos;
    DeliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`
  }
});

// window.addEventListener("scroll", function () {
//   let value = scrollY;
//   if (this.scrollY >= 1900) {
//     // DeliveryBoy.style.left = value + "px";
//     DeliveryBoy.style.left = "100px";
//   } else {
//     DeliveryBoy.style.left = "0px";
//     // DeliveryBoy.style.right = value + "px";
//   }
// });

// data-delivery-boy
