const corpo = document.querySelector('#root')
const button = document.createElement('button');

button.id = 'btn-create';
button.innerText = 'CLICK ME'

button.style.width = '200px'
button.style.height = '200px'
button.style.background = 'green'

corpo.append(button)

const criaQuadrado = () => {
    const quadrado = document.createElement('div')
    quadrado.style.height = '100px';
    quadrado.style.width = '100px';
    quadrado.style.marginTop = '10px';
    quadrado.style.background = 'blue';

    corpo.append(quadrado)
}

button.addEventListener('click', criaQuadrado);

