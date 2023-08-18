// check whether a string starts and ends with a cergtain character

let string = "hello";
let testStart = string.startsWith('h');
let testEnd = string.endsWith('o');

if (testStart == true && testEnd == true) {
    console.log('starts with h and ends with e')
} else
    if (testStart == true && testEnd == false) {
        console.log('starts with h ')
    } else
        if (testStart == false && testEnd == true) {
            console.log(' ends with e')
        }
        else {
            console.log('neither starts and ends with h and e')
        }
