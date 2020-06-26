//promisses - não vão influenciar na linha do tempo do JS
//funções que vão devolver valor de resultados de sucesso ou erro após um determinado tempo

const promisses = () => {
    return new Promise(function (resolve, reject) {
        let ajax = new XMLHttpRequest;
        ajax.open('GET', 'https://api.github.com/users/MarjorieSantos');
        ajax.send(null);

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status = 200) {
                    resolve(JSON.parse(ajax.responseText))
                } else {
                    reject('erro na requisição')
                }
            }
        }
    })
}

//devolve 'Pending...' => porque ela aidna não está finalizada
promisses()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
