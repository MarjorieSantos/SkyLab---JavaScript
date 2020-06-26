// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
// segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade < 18) {
            resolve('menor de idade')
        } else {
            reject('maior de idade')
        }
    })
}

checaIdade(5)
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (reject) {
        console.log(reject);
    });
