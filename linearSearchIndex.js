import linearSearch from './search/linearSearch';
import readline from 'readline';
import { stdin, stdout } from 'process';

console.log('Linear search imported.');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`Array: ${array}`);

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let element;

rl.question('Enter Element you want to search: ', element => {
    const position = linearSearch(array, element);

    checkPosition(position);

    rl.close();
});

const checkPosition = position => {
    if(position !== null) {
        console.log(`Element ${element} found at position: ${position}`);
    }
    else {
        console.log(`Element ${element} not found in the array.`);
    }
}