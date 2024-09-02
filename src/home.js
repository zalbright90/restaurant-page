function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Twisted Fork!';
    homeDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Forking good food served fresh daily in a cozy environment. Join us for a delicious meal!';
    homeDiv.appendChild(description);

    return homeDiv;
}

export default createHome;