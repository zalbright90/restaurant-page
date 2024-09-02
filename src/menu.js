function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    menuDiv.appendChild(headline);

    const item1 = document.createElement('p');
    item1.textContent = 'Hamburger - $10.00';
    menuDiv.appendChild(item1);

    const item2 = document.createElement('p');
    item2.textContent = 'Cheeseburger - $12.00';
    menuDiv.appendChild(item2);

    const item3 = document.createElement('p');
    item3.textContent = 'Chef Salad - $9.50';
    menuDiv.appendChild(item3);

    return menuDiv;
}

export default createMenu;