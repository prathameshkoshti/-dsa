import bubbleSort from './sort/bubbleSort';

console.log('bubbleSort imported');

const array = [-2, -40, 20, 0, 23];

console.log(`Array before sort: ${array}`);

const sortedArray = bubbleSort(array);
console.log(`Array after sort: ${sortedArray}`);