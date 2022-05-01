const inputElem = document.querySelector('#validation-input');
inputElem.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length > inputElem.dataset.length || event.currentTarget.value.length < inputElem.dataset.length) {
        return inputElem.classList.add("invalid");
    }
    return inputElem.classList.replace("invalid", "valid");

});