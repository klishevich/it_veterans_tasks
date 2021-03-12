const singleDigitMap = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
};

const twoDigitsMap = {
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fifteen',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteen',
};
const allTwoDigits = Object.keys(twoDigitsMap);

const tensMultMap = {
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety',
};
const allTensMult = Object.keys(tensMultMap);

const tensPowerMap = {
    hundred: 'Hundred',
    thousand: 'Thousand',
    million: 'Million',
    billion: 'Billion',
};

export function numberToWords(num: number): string {
    const res: string[] = [];
    const addResBlock = (blockStr: string) => {
        if (blockStr) {
            res.push(blockStr);
        }
    };
    const numStr = num.toString();
    const numStrLength = numStr.length;
    const blocksOfThree = Math.ceil(numStrLength / 3);
    for (let i = 0; i < blocksOfThree; i++) {
        const blockFromTheEnd = blocksOfThree - i;
        if (blockFromTheEnd === 1) {
            const numStr1 = numStr.slice(-3);
            addResBlock(printBlock(numStr1));
        } else if (blockFromTheEnd === 2) {
            const numStr2 = numStr.slice(-6, -3);
            addResBlock(printBlock(numStr2, tensPowerMap.thousand));
        } else if (blockFromTheEnd === 3) {
            const numStr3 = numStr.slice(-9, -6);
            addResBlock(printBlock(numStr3, tensPowerMap.million));
        } else if (blockFromTheEnd === 4) {
            const numStr4 = numStr.slice(-12, -9);
            addResBlock(printBlock(numStr4, tensPowerMap.billion));
        } else {
            throw new Error('TODO');
        }
    }
    return res.join(' ');
}

function printBlock(numberStr: string, additionalWord?: string): string {
    const res: string[] = [];
    const getRes = () => {
        if (additionalWord && res.length > 0) {
            res.push(additionalWord);
        }
        return res.join(' ');
    };

    const length = numberStr.length;

    if (length === 0) {
        throw new Error('Number length cannot be null');
    }

    if (length === 1) {
        res.push(singleDigitMap[numberStr]);
        return getRes();
    }

    const firstDigit = length === 3 ? numberStr.slice(0, 1) : '';
    if (firstDigit && firstDigit !== '0') {
        res.push(singleDigitMap[firstDigit]);
        res.push(tensPowerMap.hundred);
    }

    const lastTwoDigits = numberStr.slice(-2);
    const isTwoDigits = allTwoDigits.includes(lastTwoDigits);
    if (isTwoDigits) {
        res.push(twoDigitsMap[lastTwoDigits]);
        return getRes();
    } else {
        const isTensMult = allTensMult.includes(lastTwoDigits);
        if (isTensMult) {
            res.push(tensMultMap[lastTwoDigits]);
            return getRes();
        }
    }

    const secondDigit = length === 3 ? numberStr.slice(1, 2) : numberStr.slice(0, 1);
    if (secondDigit && secondDigit !== '0') {
        res.push(tensMultMap[secondDigit]);
    }

    const thirdDigit = length === 3 ? numberStr.slice(2, 3) : numberStr.slice(1, 2);
    if (thirdDigit && thirdDigit !== '0') {
        res.push(singleDigitMap[thirdDigit]);
    }

    return getRes();
}
