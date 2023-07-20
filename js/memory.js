const cardArray = [
    {
        name: 'King_of_Spades',
        img: 'images/cards100/13_of_spades.png'
    },
    {
        name: 'King_of_Hearts',
        img: 'images/cards100/13_of_hearts.png'
    },
    {
        name: 'King_of_Clubs',
        img: 'images/cards100/13_of_clubs.png'
    },
    {
        name: 'King_of_Diamonds',
        img: 'images/cards100/13_of_diamonds.png'
    },
    {
        name: 'Ace_of_Spades',
        img: 'images/cards100/14_of_spades.png'
    },
    {
        name: 'Ace_of_Hearts',
        img: 'images/cards100/14_of_hearts.png'
    },
    {
        name: 'Ace_of_Clubs',
        img: 'images/cards100/14_of_clubs.png'
    },
    {
        name: 'Ace_of_Diamonds',
        img: 'images/cards100/14_of_diamonds.png'
    },
    {
        name: 'King_of_Spades',
        img: 'images/cards100/13_of_spades.png'
    },
    {
        name: 'King_of_Hearts',
        img: 'images/cards100/13_of_hearts.png'
    },
    {
        name: 'King_of_Clubs',
        img: 'images/cards100/13_of_clubs.png'
    },
    {
        name: 'King_of_Diamonds',
        img: 'images/cards100/13_of_diamonds.png'
    },
    {
        name: 'Ace_of_Spades',
        img: 'images/cards100/14_of_spades.png'
    },
    {
        name: 'Ace_of_Hearts',
        img: 'images/cards100/14_of_hearts.png'
    },
    {
        name: 'Ace_of_Clubs',
        img: 'images/cards100/14_of_clubs.png'
    },
    {
        name: 'Ace_of_Diamonds',
        img: 'images/cards100/14_of_diamonds.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for (let i=0; i < 16; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cards100/back_of_a_card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')//look in grid find images
    if (cardsChosenIds[0] == cardsChosenIds[1]){
        alert('You have clicked the same card!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/cards100/back_of_a_card.png')
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/cards100/white_card.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/cards100/white_card.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else if (cardsChosen[0] != cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src', 'images/cards100/back_of_a_card.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/cards100/back_of_a_card.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    console.log('clicked', cardId)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkMatch, 500 )
    }
}