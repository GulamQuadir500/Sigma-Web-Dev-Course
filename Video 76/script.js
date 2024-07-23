// async function getData() {
//     // simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }


// settle means resolve or reject
// rsolve means promise has settled successfully
// rsolve means promise has not settled successfully

async function getData() {
    // simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json();
    return data;
    // return 455;
}

async function main() {


    console.log("Loading modules");

    console.log('Do Something else');

    console.log('Load Data');

    let data = await getData();

    console.log(data);

    console.log('process data');

    console.log('task 2');
}

main();

// data.then((v) => {
//     console.log(data);

//     console.log('process data');

//     console.log('task 2');
// })

