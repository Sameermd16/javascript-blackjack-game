// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = getRandomCard(); 
let secondCard = getRandomCard(); 
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
    //generates random number between 1 and 13
    // if 1  -> return 11
    //if 10 - 13   -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) {
        return 11
    }else if(randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want another card?";
    }else if(sum === 21) {
        message = "You got a blackjack!";
        hasBlackjack = true;
    }else if(sum > 21) {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard() {
    // 1. Create a card variable, and hard code its value to a number (2-11)
    // 2. Add the new card to the sum variable
    // 3. Call startGame()
    let card = getRandomCard();
    cards.push(card)
    sum += card;
    console.log(cards)
    renderGame()
}

