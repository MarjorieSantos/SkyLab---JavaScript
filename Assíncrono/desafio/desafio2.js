// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário

// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

const div = document.querySelector('#root');

div.innerHTML = `
    <input type="text" id='name' placeholder='seu usuário do GitHub'>
    <button id='btn'>BUSCAR</button>
    <ul id='show-users'></ul>
`

let userName = div.querySelector('#name');
let btn = div.querySelector('#btn');
let list = div.querySelector('#show-users');

const showAPI = () => {
    const item = document.createElement('li');
    const valueName = userName.value;
    item.innerHTML = `https://api.github.com/users/${valueName}/repos`;

    userName.value = '';
    list.append(item);
}

btn.addEventListener('click', showAPI)