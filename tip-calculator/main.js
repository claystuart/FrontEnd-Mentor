/* Create references to various parts of page */
const resetPtr = document.getElementById("reset");
const billPtr = document.getElementById("bill");


/* RESET BUTTON */
resetPtr.addEventListener("click", function (event) {
    console.log("Reset Button Pressed");
    billPtr.value = "";
    updateDisplay(0);
});



billPtr.addEventListener("change", function (event) {
    let amount = event.target.value;
    amount = Number(amount);

    if (typeof (amount) == 'number' && !isNaN(amount) && amount < 100000)
        updateDisplay(amount);
});


function updateDisplay(amount) {
    document.getElementById("total").innerHTML = "$" + amount.toFixed(2);
}