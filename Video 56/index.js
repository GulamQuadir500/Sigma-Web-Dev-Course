console.log("Hello I am conditional Tutorial")

let age = 0;
// let grace = 2;

// age += grace
// console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if (age == 18) {
    console.log("You can drive");
} else if (age === 0) {
    console.log("Are you kidding");
} else {
    console.log("You cannot drive");
}


// Turnery Operator
let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c);