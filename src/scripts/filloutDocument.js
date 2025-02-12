import data from '../assets/data/data.json';

export default function filloutDocument(langCode) {
    Object.entries(data[langCode]).forEach(([selector, text]) => {
        const elements = document.querySelectorAll(selector);
        elements?.forEach((element) => {element.innerText = text});
    })
}