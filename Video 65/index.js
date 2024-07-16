/* 
Write a program to calculate factorial of a number using reduce and loops 

6! = 6*5*4*3*2*1
*/

let arr = [1, 2, 3, 4, 5, 6];
let red = arr.reverse().reduce((a, b) => {
    return a * b;
})

console.log(red);


let a = 6;

function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
    }
    return fac;
}

console.log(facFor(a));