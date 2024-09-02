function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Twisted Fork!';
    homeDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Where we serve food that will delight your taste buds! Our mission is to provide an exceptional dining experience along with excellent customer service, that is, if you are an excellent customer...Explore our menu, learn about our restaurant, and make a reservation today!';
    homeDiv.appendChild(description);

    return homeDiv;
}

export default createHome;