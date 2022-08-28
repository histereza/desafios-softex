function contarPalavras() {
  const array = document.getElementById('txtbox').value.split(' ')
  if (array.length === 1 && array[0] === '') {
    document
      .getElementById('resultado')
      .setAttribute('value', 'Você não digitou nada.')
  } else {
    const palavras = array.length
    document
      .getElementById('resultado')
      .setAttribute('value', `Você tem: ${palavras} palavras.`)
  }
  console.log(array.length)
}
