import '../styles/index.css';
import setLocalization from './setLocalization.js';

const langOptions = document.querySelectorAll('.localization-menu__item');
langOptions.forEach((langOption) => {
    langOption.addEventListener('click', (e) => {
        setLocalization(e.target.dataset.lang);
    });
})

const userLang = navigator.language ?? navigator.userLanguage;
setLocalization(['ru', 'be', 'ky', 'kk'].includes(userLang) ? 'ru' : 'en');