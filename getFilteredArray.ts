export const getFilteredArray_ = (array: number[], step: number = 1): number[] => {
    let copyArray = array.sort((a: number, b: number) => a - b);
    let resultArray: number[] = getFilteredResultArray(copyArray);
    console.log(`step ${step}:`, resultArray);
    if (resultArray.length == 0
        || resultArray.length == 1
        || resultArray.length == array.length
    ) {
        return resultArray;
    } else {
        resultArray = resultArray.map(item => getReverseNum(item) ** 2);
        return getFilteredArray_(resultArray, step + 1);
    }
};

function getFilteredResultArray(copyArray: number[]): number[] {
    let resultArray: number[] = [];

    function compareNum(a: number, b: number) {
        let strA = String(a);
        let strB = `[${String(b)}]`;
        let regexp = new RegExp(strB);
        let matchesArray = strA.match(regexp);
        return matchesArray === null ? true : false;
    }

    do {
        let currentItem = copyArray[0];
        let copyCurrentArray = copyArray.slice(1);

        let filteredArray = copyCurrentArray.filter(item => {
            if (compareNum(currentItem, item)) {
                return item;
            }
        });

        if (filteredArray.length == copyCurrentArray.length) {
            resultArray.push(currentItem);
        }
        
        copyArray = filteredArray;

    } while (copyArray.length > 1);

    if (copyArray.length > 0) {
        resultArray.push(copyArray[0]);
    }
    return resultArray;
}

function getReverseNum(num: number): number {
    let numString = String(num)
        .split('')
        .reverse()
        .join('');
    return Number(numString);
}