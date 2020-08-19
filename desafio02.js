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

programador = {
    nome: 'Bruno',
    idade: 24,
    tecnologias: [
        { nome: 'Javascript', especialidade: 'Web/Mobile' },
        { nome: 'HTML', especialidade: 'Web/Mobile' },
        { nome: 'CSS', especialidade: 'Web/Mobile' }
    ]
    
}

console.log(`o usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)

// concluido