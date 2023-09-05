function removeDuplicates(s: string, k: number): string {
    const stack = new Stack(k);
    
    for (const word of s) {
        stack.push(word);
    }
    
    return stack.getStack().join('');
};

class Stack {
    private arr: string[];
    private countArr: number[];
    private k: number;

    constructor(k: number) {
        this.arr = [];
        this.countArr = [];
        this.k = k;
    }

    push(val: string): void {
        if (!this.isEmpty()) {
            if (this.top() === val) {
                if (this.topCount() === this.k - 1) {
                    let count = this.popCount();
                    while (count--) {
                        this.pop();
                    }
                    return;
                } else {
                    const num = this.popCount();
                    this.pushCount(num + 1);
                } 
            } else {
                this.pushCount(1);
            }
        } else {
            this.pushCount(1);    
        }
        this.arr.push(val);
    }
    
    pushCount(num: number) {
        this.countArr.push(num);
    }
    
    pop(): string {
        return this.arr.pop();
    }
    
    popCount(): number {
        return this.countArr.pop();
    }
    
    top(): string {
        return this.arr[this.arr.length - 1];
    }

    topCount(): number{
        return this.countArr[this.countArr.length - 1];
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    getStack(): string[] {
        return this.arr;
    }
}