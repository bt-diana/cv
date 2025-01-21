import '../styles/index.css';

function configureProfileBack() {
    const aside = document.querySelector(".profile__aside");
    const info = document.querySelector(".profile__info");
    const profileBack = document.querySelector(".profile__back");
    console.log(aside.offsetLeft > info.offsetLeft, aside.offsetLeft, info.offsetLeft)
    if (aside.offsetLeft > info.offsetLeft) {
        if (!profileBack.classList.contains("profile__back--horizontal")) {
            profileBack.classList.add("profile__back--horizontal");
        }
    } else {
        profileBack.classList.remove("profile__back--horizontal");
    }
}

configureProfileBack();
window.onresize = configureProfileBack

