// Listen for clicks on the "Place Order" button
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * Main function to handle the order process:
 * - Gets values from the form
 * - Calculates the pizza and delivery prices
 * - Generates and displays the output
 */
function placeOrder() {
    // Get input values from the form
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    // Calculate the base price of the pizzas
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // Calculate delivery fee based on city and birthday
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // Start building the output message
    var theOutput = "<p>Thank you for your order.</p>";

    // Add delivery price message
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice + "</p>";
    }

    // Show the total cost (pizza + delivery)
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    // Display the output message in the browser
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * Calculates the price of the pizza order
 * @param {number} numPizzas - The number of pizzas ordered
 * @param {string} typePizza - The type of pizza (e.g., "regular", "supreme")
 * @returns {number} - The total price of the pizza order
 */
function calculatePrice(numPizzas, typePizza) {
    // Base price: $10 per pizza
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // Add $2 per pizza if the type is "supreme"
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }

    // Return total price including any extra charge
    return orderPrice + extraCharge;
}

/**
 * Calculates the delivery cost based on rules
 * @param {number} orderPrice - The total pizza cost
 * @param {string} deliveryCity - The city for delivery
 * @param {string} birthday - "yes" if it's the user's birthday
 * @returns {number} - The delivery charge ($0 or $5)
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    // Free delivery if in "Anytown" and total > $10, or if it's your birthday
    if ((deliveryCity === "Anytown" && orderPrice > 10) || birthday === "yes") {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5; // Otherwise, flat $5 delivery charge
    }

    return deliveryPrice;
}
