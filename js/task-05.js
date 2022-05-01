const inputLine = document.querySelector('#name-input');
const outputLine = document.querySelector('#name-output');

function dataEnter(event) {
    // outputLine.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        return outputLine.textContent = `Anonymous`;
    } else {
        return outputLine.textContent = event.currentTarget.value;
    };
}

inputLine.addEventListener("input", dataEnter);