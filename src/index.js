import { generateHeader, generateFooter, getTabPage } from './pageLoader';

const contentDiv = document.querySelector('#content');

function bindButtons() {
    document.querySelector('.home-button').addEventListener('click', () => {
        loadPage(0);
    });

    document.querySelector('.menu-button').addEventListener('click', () => {
        loadPage(1);
    });

    document.querySelector('.contact-button').addEventListener('click', () => {
        loadPage(2);
    });
}

function loadPage(pageIndex) {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(generateHeader(pageIndex));
    contentDiv.appendChild(getTabPage(pageIndex));
    contentDiv.appendChild(generateFooter(pageIndex));
    bindButtons();
}


loadPage(0);