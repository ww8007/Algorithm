function isValid(s: string): boolean {
    const stack = new Stack();
    
    const map = new Map();
    
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) stack.push(char);
        else {
            if (stack.isEmpty() || map.get(stack.pop()) !== char) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

class Stack {
    private arr: string[];
    constructor() {
        this.arr = [];
    }
    
    push(val: string) {
        this.arr.push(val);
    }
    
    pop() {
        return this.arr.pop();
    }
    
    top() {
        return this.arr[this.arr.length - 1];
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}