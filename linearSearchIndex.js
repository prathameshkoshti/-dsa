import linearSearch from './search/linearSearch';
import readline from 'readline';
import { stdin, stdout } from 'process';
import checkPosition from './utilities/checkPosition';

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

    checkPosition(position, element);

    rl.close();
});