const corpo = document.querySelector('#root')
const button = document.createElement('button');

button.id = 'btn-create';
button.innerText = 'CLICK ME'

button.style.width = '200px'
button.style.height = '200px'
button.style.background = 'green'

corpo.append(button)

const criaQuadrado = () => {
    const quadrado = document.createElement('div');
    quadrado.style.height = '100px';
    quadrado.style.width = '100px';
    quadrado.style.marginTop = '10px';
    quadrado.style.background = 'blue';


    corpo.append(quadrado)

    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        quadrado.style.background = color;
    }

    quadrado.addEventListener('mouseover', getRandomColor)

}

button.addEventListener('click', criaQuadrado);



