import  getFilteredArrayTs  from "./getFilteredArray.js";
import printTableTs from "./printTable.js";

const array = [41, 55, 61, 1, 8, 27, 37, 39];
console.log('Result:', getFilteredArrayTs(array));

console.log('');
console.log(printTableTs(15));

window.printTable = (num) => {
    console.log(printTableTs(num));
};

window.getFilteredArray = (arr) => {
    console.log(getFilteredArrayTs(arr));
};