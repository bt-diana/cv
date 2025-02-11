const langOptions = document.querySelectorAll('.localization-menu__item');
langOptions.forEach((langOption) => {
    langOption.addEventListener('click', (e) => {
        const langButton = document.querySelector('.localization__btn');
        const langOptions = document.querySelectorAll('.localization-menu__item');
        langOptions.forEach((langOption) => {langOption.classList.remove('active')})
        langButton.innerText = e.target.innerText;
        e.target.classList.add('active');
    });
})

const userLang = navigator.language ?? navigator.userLanguage;
setLocalization(['ru', 'be', 'ky', 'kk'].includes(userLang) ? 'ru' : 'en');

function setLocalization(langCode) {
    const langOption = document.querySelector(`.localization-menu__item[data-lang="${langCode}"]`);
    if (langOption) {
        const langButton = document.querySelector('.localization__btn');
        langButton.innerText = langOption.innerText;
        langOption.classList.add('active');
    }
}