let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.style.color = 'red';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    message.style.color = 'green';
    submitButton.disabled = true;
    restartButton.style.display = 'block';
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = 'orange';
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = 'orange';
  }

  guessInput.value = ''; // Clear the input after each guess
  guessInput.focus(); // Focus back on the input for the next guess
});

restartButton.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  message.textContent = '';
  guessInput.value = '';
  submitButton.disabled = false;
  restartButton.style.display = 'none';
});
