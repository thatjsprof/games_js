let squares = document.querySelectorAll('.square')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')
squares = [...squares]

let hitPosition, 
    result = 0
    time = timeLeft.textContent

console.log(squares)

function generateRandomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })

  let randomPosition = squares[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
  hitPosition = randomPosition.id
}

function moveMole() {
  let timerID = null
  timerID = setInterval(generateRandomSquare, 1000)
}

moveMole()

function countDown() {
  time--
  timeLeft.textContent = time

  if(time === 0) {
    clearInterval(timerID)
    alert('You loose')
  }
}

squares.forEach((square) => {
  square.addEventListener('mouseup', () => {
    if(square.id === hitPosition) {
      result += 1
      score.textContent = result
    }
  })
})

let timerID = setInterval(countDown, 1000)