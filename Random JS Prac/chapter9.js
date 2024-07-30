// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = () => {
//         callback(script);
//         document.head.append(script)
//     }
// }

// // Now we can do someting like this
// loadScript('https://cdn.harry.com', (script) => {
//     alert('Script is loaded');
//     alert(script.src)
// })

// Task 1: Write a program to load a JavaScript file in a browser using Promises.Use .then() to display an alert when the load is complete.

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Script load erroe for ${src}`));
//         document.head.append(script);
//     });

//     loadScript('example.js')
//         .then(script => {
//             alert('Script loaded successfully!');
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }



// Task 3: Create a promise which rejects after 3 seconds.Use an async / await to get its value.Use a try/catch to handle its error.

// function rejectAfter3Seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error('Promise rejected after 3 seconds'));
//         }, 3000);
//     });
// }

// async function handlePromise() {
//     try {
//         await rejectAfter3Seconds();
//     } catch (error) {
//         console.error('Caught an error:', error.message);
//     }
// }

// handlePromise();


// Task 4: Write a program using Promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await these promises one by one.

function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise 1 resolved')
        }, 1000);
    })
}
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise 2 resolved')
        }, 2000);
    })
}
function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise 3 resolved')
        }, 3000);
    })
}

// using Promise.all()
async function awaitAllPromises() {
    const start = Date.now();
    const result = await Promise.all([promise1(), promise2(), promise3()]);
    const duration = (Date.now() - start) / 1000;
    console.log('Promise.all() result:', result);
    console.log('Time taken with Promise.all():', duration, 'Seconds');
}


// Awaiting promises one by one
async function awaitPromisesOneByOne() {
    const start = Date.now();
    const result1 = await promise1()
    const result2 = await promise2()
    const result3 = await promise3()
    const duration = (Date.now() - start) / 1000;
    console.log('Sequential await results:', [result1, result2, result3]);
    console.log('Time taken with sequential await:', duration, 'seconds');
}

awaitAllPromises();
awaitPromisesOneByOne();