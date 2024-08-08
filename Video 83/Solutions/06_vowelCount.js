// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string.Consider both uppercase and lowercase vowels.

function vowelCount(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string')
    }

    const vowels = 'aeiouAEIOU'
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const text = "Hello World"
console.log(vowelCount(text));

const moreText = 'qwrtypsdfghj'
console.log(vowelCount(moreText));