var tax;

function taxCalc() {
    var income = document.getElementById("income").value;
    var wealth = document.getElementById("wealth").value;
    tax = (0.35 * income) + (0.25 * wealth);
    document.getElementById("tax").value = tax;
    console.log(tax);
}
console.log(tax);
