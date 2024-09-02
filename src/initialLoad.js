import logoImage from './images/logo.png';

function initialPageLoad() {
    const content = document.querySelector('#content');

    // Create Logo
    const logo = document.createElement('img');
    logo.src = logoImage;
    logo.alt = 'The Twisted Fork Logo';
    logo.classList.add('logo');

    // Create headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Twisted Fork!';

    // Create the description paragraph
    const description = document.createElement('p');
    description.textContent = 'Forking good food served fresh daily in a cozy environment. Join us for a delicious meal!';

    // Append elements to #content
    content.appendChild(logo);
    content.appendChild(headline);
    content.appendChild(description);
}

export default initialPageLoad;