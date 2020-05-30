const randWords = [ 'cool', 
// 'bird', 'square', 'test', 'triangle'
]
let wrongGuess = 0
let randWord = ''
var userGuesses = []
var header = document.getElementById("header")
var header2 = document.getElementById("header2")
var userInput = document.getElementById("userInput")
var btn = document.getElementById("btn")
var msg = ''


function startGame() {
  randWord = randWords[Math.floor(Math.random() * randWords.length)]
}

function game() {
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

function guessedWord() {
  msg = randWord.split('').map(letter => (
    userGuesses.indexOf(letter) >= 0 ? letter : " _ ")
  ).join('')

  header.innerHTML = msg;

  if (msg === randWord) {
    header.innerHTML = 'You Won!!!'
    endGame()
  }
}

function wrongChoice() {
  wrongGuess++
  if (wrongGuess === 6) {
    header.innerHTML = 'The answer was: ' + randWord
    header2.innerHTML = 'You Lost!!!'
    endGame()
  }
}

function endGame() {
  userInput.setAttribute("type", "hidden")
  btn.setAttribute("type", "hidden")
  userInput.disabled = true
  btn.disabled = true
}