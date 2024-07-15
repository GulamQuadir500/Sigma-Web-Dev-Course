/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Hub
Limited

*/

let a = Math.floor(Math.random() * 3);
console.log(a);
let adj = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire",
};

let b = Math.floor(Math.random() * 3);
let Sname = {
    0: "Engine",
    1: "Foods",
    2: "Garments",
};

let c = Math.floor(Math.random() * 3);
let anotherW = {
    0: "Bros",
    1: "Limited",
    2: "Hub",
};

console.log(`${adj[a]} ${Sname[b]} ${anotherW[c]}`);