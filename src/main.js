let readlineSync = require('readline-sync');
let Route = require('./Route');




console.log('----Welcome----');
let index = new Route().execute('main');
console.log(index);

let ok = true;
let route = new Route();

while (ok) {
    let input = readlineSync.question('');
    let result = route.execute(input);
    console.log(result);

    if (result === 'Thanks for using') {
        console.log(result);
        ok = false;
    }

}

// let input = readlineSync.question('');
// let result = new Route().execute(input);
// console.log(result);


// let input = readlineSync.question('Please input name!\n');
// console.log(input);
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
//
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//     hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');