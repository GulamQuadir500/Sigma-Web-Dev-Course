// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application.Write an asynchronous function called placeOrder that simulates placing an order and returns a promise.The promise should resolve with an order confirmation message after a random delay.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function placeOrder(orderDetails) {
    const delayTime = Math.floor(Math.random() * 4000) + 1000; // random delay between 1 to 5 seconds
    await delay(delayTime)
    return `Order confirmed! Your order details: ${JSON.stringify(orderDetails)}.`;
}

// Example
(async () => {
    const orderDetails = {
        itemId: 12345,
        quantity: 2,
        price: 29.99,
    };

    try {
        const confirmationMessage = await placeOrder(orderDetails);
        console.log(confirmationMessage);
    } catch (error) {
        console.error('Error Placing Order: ', error);
    }
})();