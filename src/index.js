import './styles.css';
import initialPageLoad from './initialLoad';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';

document.addEventListener('DOMContentLoaded', () => {
    initialPageLoad();
    const content = document.querySelector('#content');
    const homeButton = document.querySelector('#home-tab');
    const menuButton = document.querySelector('#menu-tab');
    const aboutButton = document.querySelector('#about-tab');

    function loadContent(moduleFunction) {
        content.innerHTML = '';
        content.appendChild(moduleFunction());
    }

    homeButton.addEventListener('click', () => loadContent(createHome));
    menuButton.addEventListener('click', () => loadContent(createMenu));
    aboutButton.addEventListener('click', () => loadContent(createAbout));

    loadContent(createHome);
});