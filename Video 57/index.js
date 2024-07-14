console.log("I am a Tutorial on Loops");

let a = 1;
// console.log(a)
// console.log(a + 1)
// console.log(a + 2)


// For Loop

// for (let i = 0; i < 100; i++) {
//     console.log(i + a);
//     // console.log(i);
// }

let obj = {
    name: "Gulam",
    role: "Programmer",
    company: "CodeWithTipu"
}

// For in Loop
for (const key in obj) {
    // const element = obj[key];
    // console.log(key, element);
    console.log(key);
}

// For of Loop
for (const c of "Gulam") {
    console.log(c);
}


// While loop
// let i = 0;
// while(i < 10){
//     console.log(i)
//     i++;
// }

// do while loop
let i = 10;
do {
    console.log(i);
    i++
} while (i < 6);