/* Create references to various parts of page */
const resetPtr = document.getElementById("reset");
const billPtr = document.getElementById("bill");
const peopleSumPtr = document.getElementById("peopleSum");

const percentageButtons = document.querySelector(".tip__amount > button");

/* VARIABLES */
let amount = .00;
let numberOfPeoplePaying = 1;
let tipAmount = .15;

/* RESET BUTTON */
resetPtr.addEventListener("click", function (event) {
    console.log("Reset Button Pressed");
    billPtr.value = "";
    peopleSumPtr.value = "";
    amount = 0;
    numberOfPeoplePaying = 1;
    updateDisplay();
});

/**
 * BILL AMOUNT (CHANGE event)
 * 
 * 1) Gets the value of the text input box located in header > tip__entry
 * 2) Converts the value to a Number using built-in function
 * 3) Stores the value in the "amount" variable
 * 2) Checks to see if the amount is good
 *  a) If so, calls the update function
 *  b) If not, sends an error message to console
 */ 
 billPtr.addEventListener("change", function (event) {
    amount = Number(event.target.value);

    if (typeof (amount) == 'number' && !isNaN(amount) && amount < 100000 && amount > 0) {
        updateDisplay();
        console.log(`Bill amount changed: ${amount}`);
    }
    else
        console.error(`Bad input: ${amount}`);
});


/**
 * PEOPLE IN PARTY WHO ARE PAYING AMOUNT (CHANGE event)
 * 
 * 1) Gets the value of the text input box located in header > tippers
 * 2) Converts the value to a Number using built-in function
 * 3) Stores the value in the "numberOfPeoplePaying" variable
 * 2) Checks to see if the amount is good
 *  a) If so, calls the update function
 *  b) If not, sends an error message to console
 */ 
peopleSumPtr.addEventListener("change", function (event) {
    numberOfPeoplePaying = Number(event.target.value);

    if (typeof (numberOfPeoplePaying) == 'number' && !isNaN(numberOfPeoplePaying) && numberOfPeoplePaying > 0) {
        console.log(`People Sum changed: ${numberOfPeoplePaying}`);
        updateDisplay();
    }
    else
        console.error(`Bad input: ${numberOfPeoplePaying}`);
});


/**
 * Update Display 
 * 
 * calculates and updates the results in the footer section
 */
function updateDisplay() {
    let tipPerPerson = (amount / numberOfPeoplePaying) * tipAmount;
    document.getElementById("result").innerHTML = "$" + tipPerPerson.toFixed(2);

    let totalPerPerson = amount / numberOfPeoplePaying;
    document.getElementById("total").innerHTML = "$" + totalPerPerson.toFixed(2);
}