import template from '../template/cards.hbs';
import cards from '../menu.json';

const templateFoodCards = template(cards);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

class TypeOfThemeOnBody {
  constructor({ containerCards, switchTheme }) {
    this.refs = {
      container: document.querySelector(containerCards),
      switch: document.querySelector(switchTheme),
    };

    this.refs.container.insertAdjacentHTML('beforeend', templateFoodCards);

    this.refs.switch.addEventListener('change', this.onHandlerThemSwitch.bind(this));

    this.readLocalStorage();
  }

  onHandlerThemSwitch(e) {
    e.preventDefault();

    if (document.body.classList.contains(Theme.LIGHT)) {
      this.choiceTheme(Theme.LIGHT, Theme.DARK);
    } else if (document.body.classList.contains(Theme.DARK)) {
      this.choiceTheme(Theme.DARK, Theme.LIGHT);
    }
  }

  choiceTheme(currentTheme, newTheme) {
    document.body.classList.replace(currentTheme, newTheme);
    localStorage.setItem('theme', newTheme);
  }

  readLocalStorage() {
    const current = localStorage.getItem('theme');
    if (current === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
      this.refs.switch.checked = true;
    } else document.body.classList.add(Theme.LIGHT);
  }
}

export default TypeOfThemeOnBody;
