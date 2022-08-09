import getFilteredArrayTs from "./getFilteredArray.js";
import printTableTs from "./printTable.js";
import { staelBalls } from "./staelBalls.js";

const array = [41, 55, 61, 1, 8, 27, 37, 39];
console.log('Result:', getFilteredArrayTs(array).join(', '));

console.log('');
console.log(printTableTs(15));

window.printTable = (num) => {
    console.log(printTableTs(num));
};

window.getFilteredArray = (arr) => {
    console.log(getFilteredArrayTs(arr).join(', '));
};


// staelBalls([100, 300, 200], 120);
// staelBalls([10, 30, 20], 150);
// staelBalls([10, 30, 20], 10);
// staelBalls([1, 1, 1], 1);
// staelBalls([2, 1, 2], 2);
// staelBalls([1, 3, 1], 4);
staelBalls([0, 0, 0], 4);


window.getStaelBalls = (store, count) => {
    staelBalls(store, count);
};