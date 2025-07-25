// List of item numbers (used for display)
var nums = [1, 2, 3, 4, 5, 6, 7, 8];

// Corresponding item names for sale
var items = ["Coke", "Kit Kat", "Bar One", "Fanta", "lunchbar", "ice tea", "corn bites", "Doritos"];

// Corresponding item prices
var prices = [7.5, 9.5, 8.5, 7.5, 11, 8, 5, 9];

// Quantities of items selected by the user (initially zero)
// ❗ Only four elements - might be a bug since `items` has 8 entries
var quantities = [0, 0, 0, 0, 0 ,0 ,0 ,0];

// Total cost per item (price × quantity)
var totals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

// Cumulative total of the order
var totalOrderAmt = 0;

/**
 * Function to add one unit of an item to the selection
 * @param {number} x - Index of the item to add
 */
function add_selection(x) {
    console.log(x); // Debugging: log the index

    // Increase quantity
    quantities[x] = quantities[x] + 1;

    // Update total cost for that item
    totals[x] = prices[x] * quantities[x];

    // Add to total order amount
    totalOrderAmt += prices[x];

    // Update the display
    display_all();
}

/**
 * Function to remove one unit of an item from the selection
 * @param {number} x - Index of the item to remove
 */
function remove_selection(x) {
    // Ensure quantities exist and the quantity at index x is greater than 0
    if (quantities && quantities[x] > 0) {
        // Decrease quantity
        quantities[x] -= 1;

        // Update item total
        totals[x] = prices[x] * quantities[x];

        // Subtract from overall total
        totalOrderAmt -= prices[x];

        // Update the display
        display_all();
    }
}

function display_all() {
    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/><p>Total: " + totalOrderAmt.toFixed(2) + "</p>";


    document.getElementById("demo").innerHTML = myTable;


}

function checkout() {
    document.getElementById("total").innerHTML = "Total Amount is: R" + totalOrderAmt.toFixed(2) + ". Nothing Is Cheap."
        myTable += "<br/><br/><p>Total: " + totalOrderAmt.toFixed(2) + "</p>";
}
window.onload = function() {
    display_all();
}
