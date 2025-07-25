// Initial speed of the train in milliseconds (interval time between movement frames)
var trainSpeed = 250;

// Starting position of the train (in pixels from the left)
var trainPosition = 0;

// Variable to store the animation interval ID
var animation;

// Get the train DOM element
var train = document.getElementById("train");

// Add click event to train: clicking it will speed it up
train.addEventListener("click", speedUp);

// Get the stop button DOM element
var stopButton = document.getElementById("stopButton");

// Add click event to stop button: clicking it will stop the train
stopButton.addEventListener("click", stopTrain);

// Function to increase the train's speed
function speedUp() {
    // Decrease the interval (increase speed), but don’t go below 10ms
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }

    console.log("train speed: " + trainSpeed);

    // Stop any existing animation
    clearInterval(animation);

    // Start a new animation with updated speed
    animation = setInterval(frame, trainSpeed);

    // Function to update train position in each frame
    function frame() {
        // Move the train 2px to the right
        trainPosition += 2;

        // Update the train's position on the screen
        train.style.left = trainPosition + 'px';

        // Log the current position
        console.log(trainPosition);

        // Check for crash condition
        checkPosition(trainPosition);
    }
}

// Function to check if the train has reached the crash point
function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("OOOOO!");           // Show alert if train crashes
        console.log("Crash!");
        clearInterval(animation);  // Stop the animation
    }
}

// Function to stop the train manually using the stop button
function stopTrain() {
    // Only stop if train hasn't crashed yet
    if (trainPosition < 260) {
        clearInterval(animation);
    }
}
