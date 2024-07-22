console.log("Tipu is a hacker");
console.log("Gulam is a hecker");

setTimeout(() => {
    console.log("I am inside the setTimeOut 1")
}, 1000);
setTimeout(() => {
    console.log("I am inside the setTimeOut 2")
}, 1000);

console.log("The End");

const fn = () => {
    console.log("Notthing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gulam", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)