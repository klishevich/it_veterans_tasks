// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

const VOWELS_CNT = 5;

function isVowelChar(c: string) {
    return ["a", "e", "i", "o", "u"].includes(c);
}

export class StringInfo {
    str: string = "";
    meta: {
        a: number;
        e: number;
        i: number;
        o: number;
        u: number;
    } = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };

    constructor(str: string) {
        for (let c of str) {
            if (c === "a") {
                this.meta.a++;
            } else if (c === "e") {
                this.meta.e++;
            } else if (c === "i") {
                this.meta.i++;
            } else if (c === "o") {
                this.meta.o++;
            } else if (c === "u") {
                this.meta.u++;
            } else {
                throw new Error("string contains consonants");
            }
        }
        this.str = str;
    }

    isValid() {
        return !Object.keys(this.meta).some((key) => this.meta[key] <= 0);
    }
}

export function getVowelSubstrings(str: string): StringInfo[] {
    const res: StringInfo[] = [];
    const resetStartValue = 100;
    let startVowelIndex: number = resetStartValue;
    let prevChar: string = "";
    const pushVowelStringToRes = (startIndex: number, endIndex: number) => {
        const vowelStringLength = endIndex - startIndex;
        if (vowelStringLength >= VOWELS_CNT) {
            const subStr = str.substring(startIndex, endIndex);
            const stringInfo = new StringInfo(subStr);
            if (stringInfo.isValid()) {
                res.push(stringInfo);
            }
        }
    };
    for (let i = 0; i < str.length; i++) {
        const curChar = str[i];
        if (!isVowelChar(prevChar) && isVowelChar(curChar)) {
            startVowelIndex = i;
        } else if (isVowelChar(prevChar) && !isVowelChar(curChar)) {
            pushVowelStringToRes(startVowelIndex, i);
            startVowelIndex = resetStartValue;
        }
        prevChar = curChar;
    }
    if (startVowelIndex !== resetStartValue) {
        pushVowelStringToRes(startVowelIndex, str.length);
    }
    return res;
}

// export function countValidSubstrings

export function countVowels(str: string) {
    let res = 0;
    const vowelStrings: StringInfo[] = getVowelSubstrings(str);
    for (let stringInfo of vowelStrings) {
        const length = stringInfo.str.length;
        for (let start=0;start<length-VOWELS_CNT;start++) {
            for (let end=length; end >= start + VOWELS_CNT; end--) {
                const subStr = stringInfo.str.substring(start, end);
                const subStrInfo = new StringInfo(subStr);
                if (subStrInfo.isValid()) {
                    res++;
                } else {
                    break;
                }
            }
        }
    }

    return res;
}
