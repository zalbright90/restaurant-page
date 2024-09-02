function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const headline = document.createElement('h1');
    headline.textContent = 'About Us';
    aboutDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Welcome to our unrealistic restaurant! Where we wish we could serve you some of the finest, freshest food that will leave you saying "This is forking good!"';
    aboutDiv.appendChild(description);

    return aboutDiv;
}

export default createAbout;