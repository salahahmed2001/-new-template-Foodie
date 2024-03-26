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
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
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
    DeliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

let BgLoader = document.querySelector(".bg-loader");
setTimeout(function () {
  BgLoader.style.display = "none";
}, 1000);

async function getProducts() {
  let data = await fetch("http://127.0.0.1:5501/products.json")
    .then((el) => el.json())
    .then((ele) => {
      return ele;
    });
  let MyData = ``;
  data.map((el) => {
    MyData += `
    
    <div class="card">
    <div class="red">${el.discount}</div>
    <div class="img-card">
      <button class="btn2">Order now</button>
      <img src="${el.image}" alt="" />
    </div>

    <div class="text-card">
      <div class="reting">
        <p class="r-p">${el.type}</p>
        <span class="ico">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>
      </div>
      <h3>${el.name}</h3>

      <h5>
        <span class="price">PRICE:</span>
        <span class="sp1">${el.discountedPris}</span><span class="smo">${el.price}</span>
      </h5>
    </div>
  </div>

    `;
  });
  document.querySelector(".menu-card-row").innerHTML = MyData;
}
getProducts();

async function getProducts2() {
  let data = await fetch("http://127.0.0.1:5501/products2.json")
    .then((el) => el.json())
    .then((ele) => {
      return ele;
    });
  let MyData = ``;
  data.map((el) => {
    MyData += `
    <div class="card">
    <div class="red">${el.discount}</div>
    <div class="img-card">
      <button class="btn2">Order now</button>
      <img src="${el.image}" alt="" />
    </div>

    <div class="text-card">
      <div class="reting">
        <p class="r-p">${el.type}</p>
        <span class="ico">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>
      </div>
      <h3>${el.name}</h3>

      <h5>
        <span class="price">PRICE:</span>
        <span class="sp1">${el.discountedPris}</span><span class="smo">${el.price}</span>
      </h5>
    </div>
  </div>
  
    `;
  });
  document.querySelector(".menue-card-row2").innerHTML = MyData;
}
getProducts2();
