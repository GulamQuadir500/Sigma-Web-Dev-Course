// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original.Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    let mirrorStr = str.split('').reverse().join('');
    return str + ":" +
        mirrorStr;
}

let originalString = "Raja"
console.log(mirrorString(originalString));