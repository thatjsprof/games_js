document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  for (let i = cardArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = cardArray[i]
    cardArray[i] = cardArray[j]
    cardArray[j] = k
  }

  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  let resultDisplayed = 0
  let cardsChosenID = [],
      cardsChosen = [],
      cardsWon = []

  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', clickCard)
    grid.appendChild(card)
  }

  console.log(cardArray.length)

  function clickCard() {
    const id = this.getAttribute('data-id')
    this.setAttribute('src', cardArray[id].img)
    cardsChosen.push(cardArray[id].name)
    cardsChosenID.push(id)
    if (cardsChosenID.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    console.log(cardsChosenID)
    let chosenOne = cardsChosenID[0] 
    let chosenTwo = cardsChosenID[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      resultDisplayed++
      result.textContent = resultDisplayed
      cards[chosenOne].setAttribute('src', 'images/white.png')
      cards[chosenTwo].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[chosenOne].setAttribute('src', 'images/blank.png')
      cards[chosenTwo].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenID = []

    if (cardsWon.length === cardArray.length / 2) {
      alert('You have won the game')
    }
  }

  function init() {
    result.textContent = resultDisplayed
  }

  init()
})

