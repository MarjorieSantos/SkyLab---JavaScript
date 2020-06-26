var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i] === "Javascript") {
            return true;
        } else {
            return false;
        }
    }
}

console.log(temHabilidade(skills))


