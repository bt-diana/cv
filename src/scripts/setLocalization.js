import filloutDocument from './filloutDocument.js';

export default function setLocalization(langCode) {
    const langOption = document.querySelector(`.localization-menu__item[data-lang="${langCode}"]`);
    if (langOption) {
        const langButton = document.querySelector('.localization__btn');
        langButton.innerText = langOption.innerText;
        langOption.classList.add('active');
        filloutDocument(langCode);
    }
}