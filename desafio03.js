
const usuarios = [
    {nome:'Bruno', tecnologias: ['HTML', 'CSS', 'JS']},
    {nome:'Carol', tecnologias: ['React', 'React Native']},
    {nome:'Luna', tecnologias: ['Node.js', 'HTML']}
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

function checaSeUsuarioUsaCSS(usuarios) {
    return usuarios.tecnologias.includes('CSS')

}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }


  const usuarios01 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  for (let i = 0; i < usuarios01.length; i++) {
    if (calculaSaldo(usuarios01[i].receitas, usuarios01[i].despesas) >= 0) {
        console.log(`${usuarios01[i].nome} possui saldo POSITIVO de ${calculaSaldo(usuarios01[i].receitas, usuarios01[i].despesas)}`)
    } else {
        console.log(`${usuarios01[i].nome} possui saldo NEGATIVO de ${calculaSaldo(usuarios01[i].receitas, usuarios01[i].despesas)}`)
    }
  }

  function calculaSaldo(receitas, despesas) {
      return somaNumeros(receitas) - somaNumeros(despesas) 
  }

  function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }
    return soma
  }
