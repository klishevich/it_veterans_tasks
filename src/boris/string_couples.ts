export function main(str: string): [char: string, repeats: number] {
    let longestAlphabeticCouplesValue = 0;
    let longestAlphabeticCouplesSubstringIndex = -1;
    const substrings = str.split(" ");
    for (const [index, substr] of substrings.entries()) {
        const alphabeticCouples = calcAlphabeticCouples(substr);
        if (alphabeticCouples >= longestAlphabeticCouplesValue) {
            longestAlphabeticCouplesValue = alphabeticCouples;
            longestAlphabeticCouplesSubstringIndex = index;
        }
    }
    const mostRareChar = findMostRareLetter(substrings[longestAlphabeticCouplesSubstringIndex])
    const repetitionsOfTheChar = calcCharRepetitions(str, mostRareChar)
    return [mostRareChar, repetitionsOfTheChar];
}

export function calcAlphabeticCouples(str: string): number {
    if (str.length <= 1) return 0;
    let cnt = 0;
    for (let i = 0; i < str.length - 1; i++) {
        const charCodeCurrent = str[i].charCodeAt(0);
        const charCodeNext = str[i + 1].charCodeAt(0);
        if (charCodeCurrent + 1 === charCodeNext) cnt++;
    }
    return cnt;
}

/**
 * Returns one char with minimal char code
 * @param str
 */
export function findMostRareLetter(str: string): string {
    const letterRepetitionMap = new Map<string, number>();
    for (const char of str) {
        const currentRepetition = letterRepetitionMap.get(char);
        letterRepetitionMap.set(char, currentRepetition === undefined ? 1 : currentRepetition + 1);
    }
    let minRepetitionValue = Number.MAX_VALUE;
    for (const value of letterRepetitionMap.values()) {
        if (value < minRepetitionValue) minRepetitionValue = value;
    }
    let minCharCode = "Z".charCodeAt(0) + 1;
    for (const [key, value] of letterRepetitionMap.entries()) {
        const charCode = key.charCodeAt(0);
        if (value === minRepetitionValue && charCode < minCharCode) minCharCode = charCode;
    }
    return String.fromCharCode(minCharCode);
}

export function calcCharRepetitions(str: string, char: string): number {
    let cnt = 0;
    for (const c of str) {
        if (c === char) cnt++;
    }
    return cnt;
}
