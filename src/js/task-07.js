const refs = {
    rageInput: document.querySelector('#font-size-control'),
    textLine: document.querySelector('#text'),
};

refs.rageInput.addEventListener("input", (event) => {
    return refs.textLine.style.fontSize = refs.rageInput.value;
});
