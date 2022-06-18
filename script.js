
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
// the computer, and returns either 'You win!', 'You lose!' or 'Draw!'
// depending on the choices of rock, and scissors
function playRound(playerSelection, computerSelection) {
  // making the user input (and computerSelection) case insensitive
  playerChoice = playerSelection.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  // case where player chooses rock
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose!'
    } else if (computerChoice === 'scissors') {
      return 'You win!'
    } else if (computerChoice === 'rock') {
      return 'Draw!'
    }

  // case where player chooses paper
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'paper') {
      return 'Draw!'
    } else if (computerChoice === 'scissors') {
      return 'You lose!'
    } else if (computerChoice === 'rock') {
      return 'You win!'
    }

  // case where player chooes scissors
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You win!'
    } else if (computerChoice === 'scissors') {
      return 'Draw!'
    } else if (computerChoice === 'rock') {
      return 'You lose!'
    }
  }
}
  
  
  
  

  
    
    