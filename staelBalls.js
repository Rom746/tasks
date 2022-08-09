export const staelBalls = (store, amountBallsBag) => {
    const sumBalls = store.reduce((sum, cur) => sum + cur, 0);

    if (sumBalls == 0) {
        printLog(store);
        return;
    }

    const percentStore = store.map((item, index) => [Math.abs(item) * 100 / sumBalls, index]);
    const sorted = percentStore.sort((a, b) => b[0] - a[0]);
    let tmpSum = 0;

    const resultBag = sorted.map(item => {
        const [percent, index] = item;
        const countBalls = Math.round(amountBallsBag * percent / 100);
        console.log(percent);
        let resultCount;

        if (store[index] < countBalls) {
            resultCount = store[index];
        }

        else if (countBalls + tmpSum > amountBallsBag) {
            resultCount = amountBallsBag - tmpSum;
        }

        else if (countBalls == 0) {
            console.log(32323);
            resultCount = percent == 0 ? 0 : amountBallsBag - tmpSum;
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