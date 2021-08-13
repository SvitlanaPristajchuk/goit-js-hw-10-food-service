
import templatesCard from './templates/menu.hbs'
import card  from './menu.json'
import './sass/main.scss'
 
//console.log(templatesCard);
//console.log(card);

const markup = card.map(templatesCard).join('')
console.log(markup)

const refs  = {
    markCard: document.querySelector('.js-menu')
}



refs.markCard.insertAdjacentHTML('beforeend', markup)