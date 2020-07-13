import binarySearch from './search/binarySearch';
import readline from 'readline';
import { stdin, stdout } from 'process';
import checkPosition from './utilities/checkPosition';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Binary search imported.');

rl.question('Enter the element to be searched: ', element => {
    const position = binarySearch(array, element, 0, array.length - 1);

    checkPosition(position, element);

    rl.close();
});