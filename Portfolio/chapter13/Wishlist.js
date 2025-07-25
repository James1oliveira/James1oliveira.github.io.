
// Get the "Print" button element by its ID and attach a click event listener to trigger the printView function
let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

// Get the "Add" button element by its ID and attach a click event listener to trigger the addTheThing function
let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

// Initialize an empty array to store the user's list items
let myList = [];

// Get the HTML element where the list will be displayed
let myListArea = document.getElementById("wishList");

// Function to handle adding an item to the list
function addTheThing() {
    // Get the input field where the user types their desired item
    let theThing = document.getElementById("iWant");

    // Add the entered item to the list and update the display
    addToTheList(theThing);

    // Clear the input field for the next entry
    resetInput(theThing);
}

// Function to add the item to the array and display it in the list
function addToTheList(thingToAdd) {
    // Push the value of the input field into the array
    myList.push(thingToAdd.value);

    // Create a new list item element
    let newListItem = document.createElement("li");

    // Set the content of the list item to the last added value
    newListItem.innerHTML = myList[myList.length - 1];

    // Append the new list item to the displayed list
    myListArea.appendChild(newListItem);
}

// Function to reset the input field (clear it)
function resetInput(inputToReset) {
    inputToReset.value = "";
}

// Function to switch the view for printing and display a sorted version of the list
function printView() {
    // Get the main list and form area elements
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    // Hide the form area to prepare for printing
    formArea.style.display = "none";

    // Apply a special class for print formatting
    listPage.className = "print";

    // Clear the current display of the list
    myListArea.innerHTML = "";

    // Sort the list items alphabetically
    myList.sort();

    // Re-add each sorted item to the list display
    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }

    // Open the print dialog
    window.print();
}