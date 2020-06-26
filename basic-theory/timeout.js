//interval - uma função que executa várias vezes dentro de um intervalo

const exibeAlgo = () => {
    console.log('hello world')
}

setInterval(exibeAlgo, 1000)


//timeout => ele espera um tempo para executar ua função
const exibeAlgo2 = () => {
    console.log('hello world')
}

//exibirá algo 1 segundo depois, com um delay

setTimeout(exibeAlgo2, 1000)


//OBS:
//se colocar (), você já estará executando a função o intervalo