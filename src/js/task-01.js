console.log(document);
const body = document.body;
console.log(body);
const list = body.firstElementChild;
console.log(list);
const counter = () => {
    return list.childNodes;
}