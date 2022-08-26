const readlinesync = require('readline-sync')
var escolhas = {
  alcool: 0,
  gasolina: 0,
  diesel: 0
}
var combustivel = 0

while (combustivel !== 4) {
  combustivel = parseInt(
    readlinesync.question(
      'Escolha o tipo de combustível: \n1. Alcool; \n2. Gasolina; \n3. Diesel; \n4. Fim. \n'
    )
  )
  if (combustivel === 1) {
    escolhas['alcool'] = escolhas['alcool'] + 1
  } else if (combustivel === 2) {
    escolhas['gasolina'] = escolhas['gasolina'] + 1
  } else if (combustivel === 4) {
    escolhas['diesel'] = escolhas['diesel'] + 1
  } else {
    console.log('Por favor, digite uma opção válida.')
  }
}

console.log('MUITO OBRIGADO!')
console.log('Quantidade de clientes para cada tipo de combustível:')
for (let i in escolhas) {
  console.log(`${i}: ${escolhas[i]}`)
}
