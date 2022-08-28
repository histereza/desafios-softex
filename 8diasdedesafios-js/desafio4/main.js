function imc() {
  const nome = document.querySelector('txtboxnome')
  const peso = parseFloat(document.getElementById('txtboxpeso').value)
  const altura = parseFloat(document.getElementById('txtboxaltura').value)

  let imc = (peso / (altura * altura)).toFixed(2)
  let situacao

  if (imc >= 40) {
    situacao = 'Obesidade grave'
  } else if (imc >= 30) {
    situacao = 'Obesidade'
  } else if (imc >= 25) {
    situacao = 'Sobrepeso'
  } else if (imc >= 18.5) {
    situacao = 'Normal'
  } else if (imc < 18.5) {
    situacao = 'Magreza'
  } else {
    situacao = 'Por favor, tente digitar valores válidos.'
  }

  console.log(peso)
  console.log(altura)
  document
    .getElementById('resultado')
    .setAttribute('value', `${imc} - ${situacao}`)
}
