import date from '../menu.json';
import creatListItem from '../template/cards.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  gallery: document.querySelector('.js-menu'),
  theme: document.querySelector('.theme-switch'),
};

refs.gallery.innerHTML = creatListItem(date);

// const currentTheme =
//   localStorage.getItem('theme') === 'dark-theme'
//     ? Theme.DARK
//     : (refs.gallery.innerHTML = creatListItem(date));

if (localStorage.getItem('theme') === 'light-theme' || localStorage.getItem('theme') === null) {
  window.document.body.classList.add(Theme.DARK);
} else if (localStorage.getItem('theme') === 'dark-theme') {
  window.document.body.classList.add(Theme.LIGHT);
}

refs.theme.addEventListener('click', e => {
  e.preventDefault();

  if (localStorage.getItem('theme') === 'light-theme' || localStorage.getItem('theme') === null) {
    window.document.body.classList.add(Theme.DARK);
    refs.button.checked = true;
    localStorage.setItem('theme', Theme.DARK);
  } else if (localStorage.getItem('theme') === 'dark-theme') {
    window.document.body.classList.add(Theme.LIGHT);
    refs.button.checked = false;
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
