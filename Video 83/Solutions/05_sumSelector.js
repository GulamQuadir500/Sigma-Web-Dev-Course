
// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number.Write a function that performs this summation.

function sumUntilNegative(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be na array')
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            throw new Error('Array elements mustb be numbers')
        }
        if (array[i] < 0) {
            break;
        }

        sum += array[i];
    }
    return sum;
}

const numbers = [1, 2, 3, -1, 4, 5];
console.log(sumUntilNegative(numbers));

const moreNums = [5, 10, 15, 20];
console.log(sumUntilNegative(moreNums));