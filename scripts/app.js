const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const menuMobile = document.querySelector(".menu-mobile");
const header = document.querySelector(".header");
const cartShopBtn = document.querySelector(".cart-shop-icon");
const cartShop = document.querySelector(".cart-shop-menu");
const overlay = document.querySelector(".overlay");

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
submenuBtn.addEventListener("click", () => {
  submenuBtn.querySelector("svg").classList.toggle("submenu--active");
  submenu.classList.toggle("submenu--open");
});

window.addEventListener("click", (event) => {
  let elem = event.target;

  if (
    elem.classList.contains("overlay") ||
    (elem.classList.contains("btn-mobile-menu") &&
      menuMobile.classList.contains("menu-mobile--open"))
  ) {
    overlay.classList.add("hidden");
  } else if (
    elem.classList.contains("overlay") ||
    elem.classList.contains("btn-mobile-menu")
  ) {
    overlay.classList.remove("hidden");
  }
  if (elem.classList.contains("btn-mobile-menu")) {
    menuMobile.classList.toggle("menu-mobile--open");
  }
  if (elem.classList.contains("cart-shop-icon")) {
    overlay.classList.remove("hidden");
    cartShop.classList.remove("-left-[100%]");
    cartShop.classList.add("left-0");
  }
  if (
    elem.classList.contains("cart-close-btn") &&
    cartShop.classList.contains("left-0")
  ) {
    overlay.classList.add("hidden");
    cartShop.classList.add("-left-[100%]");
    cartShop.classList.remove("left-0");
  }
  if (elem.classList.contains("overlay")) {
    menuMobile.classList.remove("menu-mobile--open");
    cartShop.classList.add("-left-[100%]");
    cartShop.classList.remove("left-0");
  }
});

let swiper = new Swiper(".swiper", {

  slidesPerView:2,
  spaceBetween:14,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    390:{
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768:{
      spaceBetween:20
    },
    1024: {
      slidesPerView: 4,
    },
  },
});