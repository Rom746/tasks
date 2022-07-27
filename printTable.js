"use strict";

var printTableTs = function (n) {
    var result = addPadding(n, 2, 2, 1);
    var rowPadding = false;
    function addPadding(n, i, j, value, str) {
        if (value === void 0) { value = 1; }
        if (str === void 0) { str = ' '; }
        var padding = '';
        var lengthLast = (n * (j - 1) + '').length;
        var lengthCurrent = ((i - 1) * (j - 1) + '').length;
        var length = lengthLast - lengthCurrent + value;
        while (length-- > 0)
            padding += str;
        return padding;
    }
    for (var i = 0; i < n + 2; i++) {
        for (var j = 0; j < n + 2; j++) {
            if (i == 0 && j > 1) {
                result += addPadding(n, 2, j) + (j - 1);
            }
            else if (i == 1 && j > 1) {
                if (!rowPadding) {
                    result += addPadding(n, 2, 2, 1);
                    rowPadding = true;
                }
                result += addPadding(n, i, j, 2, '-');
            }
            else if (j == 1 && i > 1) {
                var padding = addPadding(n, i, 2, 0);
                result += padding + (i - 1) + '|';
            }
            else if (i > 1 && j > 1) {
                var padding = j == 2 ?
                    addPadding(n, i, j, 0)
                    : addPadding(n, i, j);
                result += padding + ((i - 1) * (j - 1));
            }
        }
        result += '\n';
    }
    return result;
};

export default printTableTs;
