// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array.However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleElement(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input Must be an array')
    }

    const result = [];
    let prevElement = null;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== prevElement) {
            result.push(array[i] * 2);
        } else {
            result.push(array[i]);
        }
        prevElement = array[i];
    }

    return result;
}

const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const doubleArray = doubleElement(inputArray);
console.log(doubleArray); // [2, 4, 2, 6,8, 4, 4, 10]


// Another Solution Using map

function doubleElements(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an Array')
    }

    return array.map((element, index, arr) => {
        // Check if the current element is not the same as the previous element
        if (index === 0 || element !== arr[index - 1]) {
            return element * 2;
        }
        return element;
    });
}

const inputArr = [2, 2, 2, 4, 5, 6, 6, 6];
const doubleArr = doubleElements(inputArr)

console.log(doubleArr); //[4,2,2,8,10,12,6,6]