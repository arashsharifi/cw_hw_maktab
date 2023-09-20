const menuBtns = document.querySelectorAll(".menu-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");

menuBtns.forEach(btn =>
   btn.addEventListener("click", e => {
      overlay.classList.remove("d-none");
      setTimeout(() => overlay.classList.add("opacity-50"), 0);

      hamburgerMenu.classList.remove("close");
      hamburgerMenu.classList.add("slide");
      setTimeout(() => hamburgerMenu.classList.remove("slide"), 200);
   })
);

overlay.addEventListener("click", e => {
   overlay.classList.remove("opacity-50");
   setTimeout(() => overlay.classList.add("d-none"), 200);

   hamburgerMenu.classList.add("slide");
   setTimeout(() => hamburgerMenu.classList.remove("slide"), 200);
   hamburgerMenu.classList.add("close");
});
