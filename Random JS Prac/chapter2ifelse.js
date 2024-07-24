// Use logical operator to find whether the age of aperson lies between 10 and 20

let age = 21;
if (age >= 10 && age <= 20) {
    console.log("Your age is between 10 and 20")
}
else {
    console.log("You are less than 10 or greator than 20")
}


// Demosntrate the use of switch caseIn js
let fruit = "apple";
switch (fruit) {
    case 'Oranges':
        console.log('Oranges are 20 rupess kilo')
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and Papayas are 30 rupess kilo');
        break;

    default:
        console.log(`Sorry we are out of ${fruit}.`)
        break;
}


// Write a js program to find whether a number is divisible by either 2 or 3
let num = 11
if (num % 2 === 0 || num % 3 === 0) {
    console.log("Number is divisible by 2 or 3");
} else {
    console.log("Numbe is not divisible by neither 2 or 3");
}


// print you can drive or you can't drive based on being greater than 18 using turnery operator
let drive = (age > 18) ? "You Can Drive" : "You Can Not drive";
console.log(drive);