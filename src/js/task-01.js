const categories = document.querySelector(`#categories`).children;
console.log(`Number of categories: ${categories.length}`);
const items = document.querySelectorAll(`.item`)
    .forEach((category) => {
        console.log(`Category: ${category.firstElementChild.textContent}`),
            console.log(`Elements: ${category.lastElementChild.children.length}`)
    });


