import  getFilteredArrayTs  from "./getFilteredArray.js";
import printTableTs from "./printTable.js";

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


const staelBalls = (store, amountBallsBag) => {
    const sumBalls = store.reduce((sum, cur) => sum + cur, 0);
    const percentStore = store.map(item => item * 100 / sumBalls )

    const result = store.map((item, index) => {
        const countBalls = Math.floor(amountBallsBag * percentStore[index] / 100);
        return item > countBalls ? countBalls : item;
    })

    console.log(result);
}


staelBalls([100, 300, 200], 120);
staelBalls([10, 30, 20], 150);