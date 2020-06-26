const corpo = document.querySelector('#root');

var nomes = ["Diego", "Gabriel", "Lucas"];

corpo.innerHTML = `
    <div>
        <ul>
            <li>${nomes[0]}</li>
            <li>${nomes[1]}</li>
            <li>${nomes[2]}</li>
        </ul>
    </div>
`