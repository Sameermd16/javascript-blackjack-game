// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10;
let secondCard = 10;
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    let card = 1;
    sum += card;
    renderGame()
}

function startGame() {
    renderGame()
}