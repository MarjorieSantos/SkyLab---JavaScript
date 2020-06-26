//ajax - consumir informações do nossos servidor pelo JS;

//dará acesso ao servidor sem precisar atualizar a página 
// new XMLHttpRequest => nos dar acesso à funcionalidade do ajax

let ajax = new XMLHttpRequest;

ajax.open('GET', 'https://api.github.com/users/MarjorieSantos');
ajax.send(null);

//como saber se a requisição finalizou? =>  console - network - preview

ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        //converter em um objeto, json
        console.log(JSON.parse(ajax.responseText));
    }
}