function randomGen() {
  const frases = [
    'Please, remain calm. The end has arrived.',
    'We cannot save you. Enjoy the ride.',
    "This is the moment you've been waiting for.",
    "Don't call this a warning.",
    'This is a war.'
  ]
  const randomIndex = Math.floor(Math.random() * frases.length)

  document.getElementById('text').innerHTML = frases[randomIndex]
}
