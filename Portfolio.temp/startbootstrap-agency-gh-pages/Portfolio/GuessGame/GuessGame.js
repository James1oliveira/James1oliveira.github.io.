// Generate a random secret number between 1 and 20
var secret = Math.floor(Math.random() * 20) + 1;

// Prompt the user for a guess and convert it to a number in one line
let guess = parseInt(prompt("Please guess the secret number (1-20)"));

// Keep asking until the correct number is guessed
while (guess !== secret) {
    // Provide hints if the guess is too low or too high
    if (guess < secret) {
        alert("Incorrect, slightly too low!");
    } else if (guess > secret) {
        alert("Incorrect, slightly too high!");
    }

    // Prompt the user to guess again
    guess = parseInt(prompt("Try again! Guess the secret number (1-20)"));
}

// When correct, exit the loop and congratulate the user
alert("Good Work Thats The Correct Guess!");
