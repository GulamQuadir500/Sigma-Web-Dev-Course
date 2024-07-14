/* Create a faulty Calculator using JavaScript

This calculator does following:
1. It takes two numbers as input from user
2. it performs wrong operations as follows

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);

let a = prompt("Enter First Number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}