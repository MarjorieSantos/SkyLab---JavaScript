const retornaSexo = (sexo) => {
    if (sexo === 'M') {
        return 'Masculino';
    } else if (sexo === 'F') {
        return 'Feminino';
    } else {
        return 'Outros';
    }
}

retornaSexo('M')

const retornaSexo = (sexo) => {
    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outros';
    }
}


const sexo = 'M'
const idade = 20

//AND

if (sexo === 'M' && idade >= 18) {
    console.log('OK')
}

//OR

if (sexo === 'M' || idade >= 18) {
    console.log('OK')
}

//NOT
if (sexo === 'M' !== idade >= 18) {
    console.log('OK')
}


let masculino;
if (sexo === 'M') {
    masculino = true;
} else {
    masculino = false;
}