let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};


const returnEndereco = () => {
    const showReturn = `O usuário mora em ${endereco.cidade}/${endereco.uf} no bairro ${endereco.bairro}, na rua '${endereco.rua}' com nº${endereco.numero}`;
    console.log(showReturn)
}

returnEndereco()