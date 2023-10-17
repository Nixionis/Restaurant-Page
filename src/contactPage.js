const data = [
  {
    type: 'Phone',
    contacts: ['Lorem ipsum dolor1', 'Lorem ipsum dolor2']
  },
  {
    type: 'Email',
    contacts: ['Lorem ipsum dolor']
  }
]

function getPage() {

  const main = document.createElement('main');
  main.classList.add('content');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleText = document.createElement('p');
  titleText.classList.add('title__text');
  titleText.textContent = 'Contacts';
  titleDiv.appendChild(titleText);
  main.appendChild(titleDiv);

  for (let i = 0; i < data.length; i++) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-item');

    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('contact-item__title');
    contactHeader.textContent = data[i].type;
    contactDiv.appendChild(contactHeader);

    for (let j = 0; j < data[i].contacts.length; j++) {
      const contactText = document.createElement('p');
      contactText.classList.add('contact-item__text');
      contactText.textContent = data[i].contacts[j];
      contactDiv.appendChild(contactText);
    }

    main.appendChild(contactDiv);
  }

  return main;

}

export default getPage;