
// this function returns a random string from the choices
// rock, paper or scissors
function computerPlay() {
  // value will return either 0, 1 or 2
  value = Math.floor(Math.random() * 3)

  // From the three possible values, we map them to
  // Rock, Paper, and Scissors respectively
  if (value === 0) {
    return 'Rock'
  } else if (value === 1) {
    return 'Paper'
  } else if (value === 2) {
    return 'Scissors'
  }
}
