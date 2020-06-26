const corpo = document.querySelector('#root');

var nomes = ["Diego", "Gabriel", "Lucas"];

corpo.innerHTML = `
    <div>
        <ul id='list'>
            <li>${nomes[0]}</li>
            <li>${nomes[1]}</li>
            <li>${nomes[2]}</li>
        </ul>
    </div>
    <input type="text" id='input'>
    <button id="btn">Adicionar</button>
`

const btn = corpo.querySelector('#btn');
const list = corpo.querySelector('#list');
const textInput = corpo.querySelector('#input');

const adicionar = () => {
    const newItem = document.createElement('li');
    newItem.innerHTML = textInput.value;

    list.append(newItem);

    textInput.value = '';
}

btn.addEventListener('click', adicionar)



