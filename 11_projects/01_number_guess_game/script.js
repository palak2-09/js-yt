// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of attempts
let attemptCount = 0;


// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");


// When Guess button is clicked
guessBtn.addEventListener("click", function() {

    // Get the user's guess and convert it to a number
    const guess = Number(guessInput.value);

    // Check if the input is valid
    if (guess < 1 || guess > 100 || guessInput.value === "") {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    // Increase attempt count
    attemptCount++;

    // Update attempts on the page
    attempts.textContent = attemptCount;


    // Compare the guess with the secret number
    if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = `Correct! You guessed it in ${attemptCount} attempts.`;

        // Stop the user from making more guesses
        guessBtn.disabled = true;
        guessInput.disabled = true;
    }
});


// When Play Again button is clicked
resetBtn.addEventListener("click", function() {

    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    attemptCount = 0;

    // Reset the page
    attempts.textContent = 0;
    message.textContent = "";
    guessInput.value = "";

    // Enable input and button again
    guessInput.disabled = false;
    guessBtn.disabled = false;
});