
function experiencia(anos) {
    if (anos > 0 && anos <= 1) {
        return 'Iniciante';
    }

    if (anos > 1 && anos <= 3) {
        return 'Intermediário';
    }

    if (anos > 3 && anos <= 6) {
        return 'Avançado';
    }

    if (anos >= 7) {
        return 'Jedi Master';
    }

}

let anosEstudo = 7;
console.log(experiencia(anosEstudo))
