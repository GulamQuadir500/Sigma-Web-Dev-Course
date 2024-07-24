// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  for in loop
let obj = {
    name: "Gulam",
    age: 23,
    gender: 'male'
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// for of loop

for (const c of "Gulam") {
    console.log(c);
}

// while loop
// let x = 0;
// while (x < 10) {
//     console.log(x)
//     x++;
// }

// do while loop
let i = 10;
do {
    console.log(i);
    i++
} while (i < 6);