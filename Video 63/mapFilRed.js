let arr = [1, 13, 5, 7, 11]
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }


// map function
let newArr = arr.map((e) => {
    return e ** 2;
})
console.log(newArr);


// filter function
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}

console.log(arr.filter(greaterThanSeven));


// reduce function
let arr2 = [1, 2, 3, 4, 5, 6]; // 1+2=3, 3+3 = 6, 6+4 = 10, 10+5= 15, 15+6 = 21;
const red = (a, b) => {
    return a + b;
}

console.log(arr2.reduce(red));


// from function --> it converts any string to array
console.log(Array.from("Gulam"));