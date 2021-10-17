type TFn = (callIfWin: any, callIfLose: any) => void;

export class Lottery {
    // It can be changed
    constructor(fn: TFn) {
        // this.callIfWin = this.callIfWin.bind(this);
        // this.callIfLose = this.callIfLose.bind(this);
        fn(this.callIfWin, this.callIfLose);
    }

    // You can add new methods

    protected callIfWin() {
        // some standard logic when the lottery wins
        // do not change it
        console.log("win");
    }

    protected callIfLose() {
        // some standard logic when the lottery lose
        // do not change is;
        console.log("lose");
    }
}
