// A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:
const div = document.querySelector('#root');

div.innerHTML = `
    <input type="text" id='name' placeholder='seu usuário do GitHub'>
    <button id='btn'>BUSCAR</button>
    <ul id='show-users'></ul>
`

let userName = div.querySelector('#name');
let btn = div.querySelector('#btn');
let list = div.querySelector('#show-users');

const renderRepo = (repositories) => {
    for (repo of repositories) {
        const item = document.createElement('li');
        const valueName = userName.value;
        item.innerHTML = `https://api.github.com/users/${valueName}/repos`;
    
        userName.value = '';
        list.append(item);
    }
}


const showAPI = () => {
    renderRepo()
}

btn.addEventListener('click', showAPI);

const loading = () => {
    renderRepo()
}


// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
// Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.