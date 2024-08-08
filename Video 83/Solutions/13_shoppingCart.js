// 13. The Shopping Cart Totalizer:
//     You are working on an e - commerce website, and you need to calculate the total cost of items in the shopping cart.Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        if (product.price < 0 || product.quantity < 0) {
            throw new Error('Invalid product: Price and quantity must be non-negative');
        }
        return total + (product.price * product.quantity);
    }, 0);
}

// Example
const shoppingCart = [
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Phone', price: 699.99, quantity: 2 },
    { id: 3, name: 'Headphones', price: 199.99, quantity: 3 },
];

const totalCost = calculateTotal(shoppingCart);
console.log(`Total cost: $${totalCost.toFixed(2)}`);