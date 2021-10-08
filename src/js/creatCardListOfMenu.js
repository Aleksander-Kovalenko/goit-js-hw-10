import date from '../menu.json';
import creatListItem from '../template/cards.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  gallery: document.querySelector('.js-menu'),
  theme: document.querySelector('.theme-switch'),
  button: document.querySelector('.theme-switch__toggle'),
};

let CURRENT_THEME = JSON.parse(localStorage.getItem('settings'));

if (CURRENT_THEME) {
  (function oldTheme() {
    document.body.classList.add(CURRENT_THEME.newTheme);
    refs.button.checked = CURRENT_THEME.checked;
  })();
}

refs.gallery.innerHTML = creatListItem(date);

refs.theme.addEventListener('click', e => {
  e.preventDefault();

  CURRENT_THEME = JSON.parse(localStorage.getItem('settings'));

  if (localStorage.getItem('settings') === null) {
    CurrentChangeTheme(undefined, 'dark-theme', true);
  } else if (CURRENT_THEME.newTheme == 'light-theme') {
    CurrentChangeTheme('light-theme', 'dark-theme', true);
  } else if (CURRENT_THEME.newTheme == 'dark-theme') {
    CurrentChangeTheme('dark-theme', 'light-theme', false);
  }
});

function CurrentChangeTheme(currentTheme, newTheme, checked) {
  if (currentTheme) document.body.classList.remove(currentTheme);

  document.body.classList.add(newTheme);
  refs.button.checked = checked;

  const parameters = {
    currentTheme,
    newTheme,
    checked,
  };

  return localStorage.setItem('settings', JSON.stringify(parameters));
}
