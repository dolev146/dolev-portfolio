// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// set initioal state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}


const splider = document.querySelector('.splide')
const div = `<div class="splide__track">
                <ul class="splide__list">
                    <a href="dolevstore.html" class=" splide__slide">
                        <img src="img/projects/dolev-store.png">
                    </a>
                    <a href="vacations.html" class=" splide__slide">
                        <img src="img/projects/vacations-react.png">
                    </a>
                    <a href="chat.html" class="splide__slide">
                        <img src="img/projects/chat-cord.png">
                    </a>
                    <a href="cryptonye.html" class="splide__slide">
                        <img src="img/projects/coin-coiny.png">
                    </a>
                </ul>
            </div>
            <div class="splide__progress">
                <div class="splide__progress__bar">
                </div>
            </div>`;
splider.innerHTML = div