
import templatesCard from './templates/menu.hbs'
import card  from './menu.json'
import './sass/main.scss'
 
//console.log(templatesCard);
//console.log(card);

const markup = card.map(templatesCard).join('')
console.log(markup)

const refs  = {
    markCard: document.querySelector('.js-menu'),
    body: document.querySelector('body'),
    input: document.querySelector('#theme-switch-toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.markCard.insertAdjacentHTML('beforeend', markup);

//refs.input.addEventListener('change', () => {})
refs.input.addEventListener('change', onInputChange);

 function onInputChange() {
  if (refs.input.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};