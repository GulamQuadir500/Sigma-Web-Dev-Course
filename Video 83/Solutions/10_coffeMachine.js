// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously.Write an async function named brewCoffee that takes the type of coffee and returns a promise.The promise should resolve with a message indicating that the coffee is ready after a random delay.
function delay(ms) {
    return new Promise(reolve => setTimeout(reolve, ms));
}

async function brewCoffee(coffeeType) {
    if (typeof coffeeType !== 'string') {
        throw new Error('Invalid input: coffeeType must be a string');
    }

    const delayTime = Math.floor(Math.random() * 4000) + 1000; // random delay between 1 to 5 seconds
    await delay(delayTime);
    return `${coffeeType} is ready! Enjoy your cofee.`
}

// Example
(async () => {
    const cofeeType = 'Espresso';

    try {
        const messgae = await brewCoffee(cofeeType);
        console.log(messgae);
    } catch (error) {
        console.error('Error brewing coffee', error)
    }
})();