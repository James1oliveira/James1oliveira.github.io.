// Declare global variables
var money = 25;        // Starting budget for the week
var lunches = 0;       // Counter for the number of lunches bought

// Display the initial lunch budget on the page
document.getElementById("money").innerHTML = money;

// Set up the event listener to run buyLunches() when the order button is clicked
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
 * Function: buyLunches
 * Simulates buying a specified number of sandwiches per day
 * Continues until the budget runs out
 */
function buyLunches() {
    resetForm(); // Reset variables and UI before starting new order
    var day = 0;  // Track number of days

    // Continue buying lunches while there is money
    while (money > 0) {
        day++; // Increment day count

        // Get today's sandwich price (random value between $1 and $2)
        var priceToday = getSandwichPrice();

        // Get the number of sandwiches the user wants to buy from input field
        var numberOfSandwiches = document.getElementById("numSandwiches").value;

        // Calculate total cost for today's sandwiches
        var totalPrice = priceToday * numberOfSandwiches;

        // Check if user has enough money for today's lunch
        if (money >= totalPrice) {
            money = money - totalPrice; // Deduct cost from money
            lunches++; // Increment lunch count

            // Display success message for the day
            document.getElementById("receipt").innerHTML += 
                "<p>On day " + day + ", sandwiches are: $" + priceToday + 
                ". You have $" + money.toFixed(2) + " left.</p>";
        } else {
            // Not enough money for today's lunch
            document.getElementById("receipt").innerHTML += 
                "<p>Today, sandwiches are: $" + priceToday + 
                ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0; // Stop the loop
        }
    }

    // Show final count of lunches bought
    document.getElementById("receipt").innerHTML += 
        "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
 * Function: getSandwichPrice
 * Returns a random sandwich price between $1.00 and $2.00
 */
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (2 - 1) + 1).toFixed(2); // Price between 1.00 and 2.00
    return sandwichPrice;
}

/*
 * Function: resetForm
 * Resets the budget, lunch count, and clears the receipt output
 */
function resetForm() {
    money = 20;        // Reset budget
    lunches = 0;       // Reset lunch counter
    document.getElementById("receipt").innerHTML = ""; // Clear receipt
}
