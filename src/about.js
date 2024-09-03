function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const headline = document.createElement('h1');
    headline.textContent = 'About Us';
    aboutDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'At The Twisted Fork, we believe in the power of delicious food to bring people together. It all started with a passion for culinary excellence that drives our dedicated team led by Zach, who brings years of experience to the table. We meticulously select the finest ingredients to create mouthwatering dishes that our patrons love.  Our cozy and inviting restaurant provides the perfect ambiance for a relaxed dining experience. Whether you are celebrating a special occasion or simply looking to enjoy a satisfying meal, The Twisted Fork is the place to be. Come and join us for an unforgettable dining journey that will keep you coming back for more.';
    aboutDiv.appendChild(description);

    return aboutDiv;
}

export default createAbout;