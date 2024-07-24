// 1. Creates an array of numbers and take input from user to add numbers to this array

// Initialize an empty array to store the numbers
// const numbers = [];

// // Function to prompt the user to add numbers to the array
// function addNumbersToArray() {
//     // Ask the user how many numbers they want to add
//     const count = parseInt(prompt("How many numbers do you want to add?"), 10);

//     // Loop to take input from the user
//     for (let i = 0; i < count; i++) {
//         // Prompt the user to enter a number
//         const number = parseInt(prompt(`Enter number ${i + 1}:`), 10);

//         // Add the number to the array
//         numbers.push(number);
//     }

//     // Print the array to the console
//     console.log("Numbers in the array:", numbers);
// }

// // Call the function to start the process
// addNumbersToArray();



// 2.Keep adding numbers to the array until 0 is added to the array

// // Initialize an empty array to store the numbers
// const numbers = [];

// // Function to prompt the user to add numbers to the array
// function addNumbersToArray() {
//     while (true) {
//         // Prompt the user to enter a number
//         const number = parseInt(prompt("Enter a number (enter 0 to stop):"), 10);

//         // Check if the entered number is 0
//         if (number === 0) {
//             break; // Exit the loop if the number is 0
//         }

//         // Add the number to the array
//         numbers.push(number);
//     }

//     // Print the array to the console
//     console.log("Numbers in the array:", numbers);
// }

// // Call the function to start the process
// addNumbersToArray();


// 3. filters for numbers divisible by 10 from a given array

let nums = [10, 12, 30, 35, 40, 56, 60];

let divby10 = nums.filter((v) => {
    return v % 10 === 0;
})

console.log(divby10);


// 4. create an array of square of given numbers
let arr = [2, 3, 5, 6, 7, 8];

let squareNum = arr.map((e) => {
    return e ** 2;
})

console.log(squareNum);



// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be claculated)

function factorial(n) {
    // Create an array of first n natural numbers
    const numbers = Array.from({ length: n }, (v, k) => k + 1)

    // use reduce
    const result = numbers.reduce((acc, current) => acc * current, 1);

    return result;
}

const n = 6;
console.log(factorial(n)); // 720
