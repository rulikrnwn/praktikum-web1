// ============== MENU NAVBAR ================
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};

// ============== STICKY NAVBAR ================
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});


// ============== DARK THEME================
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

const typed = new Typed(".multiple-text", {
  strings: ["Sistem Informasi."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const sr = ScrollReveal({
  distance: "200px",
  duration: 3500,
  delay: 200,
  reset: true,
});

sr.reveal(".home-container h3", { origin: "top" });
sr.reveal(".home-container h1", { origin: "left" });
sr.reveal(".home-container p", { origin: "left" });
sr.reveal(".home-container .right", { origin: "right" });
sr.reveal(".social-icons-container", { origin: "right" });