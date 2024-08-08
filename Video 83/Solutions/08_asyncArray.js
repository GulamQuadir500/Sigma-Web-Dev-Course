// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function asyncArrayMapping(arr) {
//     return Promise.all(
//         arr.map(async num => {
//             await delay(500);
//             return num * 2;
//         })
//     );
// }

// const number = [1, 2, 3, 4, 5];
// asyncArrayMapping(number).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// })


// USing try catch

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncArrayMapping(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    const results = await Promise.all(
        arr.map(async num => {
            try {
                await delay(500);
                return num * 2;
            } catch (error) {
                console.error(`Error processing number ${num}:`, error);
                throw error; // Propagate the error
            }
        })
    );

    return results;
}

// Example usage:
(async () => {
    const numbers = [1, 2, 3, 4, 5];

    try {
        const result = await asyncArrayMapping(numbers);
        console.log(result); // Output after 500ms: [2, 4, 6, 8, 10]
    } catch (error) {
        console.error('Error in asyncArrayMapping:', error);
    }
})();
