const randWords = [ 'cool', 'bird', 'square', 'test', 'triangle']
let wrongGuess = 0
let randWord = ''
let userGuesses = []
let header = document.getElementById("header")
let header2 = document.getElementById("header2")
let userInput = document.getElementById("userInput")
let btn = document.getElementById("btn")
let msg = ''

const startGame = () => {
  randWord = randWords[Math.floor(Math.random() * randWords.length)]
}

const game = () => {
  let userGuessValue = userInput.value.toLowerCase();

  if (userGuesses.indexOf(userGuessValue) === -1) {
    userGuesses.push(userGuessValue)
  }

  if (randWord.indexOf(userGuessValue) >= 0) {
    guessedWord()
  } else if (randWord.indexOf(userGuessValue) === -1) {
    wrongChoice()
  }
}

const guessedWord = () => {
  msg = randWord.split('').map(letter => (
    userGuesses.indexOf(letter) >= 0 ? letter : " _ ")
  ).join('')

  header.innerHTML = msg;

  if (msg === randWord) {
    header.innerHTML = 'You Won!!!'
    endGame()
  }
}

const wrongChoice = () => {
  wrongGuess++
  if (wrongGuess === 6) {
    header.innerHTML = 'The answer was: ' + randWord
    header2.innerHTML = 'You Lost!!!'
    endGame()
  }
}

const endGame = () => {
  userInput.setAttribute("type", "hidden")
  btn.setAttribute("type", "hidden")
  userInput.disabled = true
  btn.disabled = true
}