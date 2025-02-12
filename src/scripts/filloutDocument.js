import data from '../assets/data/data.json';

export default function filloutDocument(langCode) {
    Object.entries(data[langCode]).forEach(([selector, text]) => {
        const elements = document.querySelectorAll(selector);
        elements?.forEach((element) => {element.innerText = text});
    })

    const linksCV = document.querySelectorAll("[class^='profile__download-cv'");
    console.log(linksCV)
    linksCV.forEach((linkCV) => {linkCV.style = "display: none"});

    const linkCV = document.querySelector(`.profile__download-cv--${langCode}`);
    linkCV.style = "display: block";
}