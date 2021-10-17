import { Lottery } from "./revealing_constructor";

describe("Tests", () => {
    test("test 1", async () => {
        const myLottery = new Lottery((callIfWin, callIfLose) => {
            const isWin = Math.random() < 0.4;
            const fn = isWin ? callIfWin : callIfLose;
            // fn();
            setTimeout(fn, 1);
        });

        const a = await new Promise((resolve => {
            setTimeout(resolve, 100);
        }))
    });
});
