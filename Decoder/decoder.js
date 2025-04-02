let input1 = document.getElementById("word");
let submit = document.getElementById("submit");
let output1 = document.getElementById("code-output");
console.log(submit, "is the submit.");

function encoder1() {
    let value_ = input1.value;
    let value = value_.toUpperCase()
    console.log("INPUT IS", value);

    let len = value.length;
    let encoded = "";
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (let i = 0; i < len; i++) {
        console.log("the letter is", i);
        // this the formula to encode letters to numbers
        let result = alphabet.indexOf(value[i]);

        //this is the contatornator 
        encoded += result +"$";
    }

    output1.innerHTML = encoded;
}