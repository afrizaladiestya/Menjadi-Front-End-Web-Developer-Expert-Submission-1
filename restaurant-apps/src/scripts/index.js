import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/content.css';
import '../styles/responsive.css';
import '../styles/footer.css';
import Restaurants from './restaurants';

document.addEventListener("DOMContentLoaded", Restaurants);

const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        nav.classList.remove("shadow-bottom");
    } else {
        nav.classList.add("shadow-bottom");
    }
});

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});