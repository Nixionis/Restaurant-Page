import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import { generateHeader, generateFooter } from './sharedGenerator';

function getTabPage(tabIndex) {
    if (tabIndex > 2 || tabIndex < 0)
        return "Couldn't find the page!";

    switch (tabIndex) {
        case 0:
            return homePage();
        case 1:
            return menuPage();
        case 2:
            return contactPage();
    }
}


export { generateHeader, generateFooter, getTabPage };