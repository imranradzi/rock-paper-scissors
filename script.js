
// this function returns a random string from the choices
// rock, paper or scissors
function computerPlay() {
  // value will return either 0, 1 or 2
  value = Math.floor(Math.random() * 3)

  // from the three possible values, we map them to
  // rock, paper, and scissors respectively
  if (value === 0) {
    return 'rock'
  } else if (value === 1) {
    return 'paper'
  } else if (value === 2) {
    return 'scissors'
  }
}

// this function takes two arguments, one from the player and one from
// the computer, and logs into the console either 'You win!',
// 'You lose!' or 'Draw!' depending on the choices of rock, and scissors
// and returns 'win', 'lose' or 'draw' accordingly
function playRound(playerSelection, computerSelection) {
  // making the user input (and computerSelection) case insensitive
  playerChoice = playerSelection.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  // finds the html element where our round result will be displayed
  result = document.querySelector('#result');

  // case where player chooses rock
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      result.textContent = 'You lose! Paper beats Rock';
      return 'lose'
    } else if (computerChoice === 'scissors') {
      result.textContent = 'You win! Rock beats Scissors';
      return 'win'
    } else if (computerChoice === 'rock') {
      result.textContent = 'Draw!';
      return 'draw'
    }

  // case where player chooses paper
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'paper') {
      result.textContent = 'Draw!';
      return 'draw'
    } else if (computerChoice === 'scissors') {
      result.textContent = 'You lose! Scissors beats Paper';
      return 'lose'
    } else if (computerChoice === 'rock') {
      result.textContent = 'You win! Paper beats Rock';
      return 'win'
    }

  // case where player chooes scissors
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      result.textContent = 'You win! Scissors beats Paper';
      return 'win'
    } else if (computerChoice === 'scissors') {
      result.textContent = 'Draw!';
      return 'draw'
    } else if (computerChoice === 'rock') {
      result.textContent = 'You lose! Rock beats Scissors';
      return 'lose'
    }
  }
}

const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

// run playRound whenever we click on any of the buttons
buttons.forEach((button) => {
  button.addEventListener('click', function() {

    // play one round of rock paper scissors
    gameResult = playRound(button.id, computerPlay());

    // updates the scores of player and computer accordingly
    if (gameResult === 'win') {
      playerScore++
    } else if (gameResult === 'lose') {
      computerScore++
    }

    score.textContent = `The current score is Player:${playerScore} | Computer: 
                            ${computerScore}`;

  });
});


  /* resultsFinal = document.querySelector('#results-final');

  // when one player has 5 points, reports the overall winner
  while (playerScore < 5 || computerSCore < 5) {
    if (playerScore === 5) {
      resultsFinal.textContent ='You win!';
    } else {
      resultsFinal.textContent = 'You lose!';
    }
  } */
  
  
  

  
    
    