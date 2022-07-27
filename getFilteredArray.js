"use strict";
var getFilteredArrayTs = function (array, step) {
    if (step === void 0) { step = 1; }
    var copyArray = array.sort(function (a, b) { return a - b; });
    var resultArray = getFilteredResultArray(copyArray);
    console.log("step ".concat(step, ":"), resultArray.join(', '));
    if (resultArray.length == 0
        || resultArray.length == 1
        || resultArray.length == array.length) {
        return resultArray;
    }
    else {
        resultArray = resultArray.map(function (item) { return Math.pow(getReverseNum(item), 2); });
        return (0, getFilteredArrayTs)(resultArray, step + 1);
    }
};
function getFilteredResultArray(copyArray) {
    var resultArray = [];
    function compareNum(a, b) {
        var strA = String(a);
        var strB = "[".concat(String(b), "]");
        var regexp = new RegExp(strB);
        var matchesArray = strA.match(regexp);
        return matchesArray === null ? true : false;
    }
    var _loop_1 = function () {
        var currentItem = copyArray[0];
        var copyCurrentArray = copyArray.slice(1);
        var filteredArray = copyCurrentArray.filter(function (item) {
            if (compareNum(currentItem, item)) {
                return item;
            }
        });
        if (filteredArray.length == copyCurrentArray.length) {
            resultArray.push(currentItem);
        }
        copyArray = filteredArray;
    };
    do {
        _loop_1();
    } while (copyArray.length > 1);
    if (copyArray.length > 0) {
        resultArray.push(copyArray[0]);
    }
    return resultArray;
}
function getReverseNum(num) {
    var numString = String(num)
        .split('')
        .reverse()
        .join('');
    return Number(numString);
}


export default getFilteredArrayTs;