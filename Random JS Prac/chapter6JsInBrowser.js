// 1. Write a program using the prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

function chrckDrivingEligibility() {
    let age = prompt("Please enter your age");
    age = Number(age);
    if (age < 0) {
        console.error("Error: Age entered is negative")
        alert("Invalid age entered");
    }
    else if (!isNaN(age) && age >= 18) {
        alert("You are eligible to drive!")
    } else {
        alert("Sorry, You are not eligible for drive")
    }
}

do {
    chrckDrivingEligibility()
} while (confirm("Do you wnat to check again"))

// 2. In Q1 use confirm to ask the user if he wants to see the prompt again.(writing the code upper)


// 3. In the previous question use console.error to log the error if the age entered is negative.(writing code in the same answer)

// 4. Write a program to change the URL to google.com(redirection) if user enters a number greater than 4.

let number = prompt("Enter a number");
number = Number(number);
if (number > 4) {
    window.location.href = "https://www.google.com";
}

// 5. Change the background of the page to yellow, red, or any other color based on user input through prompt.

let color = prompt("Enter a color (e.g: yellow, red, blue, etc.):");
document.body.style.backgroundColor = color;