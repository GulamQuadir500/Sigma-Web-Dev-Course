const fruit = ["mango", "apple", "banana"];
const a = [7, "tipu", "false"];
console.log(a[0]);
console.log(a[1]);
console.log(a.length);

let newArr = a[1] = "Gulam";
console.log(a); //[ 7, 'Gulam', 'false' ] Arrays are mutable 
console.log(typeof (a)); //object


// Arrays Methods

let n = [1, 7, 9];
console.log(n.toString());
console.log(n.join("-"));
console.log(n.pop()) //removes and returns the last elemnt updates the original array

console.log(n);

console.log(n.push(9)); //add and returns the last elemnt updates the original array

console.log(n);

console.log(n.shift()); //removes and returns the first elemnt updates the original array
console.log(n);

console.log(n.unshift(1)); //add and returns the first elemnt updates the original array

console.log(n);


// concat
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
console.log(a1.concat(a2, a3)); //returns the new array doesn't change the original array
console.log(a1)



// Sort
let x = [9, 7, 0, 1, 5, 7]
console.log(x.sort());  // [ 0, 1, 5, 7, 7, 9 ]


// splice  --> can be used to add new items to an array

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(2, 1, 23, 24));
// console.log(numbers); // [ 1, 2, 23, 24, 4, 5 ]

// console.log(numbers.reverse()); // [ 5, 4, 24, 23, 2, 1 ]


// slice --> its a piece f an array which creates a new array

const num = [1, 2, 3, 4, 5];
console.log(num.slice(2))
console.log(num.slice(1, 3))

// Reverse
let rev = [1, 2, 3, 4, 5, 56, 6,];
console.log(rev.reverse())



// Sure, here are examples of various array methods for looping through arrays in JavaScript:

// 1. `forEach`
// The `forEach` method executes a provided function once for each array element.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
//     console.log(number);
// });

// 2. `map`
// The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const numbers = [1, 2, 3, 4, 5];
// // const squaredNumbers = numbers.map(number => number * number);

// const squaredNumbers = numbers.map(number => {
//     number * number
// })

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]


//  3. `filter`
// The `filter` method creates a new array with all elements that pass the test implemented by the provided function.


// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // [2, 4]

// 4. `reduce`
// The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, current) => acc + current, 0);

// console.log(sum); // 15

// ### 5. `some`
// The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.


// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some(number => number % 2 === 0);

// console.log(hasEvenNumber); // true


// ### 6. `every`
// The `every` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const numbers = [1, 2, 3, 4, 5];
// const allPositive = numbers.every(number => number > 0);

// console.log(allPositive); // true

// 7. find
// The find method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find(number => number % 2 === 0);

// console.log(firstEvenNumber); // 2

// 8. findIndex
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function.Otherwise, it returns`-1`, indicating that no element passed the test.


// const numbers = [1, 2, 3, 4, 5];
// const firstEvenIndex = numbers.findIndex(number => number % 2 === 0);

// console.log(firstEvenIndex); // 1

// 9. for...of
// The for...of statement creates a loop iterating over iterable objects, such as arrays.


// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
//     console.log(number);
// }


// 10. `for...in`
// The `for...in` statement iterates over all enumerable properties of an object, including inherited properties.When used with arrays, it iterates over array indices.


// const numbers = [1, 2, 3, 4, 5];

// for (const index in numbers) {
//   console.log(numbers[index]);
// }
