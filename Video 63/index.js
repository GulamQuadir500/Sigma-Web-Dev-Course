let arr = [1, 2, 4, 5, 7];

arr[0] = 543;
// console.log(arr, typeof arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

console.log(arr.toString());
console.log(arr.join(" and "));

let a = [1, 2, 3, 4, 5, 6, 7];
a.pop();
console.log(a);

a.push(100, "tipu");
console.log(a);

a.shift();
console.log(a);

a.unshift(545)
console.log(a);

delete a[6];
console.log(a);
console.log(a.length);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(1, 2));
console.log(numbers);

console.log(numbers.splice(1, 2, 34, 45))
console.log(numbers);

console.log(numbers.reverse());