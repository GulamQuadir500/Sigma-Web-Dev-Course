// Write a program to print the marks of a student in an object using for loop

// const studentMarks = {};

// // List of students
// const students = ["Harry", "Rohan", "Akash"];

// // // Array of marks corresponding to the students
// const marks = [90, 75, 7];

// // Use a for loop to populate the object with marks
// for (let i = 0; i < students.length; i++) {
//     studentMarks[students[i]] = marks[i];
// }

// // use a for loop to print the marks
// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i]}: ${studentMarks[students[i]]}`);
// }



// using for in loop 
let marks = {
    Harry: 90,
    Rohan: 75,
    Akash: 7
}

for (const key in marks) {
    const element = marks[key];
    console.log(key, element);
}

// write a program to print "try again" until the user enters the correct number.

// const correctNumber = 7;

// function askForNumber() {
//     // Prompt the user for a number
//     const userNumber = parseInt(prompt("Enter a number: "), 10);

//     // check if the user's number is correct
//     if (userNumber === correctNumber) {
//         console.log('Congratulations! You entered the correct number');

//     } else {
//         console.log('try again');
//         askForNumber();

//     }
// }

// askForNumber();


// Write a function to find mean of 5 numbers

function findMean(n1, n2, n3, n4, n5) {
    const sum = n1 + n2 + n3 + n4 + n5;

    const mean = sum / 5;

    return mean;
}

const mean = findMean(10, 20, 30, 40, 50);
console.log("The mean is: " + mean);