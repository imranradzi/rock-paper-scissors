
// this function returns a random string from the choices
// rock, paper or scissors
function computerPlay() {
  // value will return either 0, 1 or 2
  value = Math.floor(Math.random() * 3)

  // from the three possible values, we map them to
  // Rock, Paper, and Scissors respectively
  if (value === 0) {
    return 'Rock'
  } else if (value === 1) {
    return 'Paper'
  } else if (value === 2) {
    return 'Scissors'
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

  // case where player chooses rock
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('You lose! Paper beats Rock');
      return 'lose'
    } else if (computerChoice === 'scissors') {
      console.log('You win! Rock beats Scissors');
      return 'win'
    } else if (computerChoice === 'rock') {
      console.log('Draw!');
      return 'draw'
    }

  // case where player chooses paper
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'paper') {
      console.log('Draw!');
      return 'draw'
    } else if (computerChoice === 'scissors') {
      console.log('You lose! Scissors beats Paper');
      return 'lose'
    } else if (computerChoice === 'rock') {
      console.log('You win! Paper beats Rock');
      return 'win'
    }

  // case where player chooes scissors
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log('You win! Scissors beats Paper');
      return 'win'
    } else if (computerChoice === 'scissors') {
      console.log('Draw!');
      return 'draw'
    } else if (computerChoice === 'rock') {
      console.log('You lose! Rock beats Scissors');
      return 'lose'
    }
  }
}

// this function plays 5 rounds of rock paper scissors between
// user and computer, keeps track of the score, and reports
// the winner and loser at the end of the 5 rounds
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // computer chooses either rock, paper or scissors
    let computerSelection = computerPlay();

    // ask the player for their choice
    let playerSelection = prompt('Type either "Rock", "Paper" or "Scissors" to enter your choice!')

    // play one round of rock paper scissors
    gameResult = playRound(playerSelection, computerSelection);

    // updates the scores of player and computer accordingly
    if (gameResult === 'win') {
      playerScore++
    } else if (gameResult === 'lose') {
      computerScore++
    }

    // prints to the console the current scores of player and computer
    console.log(`The current score is Player:${playerScore} | Computer:${computerScore}`)
  }

  // at the end of 5 rounds, reports the overall winner
  if (playerScore > computerScore) {
    console.log('You are the overall winner of the 5 rounds!')
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lost!') 
  } else if (playerScore === computerScore) {
    console.log('Scores are the same, it is a draw!')
  }
}

game();
  
  
  

  
    
    