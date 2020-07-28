// Cálculo do IMC 

const nomeImc = 'Bruno'
const peso = 62
const altura = 1.77

const imc =  peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nomeImc} você está acima do peso`)
} if (imc <= 29.9) {
    console.log(`${nomeImc} você não está acima do peso`)
}

// Cálculo de aposentadoriaconst nome = "Silvana";

const nomeAposentar = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 30

if (sexo == "F") {
    if (contribuicao >= 30 || contribuicao + idade >= 85) {
        console.log(`${nomeAposentar}, você pode se aposentar!`)
    } else {
        console.log(`${nomeAposentar}, você ainda não pode se aposentar!`)
    }
}

if (sexo == "M") {
    if (contribuicao >= 35 || contribuicao + idade >= 95) {
        console.log(`${nomeAposentar}, você pode se aposentar!`)
    } else {
        console.log(`${nomeAposentar}, você ainda não pode se aposentar!`)
    }
}
