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

const CURRENT_THEME = localStorage.getItem('theme');

if (localStorage.getItem('theme')) {
  document.body.classList.add(localStorage.getItem('theme'));
  refs.button.checked = localStorage.getItem('theme') === 'light-theme' ? false : true;
}

refs.gallery.innerHTML = creatListItem(date);

refs.theme.addEventListener('click', e => {
  e.preventDefault();

  if (localStorage.getItem('theme') === 'light-theme' || localStorage.getItem('theme') === null) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.button.checked = true;
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checked', true);
  } else if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    refs.button.checked = false;
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('checked', false);
  }
});

// function changeTheme(key, checked) {
//    localStorage.setItem(key, Theme.DARK);
// }
