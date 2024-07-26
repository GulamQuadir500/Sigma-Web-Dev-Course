// let obj = {
//     a: 1,
//     b: "harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;  // sets rabbit.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log('kha raha hoon');
    }
    jumps() {
        console.log('Kood raha hoon');

    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is Lion...")
    }
    eats() {
        super.eats()
        console.log('kha raha hoon roar');
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera")
console.log(l);