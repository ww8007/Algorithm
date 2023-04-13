function minRemoveToMakeValid(s: string): string {
    const stack: number[] = [];
    const chars = s.split('');
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length && chars[stack[stack.length - 1]] === '(') {
                stack.pop();
            } else {
                chars[i] = '';
            }
        }
    }
    while (stack.length) {
        const index = stack.pop();
        chars[index] = '';
    }
    return chars.join('');
}