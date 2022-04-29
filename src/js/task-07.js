
const rageInput = document.querySelector('#font-size-control');
const textLine = document.querySelector('#text');


rageInput.addEventListener('input', fontSizeChanger);

function fontSizeChanger() {
    textLine.style.fontSize = `${rageInput.value}px`;
};

