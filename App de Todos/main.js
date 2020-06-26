const main = document.querySelector('#root');
const template = document.createElement('div');
template.id = 'app';

template.innerHTML = `
    <ul></ul>
    <input type="text" id='text' placeholder="digite um todo">
    <button id='btn-todo'>Click me</button>
`

main.append(template);

//RETORNA NOVAMENTE UM ARRAY
// se não conseguir um valor okay, vai retornar um array vazio
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const textInput = template.querySelector('#text');
const list = template.querySelector('#app ul');
const btn = template.querySelector('#btn-todo');

const renderTodos = () => {
    list.innerHTML = '';
    for (todo of todos) {
        const li = document.createElement('li');
        li.innerHTML = todo;

        const linkElement = document.createElement('a');
        linkElement.innerHTML = 'Excluir';
        linkElement.style.marginLeft = '10px'
        linkElement.setAttribute('href', '#');

        var index = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${index})`)

        li.append(linkElement);
        list.append(li);
    }
}
renderTodos()


const addTodo = () => {
    textInput.innerHTML = '';
    todos.push(textInput.value);
    renderTodos();
    saveTodoStrage();
}

btn.addEventListener('click', addTodo);


const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
    saveTodoStrage();
}

const saveTodoStrage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
