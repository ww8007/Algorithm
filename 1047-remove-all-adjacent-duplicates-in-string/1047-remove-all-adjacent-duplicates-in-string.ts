function removeDuplicates(s: string): string {
    
    const stack = new Stack();
    
    for (const word of s) {
        if (stack.isEmpty()) {
            stack.push(word);
            continue;
        }
        
        if (stack.top() === word) stack.pop();
        else stack.push(word);
    }
    
    return stack.getStack().join('');
};

class Stack {
    private arr: string[];

    constructor() {
        this.arr = [];
    }

    push(val: string): void {
        this.arr.push(val);
    }

    pop(): void {
        this.arr.pop();
    }
    
    top(): string {
        return this.arr[this.arr.length - 1];
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    getStack(): string[] {
        return this.arr;
    }
}