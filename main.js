const playButton = document.getElementById("playButton");
const videoOverlay = document.getElementById("videoOverlay");
const video = document.getElementById("personalVideo");
const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
    });
});

playButton.addEventListener("click", () => {
  videoOverlay.classList.add("hidden");
  video.play();
});
