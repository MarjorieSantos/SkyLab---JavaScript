const div = document.querySelector('#root')
const text = document.createElement('textarea');
const button = document.createElement('button');

const clicou = () => {
    console.log(text.value);
}

button.addEventListener('click', clicou)

div.append(text, button);
