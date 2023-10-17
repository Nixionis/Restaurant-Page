const data = [
  {
    title: 'Dish 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus delectus.',
    cost: '$4.99',
    imgPath: './img/food1.jpg',
    imgAlt: 'first dish'
  },
  {
    title: 'Dish 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus delectus.',
    cost: '$3.99',
    imgPath: './img/food2.jpg',
    imgAlt: 'second dish'
  },
  {
    title: 'Dish 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus delectus.',
    cost: '$7.99',
    imgPath: './img/food3.jpg',
    imgAlt: 'third dish'
  },
  {
    title: 'Dish 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus delectus.',
    cost: '$4.99',
    imgPath: './img/food4.jpg',
    imgAlt: 'fourth dish'
  }
]



function getPage() {

  const main = document.createElement('main');
  main.classList.add('content');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleText = document.createElement('p');
  titleText.classList.add('title__text');
  titleText.textContent = 'Menu';
  titleDiv.appendChild(titleText);
  main.appendChild(titleDiv);

  for (let i = 0; i < data.length; i++) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');

    const dishImage = new Image();
    dishImage.src = data[i].imgPath;
    dishImage.alt = data[i].imgAlt;
    dishImage.classList.add('menu-item__image');
    menuDiv.appendChild(dishImage);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('menu-item__content');

    const dishHeader = document.createElement('h2');
    dishHeader.classList.add('menu-item__title');
    dishHeader.textContent = data[i].title;
    contentDiv.appendChild(dishHeader);

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('menu-item__text');
    dishDesc.textContent = data[i].text;
    contentDiv.appendChild(dishDesc);

    const dishCost = document.createElement('p');
    dishCost.classList.add('menu-item__cost');
    dishCost.textContent = data[i].cost;
    contentDiv.appendChild(dishCost);

    menuDiv.appendChild(contentDiv);
    main.appendChild(menuDiv);
  }

  return main;

}

export default getPage;
