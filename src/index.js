
import templatesCard from "./templates/menu.hbs";
import './sass/main.scss';
import { card } from "./menu.json";

const markup = templatesCard(card);
console.log(markup);

markRef = document.querySelector('.js-menu');

markRef.insertAdjacentHTML('beforeend', markup);