let messageEl = document.getElementById('message-el')
let sumEL = document.querySelector('.sum-el')
let cardsEl = document.querySelector('.cards-el')
let newCardEl = document.querySelector('#newCard')
let Start = document.getElementById('start')
let playerEL = document.getElementById('player-el')
let playerName = "Isaac"
let playerMoney = 145
let life = false
let blackJack = false
let result = ""  
let listCards = []
let sum = 0

let player = {
    name: playerName,
    money: playerMoney
}

const rolling = () => {
    let rolledNumber = Math.floor( Math.random() * 13) + 1
    if (rolledNumber > 10){
        return 10
    } else if(rolledNumber === 1 ){
        return 11
    } else {
        return rolledNumber
    }
}

const startGame = () => {
    playerEL.textContent = player.name + ": $" + player.money
    life = true
    let firstCard = rolling()
    let secondCard = rolling()
    listCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

const renderGame = () => { 

    sumEL.textContent = "Sum: " + sum
    for(let i = 0; i < listCards.length; i++){
        cardsEl.textContent += listCards[i] + ' '
    }
    life = true
    if(sum < 21){
        result = "Do you want to draw another Card?"
    } else if(sum === 21){
        result = "You won the Blackjack!"
        blackJack = true
    } else{
        result = "You are out of the Game!"
        life = false
        blackJack = true
    }
    messageEl.textContent = result
    console.log(listCards);
}
const newcard = () => {
    if(life === true && blackJack === false){
        let card = rolling()
        sum += card
        listCards.push(card)
        console.log(listCards)
        renderGame()
    }

}

Start.addEventListener('click', startGame)
newCardEl.addEventListener('click', newcard)