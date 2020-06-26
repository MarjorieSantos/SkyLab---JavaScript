let usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

const result = (users) => {
    for(let value of users) {
        console.log(`o ${value.nome} possui as habilidades: ${value.habilidades.join(', ')}`)
    }
}

result(usuarios)