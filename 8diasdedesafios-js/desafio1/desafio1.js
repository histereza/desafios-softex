const readlinesync = require('readline-sync')

var number = parseInt(readlinesync.question('Informe seu numero: '))
var horasTrabalhadas = parseInt(
  readlinesync.question('Informe o total de horas trabalhadas: ')
)
var valorPorHora = parseFloat(
  readlinesync.question('Informe o valor da hora trabalhada: U$ ')
)

var salario = (horasTrabalhadas * valorPorHora).toFixed(2)

console.log(`NUMBER = ${number} \nSALARY = U$ ${salario}`)
