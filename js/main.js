function getMsg() {
    const msgArray = [
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
        "A persistência realiza o impossível.",
        "Não se desespere quando a caminhada estiver difícil.",
        "Seus sonhos não precisam de plateia, eles só precisam de você."
    ];

    const item = msgArray[Math.floor(Math.random()*msgArray.length)];

    const msgElement = document.querySelector('.msgText');

    msgElement.innerText = item;
}

function toggleScreen(screen) {
    let screenClass = `.${screen}`
    const hiddedScreen = document.querySelector('.hide');

    hiddedScreen.classList.toggle('hide');

    const screenToHide = document.querySelector(screenClass);

    if (screenToHide) screenToHide.classList.toggle('hide');

    if (screen === 'first-screen') getMsg();
}
