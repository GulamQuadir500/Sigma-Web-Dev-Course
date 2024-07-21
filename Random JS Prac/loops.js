for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let obj = {
    name: "Gulam",
    age: 23,
    gender: 'male'
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);

    }
}