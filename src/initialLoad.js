import logoImage from './images/logo.png';
function createHeader() {
    const header = document.createElement('header');

    // Create and insert logo
    const logo = document.createElement('img');
    logo.src = logoImage;
    logo.alt = 'The Twisted Fork Logo';
    logo.classList.add('logo');
    header.appendChild(logo);

    // Create navigation
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    homeButton.id = 'home-tab';
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.id = 'menu-tab';
    menuButton.textContent = 'Menu';

    const aboutButton = document.createElement('button');
    aboutButton.id = 'about-tab';
    aboutButton.textContent = 'About';

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    header.appendChild(nav);

    return header;
}

function initialPageLoad() {
    const body = document.querySelector('body');
    
    // Create and insert header
    const header = createHeader();
    body.insertBefore(header, document.querySelector('#content'));
    
    // Optionally, insert initial content
    const content = document.querySelector('#content');
    const initialContent = document.createElement('div');
    initialContent.textContent = 'Initial content goes here.';
    content.appendChild(initialContent);
}

export default initialPageLoad;