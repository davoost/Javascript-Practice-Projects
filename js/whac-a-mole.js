const squares = document.querySelectorAll('.square') //An array with all the squares class
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score') //hash looks for id . looks for class

let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is ' + result)
        result = 0
        score.textContent = result
        currentTime = 30
        timeLeft.textContent = currentTime
        moveMole()
        countDownTimerId = setInterval(countDown, 1000)
    }
}

let countDownTimerId = setInterval(countDown, 1000)