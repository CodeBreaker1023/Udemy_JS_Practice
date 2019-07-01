/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0]
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;   

// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// use style method, css property and then the value associated with the property
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// function btn() {
//     // Do something here
// }
// btn();

// callback function - a function that passes into another function as an argument to be called
// In this case, we are passing the btn() as argument in the addEventListener()
// document.querySelector('.btn-roll').addEventListener('click', btn);

// anonymous function - is when we call a function as an argument within another function without naming it
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. random number 
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        // Next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]

    // Check if player won the game
    nextPlayer();
    

});


function nextPlayer(){
    // Next player
    // Ternary operator vs if/else statement
    // if activePlayer = 0 then activePlayer = 1, else activePlayer = 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}