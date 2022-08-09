import getFilteredArrayTs from "./getFilteredArray.js";
import printTableTs from "./printTable.js";
import { stealBalls } from "./stealBalls.js";

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


stealBalls([100, 300, 200], 120);
stealBalls([10, 30, 20], 150);
stealBalls([10, 30, 20], 10);
stealBalls([1, 1, 1], 1);
stealBalls([2, 1, 2], 2);
stealBalls([1, 3, 1], 4);
stealBalls([10, 0, 2], 4);
stealBalls([0, 0, 0], 4);


window.getStealBalls = (store, count) => {
    stealBalls(store, count);
};