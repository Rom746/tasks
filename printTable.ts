export const printTableTs_ = (n: number) => {
    let result = addPadding(n, 2, 2, 2);
    let rowPadding: boolean = false;

    function addPadding(n: number, i: number, j: number, value = 1, str = ' ') {
        let padding = '';
        let lengthLast = (n * (j - 1) + '').length;
        let lengthCurrent = ((i - 1) * (j - 1) + '').length;
        let length = lengthLast - lengthCurrent + value;
        while (length-- > 0)
            padding += str;
        return padding;
    }

    for (let i = 0; i < n + 2; i++) {
        for (let j = 0; j < n + 2; j++) {
            if (i == 0 && j > 1) {
                result += addPadding(n, 2, j) + (j - 1);
            }
            else if (i == 1 && j > 1) {
                if (!rowPadding) {
                    result += addPadding(n, 2, 2, 2);
                    rowPadding = true;
                }
                result += addPadding(n, i, j, 2, '-');
            }
            else if (j == 1 && i > 1) {
                let padding = addPadding(n, i, 2, 0);
                result += padding + (i - 1) + '|';
            }
            else if (i > 1 && j > 1) {
                let padding = j == 2 ?
                    addPadding(n, i, j, 0)
                    : addPadding(n, i, j);
                result += padding + ((i - 1) * (j - 1));
            }
        }
        result += '\n';
    }
    return result;
}