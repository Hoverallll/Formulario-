function createLabel (text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement ('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input

} 



const register = document.getElementById('register')
const form = document.getElementById('registerForm')
const developers = []
let inputRows = ''


register.addEventListener('click', function (ev){
    const newRow = document.createElement ('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'input-' + rowIndex



})

