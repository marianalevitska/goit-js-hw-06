function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const line = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', change);

function change() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  line.textContent = newColor;

};
