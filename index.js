let cards = [] 
let sum = 0
let hasBlackjack = false ;
let isAlive = false ;
let message = "";
let messageEl = document.getElementById ("message-el");
let sumEl = document.getElementById ("sum-el");
let cardsEl = document.getElementById ("cards-el");

console.log(cards)

function startGame() { ;
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard

  renderGame() ; 

}
  
  function getRandomCard() {
   randomNumer = Math.floor(Math.random()*13) + 1;
    if (randomNumer > 10)  {
      return 10
    } else if (randomNumer === 1) {
      return 11
    } else {
      return randomNumer

    }
  }


function renderGame() { 
  cardsEl.textContent = "Cards: " 

  for ( let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum:" + sum ;
  if (sum <= 20) { 
    message = "Do you want to draw a new card?";
 } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true
 } else {
    message = "You're out of the game!";
    isAlive = false
 }
     messageEl.textContent = message
}
 function newCard() {
    console.log("Drowing a new card from the deck!" )
    if (isAlive === true && hasBlackjack === false){
      let card = getRandomCard()

      sum += card
       cards.push(card)
       console.log(cards)
       renderGame()
    for ( let count = 10; count<21; count += 1 ) {
      console.log(count)  
    }

}
 }

