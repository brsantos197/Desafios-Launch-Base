// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
const empresa = {
    nome: "Rockteseat",
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua guilherme gembala',
        numero: 260
    },
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)

// Vetores e objetos

programador = {
    nome: 'Bruno',
    idade: 24,
    tecnologias: [
        { nome: 'Javascript', especialidade: 'Web/Mobile' },
        { nome: 'HTML', especialidade: 'Web/Mobile' },
        { nome: 'CSS', especialidade: 'Web/Mobile' }
    ]
    
}

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza

console.log(`o usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)