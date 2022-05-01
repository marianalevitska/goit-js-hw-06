let counterValue = 0;
const refs = {
    value: document.querySelector("#value"),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};
const decrementBtnAction = () => {
    counterValue--;
    return (refs.value.textContent = counterValue);
};
const incrementBynAction = () => {
    counterValue++;
    return (refs.value.textContent = counterValue);
};
refs.decrementBtn.addEventListener("click", decrementBtnAction);
refs.incrementBtn.addEventListener("click", incrementBynAction);