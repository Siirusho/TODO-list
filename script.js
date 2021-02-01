let addToDoButten = document.getElementById('addToDo')
let list = document.getElementById('list')
let inputField = document.getElementById('inputField')

addToDoButten.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    list.prepend(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        list.removeChild(paragraph);
    })
})

window.addEventListener('keydown', function (e) {
    if (e.which === 13) {
        let paragraph = document.createElement('p')
        paragraph.innerText = inputField.value;
        list.prepend(paragraph);
        inputField.value = '';
        paragraph.addEventListener('click', function () {
            paragraph.style.textDecoration = 'line-through';
        })
        paragraph.addEventListener('dblclick', function () {
            list.removeChild(paragraph);
        })
    }
})
