let section = document.querySelectorAll("section");
let nav = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      nav.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scroll > 100);
  menu.classList.remove("fa-x");
  navbar.classList.remove("active");
};

let menu = document.querySelector("#menu-i");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

const typed = new Typed(".multi-text", {
  strings: [
    "front - end devloper",
    "back - end devloper",
    "full-stack devloper",
    "java programmer",
  ],
  typeSpeed: 200,
  backSpeed: 200,
  typeDelay: 3000,
  loop: true,
});

ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });
ScrollReveal().reveal(".home1,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.portfolio-container,.contect form", {
  origin: "bottom",
});
