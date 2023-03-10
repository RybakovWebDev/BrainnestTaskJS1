const moves = ["rock", "paper", "scissors"];
const messages = ["It's a tie!", "Computer wins!", "Player wins!"];
const promptText = [
  "Make your move! Type 'rock', 'paper' or 'scissors'.",
  "Please check your spelling, you can only type 'rock', 'paper' or 'scissors'.",
];

const computerPlay = () => moves[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return messages[0];
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    return messages[1];
  else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  )
    return messages[2];
};

(() => {
  let playerScore = 0;
  let computerScore = 0;
  let exit = false;
  let typo = false;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(typo ? promptText[1] : promptText[0])?.toLowerCase();
    if (playerSelection === undefined) {
      exit = true;
      break;
    }
    if (!moves.includes(playerSelection)) {
      typo = true;
      i--;
    }
    if (moves.includes(playerSelection)) {
      typo = false;
      const computerSelection = computerPlay();
      const play = playRound(playerSelection, computerSelection);
      console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`);
      console.log(`Round number ${i + 1}: ${play}`);
      if (play === messages[2]) playerScore++;
      if (play === messages[1]) computerScore++;
    }
  }
  exit
    ? console.log("You exited the game. Refresh the page to play again!")
    : console.log(
        `Final scores: Player - ${playerScore}, Computer - ${computerScore}. ${
          playerScore === computerScore ? "It's a tie! Nobody" : playerScore > computerScore ? "Player" : "Computer"
        } wins the game!`
      );
})();
