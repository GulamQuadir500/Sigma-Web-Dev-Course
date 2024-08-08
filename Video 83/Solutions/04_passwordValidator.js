// 4. The Password Validator:
//    You are building a password validation feature.Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// Using Ascii Value
function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        const asciiValue = password.charCodeAt(i);

        if (asciiValue >= 65 && asciiValue <= 90) {
            hasUppercase = true;
        }
        else if (asciiValue >= 97 && asciiValue <= 122) {
            hasLowercase = true;
        }
        else if (asciiValue >= 48 && asciiValue <= 57) {
            hasDigit = true;
        }

        if (hasUppercase && hasLowercase && hasDigit) {
            return true;
        }
    }

    return hasUppercase && hasLowercase && hasDigit;
}

const password = "Password123";
console.log(isValidPassword(password)); // true

const invalidPassword = "pass123";
console.log(isValidPassword(invalidPassword)); // false


// Using Regular expression

function isValidPassword(password) {
    if (typeof password !== 'string') {
        throw new Error('Input must be a string');
    }

    const lengthRequirement = password.length >= 8;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const lowercaseRequirement = /[a-z]/.test(password);
    const digitRequirement = /[0-9]/.test(password);

    return lengthRequirement && uppercaseRequirement && lowercaseRequirement && digitRequirement;
}

const pass = "Password12345";
console.log(isValidPassword(pass));