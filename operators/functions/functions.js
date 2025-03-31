// function definition 
function addNumbers(x, y) {
    let solution = x + y;
    return solution;
}
//function call
let x = addNumbers(3, 5);
console.log("addNumbers returns the value of x", x);
button.addEventListener("click", function () {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let button = document.getElementById("submit");
    let num1 = input1.value;
    let num2 = input2.value;
    addNumbers(num1, num2)
})