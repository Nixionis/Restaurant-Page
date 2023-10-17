const generateHeader = function (activeButtonIndex) {

    //Header

    const header = document.createElement('header');
    header.classList.add('header');

    const headerBody = document.createElement('div');
    headerBody.classList.add('header__body');

    const headerLogo = document.createElement('p');
    headerLogo.classList.add('header__logo');
    headerLogo.textContent = 'Logo';

    const headerNav = document.createElement('nav');
    headerNav.classList.add('header__nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add(activeButtonIndex === 0 ? 'header__item_active' : 'header__item');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'HOME';
    const menuButton = document.createElement('button');
    menuButton.classList.add(activeButtonIndex === 1 ? 'header__item_active' : 'header__item');
    menuButton.classList.add('menu-button');
    menuButton.textContent = 'MENU';
    const contactButton = document.createElement('button');
    contactButton.classList.add(activeButtonIndex === 2 ? 'header__item_active' : 'header__item');
    contactButton.classList.add('contact-button');
    contactButton.textContent = 'CONTACT';

    headerNav.appendChild(homeButton);
    headerNav.appendChild(menuButton);
    headerNav.appendChild(contactButton);

    headerBody.appendChild(headerLogo);
    headerBody.appendChild(headerNav);

    header.appendChild(headerBody);

    return header;

    /////
}

const generateFooter = function () {
    //Footer

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerDev = document.createElement('p');
    footerDev.classList.add('footer__item');
    footerDev.textContent = 'Developed by Nixion';

    const footerCopy = document.createElement('p');
    footerCopy.classList.add('footer__item');
    footerCopy.textContent = 'All images are taken from Unsplash';

    footer.appendChild(footerDev);
    footer.appendChild(footerCopy);

    return footer;

    /////
}

export { generateHeader, generateFooter };