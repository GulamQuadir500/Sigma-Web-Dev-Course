function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is nice!")
}

nice("tipu");
nice("Gulam")

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

// sum(3, 6);
result1 = sum(3, 6);
result2 = sum(9, 4);
result3 = sum(6, 9, 1);
console.log("The sum of these numbers are: ", result1)
console.log("The sum of these numbers are: ", result2)
console.log("The sum of these numbers are: ", result3)

const func1 = (x) => {
    console.log("I am an Arrow function", x)
}

func1(34);
func1(66);
func1(99);