
// 11. The Array Filterer:
//     You are building a search feature for your e - commerce site.Write a function named filterProducts that takes an array of product objects and a filter criterion.The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        return Object.keys(criterion).every(key => {
            if (typeof product[key] === 'string' && typeof criterion[key] === 'string') {
                return product[key].toLowerCase().includes(criterion[key].toLowerCase());
            }
            return product[key] === criterion[key];
        });
    });
}

// Example
const product = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 699 },
    { id: 3, name: 'Shoes', category: 'Fashion', price: 99 },
    { id: 4, name: 'Watch', category: 'Fashion', price: 199 },
];

const criterion = {
    category: 'Fashion', price: 99
};

const filterProduct = filterProducts(product, criterion);
console.log(filterProduct);