export const stealBalls = (store, amountBallsBag) => {
    const sumBalls = store.reduce((sum, cur) => sum + cur, 0);

    if (sumBalls == 0) {
        printLog(store); 
        return;
    }

    const percentStore = store.map((item, index) => [Math.abs(item) * 100 / sumBalls, index]);
    const sorted = percentStore.sort((a, b) => b[0] - a[0]);
    let tmpSum = 0;

    const resultBag = sorted.map((item, i) => {
        const [percent, index] = item;
        const countBalls = Math.round(amountBallsBag * percent / 100);
        console.log(countBalls);
    
        let resultCount;

        if (store[index] < countBalls) {
            resultCount = store[index];
        }

        else if (countBalls + tmpSum > amountBallsBag || i == sorted.length - 1) {
            resultCount = amountBallsBag - tmpSum;
        }

        else if (countBalls == 0) {
            resultCount = percent == 0 ? 0 : amountBallsBag - tmpSum;
        }

        else if (percent == sorted[i + 1][0] && countBalls * 2 + tmpSum > amountBallsBag) {
            resultCount = Math.round(countBalls / 2);
        }

        else { 
            resultCount = countBalls;
        }

        tmpSum += resultCount;
        return [resultCount, index];

    }).sort((a, b) => a[1] - b[1]).map(item => item[0]);

    printLog(resultBag);

    function printLog(result) {
        console.log('');
        console.log('Склад :', store.join(', '));
        console.log('Вместимомть мешка :', amountBallsBag);
        console.log('Мешок :', result.join(', '));
    }
}