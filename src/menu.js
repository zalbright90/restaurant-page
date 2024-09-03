function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    menuDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Buckle up for a gastronomic experience like no other! At The Twisted Fork, we take pride in our diverse menu offerings that will satisfy even the most discerning palates. From juicy burgers to refreshing salads, we got it all covered. Here are some of our most deletable dishes:';
    menuDiv.appendChild(description);

    const appetizerList = document.createElement('ul');
    menuDiv.appendChild(appetizerList);

    const appetizerSection = document.createElement ('h2');
    appetizerSection.classList.add('menu-category');
    appetizerSection.textContent = 'Appetizers';
    menuDiv.appendChild(appetizerSection);

    const item1 = document.createElement('li');
    item1.classList.add('menu-item');
    item1.textContent = 'Crispy Calamari';
    menuDiv.appendChild(item1);

    const item1Desc = document.createElement('p');
    item1Desc.classList.add('item-description');
    item1Desc.textContent = 'Lightly breaded calamari rings fried to perfection. Served with tangy marinara - $13';
    menuDiv.appendChild(item1Desc);

    const item2 = document.createElement('li');
    item2.classList.add('menu-item');
    item2.textContent = 'Loaded Nachos'
    menuDiv.appendChild(item2);

    const item2Desc = document.createElement('p');
    item2Desc.classList.add('item-description');
    item2Desc.textContent = 'A mountain of tortilla chips smothered in melted cheese, topped with seasoned ground beef, jalapenos, diced tomatoes, salsa, and a drizzle of sour cream - $10';
    menuDiv.appendChild(item2Desc);

    const item3 = document.createElement('li');
    item3.classList.add('menu-item');
    item3.textContent = 'Spinach and Artichoke Dip';
    menuDiv.appendChild(item3);

    const item3Desc= document.createElement('p');
    item3Desc.classList.add('item-description');
    item3Desc.textContent = 'Creamy and tangy dip made with spinach, artichoke hearts and a blend of four cheeses. Served with warm tortilla chips - $8';
    menuDiv.appendChild(item3Desc);

    const saladSection = document.createElement ('h2');
    saladSection.classList.add('menu-category');
    saladSection.textContent = 'Salads';
    menuDiv.appendChild(saladSection);

    const item4 = document.createElement('li');
    item4.classList.add('menu-item');
    item4.textContent = 'Caesar Salad';
    menuDiv.appendChild(item4);

    const item4Desc = document.createElement('p');
    item4Desc.classList.add('item-description');
    item4Desc.textContent = 'Crisp romaine lettuce tossed with creamy Caesar dressing, topped with freshly grated Parmesan cheese and crunchy croutons - $9';
    menuDiv.appendChild(item4Desc);

    const item5 = document.createElement('li');
    item5.classList.add('menu-item');
    item5.textContent = 'Mediterranean Salad';
    menuDiv.appendChild(item5);

    const item5Desc = document.createElement('p');
    item5Desc.classList.add('item-description');
    item5Desc.textContent = 'A delightful bunch of mixed greens, Kalamata olives, feta cheese, diced cucumbers, cherry tomatoes, and red onions. Drizzled with a zesty lemon-herb vinegarette - $10';
    menuDiv.appendChild(item5Desc);

    const item6 = document.createElement('li');
    item6.classList.add('menu-item');
    item6.textContent = 'Chef Salad';
    menuDiv.appendChild(item6);

    const item6Desc = document.createElement('p');
    item6Desc.classList.add('item-description');
    item6Desc.textContent = 'A wholesome salad that combines the freshest greens, protein-packed ingredients, and zesty dressing. Loaded with crisp lettuce, tender grilled chicken, boiled egg slices, crumbled bacon, cherry tomatoes, cucumber slices, shredded cheddar cheese, and croutons. Served with your choice of dressing - $13';
    menuDiv.appendChild(item6Desc);

    const entreeSection = document.createElement('h2');
    entreeSection.classList.add('menu-category');
    entreeSection.textContent = 'Entrees';
    menuDiv.appendChild(entreeSection);

    const item7 = document.createElement('li');
    item7.classList.add('menu-item');
    item7.textContent = 'Hamburger';
    menuDiv.appendChild(item7);

    const item7Desc = document.createElement('p');
    item7Desc.classList.add('item-description');
    item7Desc.textContent = 'A classic American favorite served on a grilled brioche bun, and comes with thousand island dressing, crisp shredded lettuce, ripe tomatoes, sliced red onions, and pickles. Served with a side of golden fries - $12';
    menuDiv.appendChild(item7Desc);

    const addCheese = document.createElement('em');
    addCheese.classList.add('item-description');
    addCheese.textContent = 'Add a slice of cheese or 2 slices of bacon - $1 / Both - $2';
    menuDiv.appendChild(addCheese);

    const item8 = document.createElement('li');
    item8.classList.add('menu-item');
    item8.textContent = 'Grilled Salmon';
    menuDiv.appendChild(item8);

    const item8Desc = document.createElement('p');
    item8Desc.classList.add('item-description');
    item8Desc.textContent = 'A perfectly grilled fillet of salmon marinated in lemon and herbs. Served with a side of steamed vegetables and choice of mashed potatoes or rice - $17';
    menuDiv.appendChild(item8Desc);

    const item9 = document.createElement('li');
    item9.classList.add('menu-item');
    item9.textContent = 'Vegetable Stir-Fry';
    menuDiv.appendChild(item9);

    const item9Desc = document.createElement('p');
    item9Desc.classList.add('item-description');
    item9Desc.textContent = 'A delightful blend of fresh vegetables stir-fried to perfection. Tossed in a savory soy-ginger sauce, and served over a bed of fluffy white rice - $12';
    menuDiv.appendChild(item9Desc);

    const item10 = document.createElement('li');
    item10.classList.add('menu-item');
    item10.textContent = 'BBQ Beef Ribs';
    menuDiv.appendChild(item10);

    const item10Desc = document.createElement('p');
    item10Desc.classList.add('item-description');
    item10Desc.textContent = 'Fall-off-the-bone tender beef ribs smothered in a smoky tangy barbecue sauce made in-house. Served with coleslaw and golden fries - $15';
    menuDiv.appendChild(item10Desc);

    const item11 = document.createElement('li');
    item11.classList.add('menu-item');
    item11.textContent = 'Ribeye Steak'
    menuDiv.appendChild(item11);

    const item11Desc = document.createElement('p');
    item11Desc.classList.add('item-description');
    item11Desc.textContent = 'A succulent 12-ounce ribeye steak, grillled to your choice of doneness. Accompanied by roasted garlic mashed potatoes and seasonal vegetables - $25';
    menuDiv.appendChild(item11Desc);

    return menuDiv;
}

export default createMenu;