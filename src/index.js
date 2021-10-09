import './sass/_menuList.scss';

import ChoiceTheme from './js/creatCardListOfMenu';

const templateCards = new ChoiceTheme({
  containerCards: '.js-menu',
  switchTheme: '.theme-switch__toggle',
});
