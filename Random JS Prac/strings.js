// let name = "Gulam";  // creates a string
// console.log(name.length);  // this property prints the length of the string

// use of template literal
let name = `Tipu`;
let sentence = `The name "is" Harry's`
console.log(sentence);

let a = `this is ${name}`; //string interpolation to use variable directly into a template literal
console.log(a);

// Escape sequence Charecters
// let name1  = 'Adam D'Anglo'  --->JS will misunderstand it

// we can sue single quote escape sequence to solve the problems

let name1 = 'Adam D\'Anglo \n good man'
console.log(name1);


// String Properties and Methods
let myName = "Gulam";
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.slice(1, 4))
console.log(myName.slice(2))


let name0 = "Gualm Quadir";
let newName = name0.replace("Quadir", "Parwez");
console.log(newName);

let nameX = "Gulam";
let nameY = "Quadir";
let nameZ = nameX.concat(nameY, "yes");
console.log(nameZ);

let nameTrim = "   gulam    ";
console.log(nameTrim.trim());

console.log(nameX[0]);
console.log(nameX[1]);
