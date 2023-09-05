class MinStack {
    private arr: number[];
    private minArr: number[];
    constructor() {
        this.arr = [];
        this.minArr = [];
    }

    push(val: number): void {
        this.arr.push(val);
        if (!this.minArr.length) {
            this.minArr.push(val);
            return;
        }
        if (this.minArr[this.minArr.length - 1] >= val) {
            this.minArr.push(val);
        }
    }

    pop(): void {
        const num = this.arr.pop();
        if (this.minArr[this.minArr.length - 1] === num) {
            this.minArr.pop();
        }
    }

    top(): number {
        return this.arr[this.arr.length -1];
    }

    getMin(): number {
        return this.minArr[this.minArr.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */