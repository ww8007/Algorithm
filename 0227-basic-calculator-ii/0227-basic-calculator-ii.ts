function calculate(s: string): number {
    const stack: number[] = [];
    const operators = ['+', '-', '*', '/'];
    let operator = '+';
    let num = '';

    for (let i = 0; i <= s.length; i++) {
        if (s[i] && s[i].match(/\d/)) {
            num += s[i];
        } else if (!s[i] || operators.includes(s[i])) {
            if (operator === '+' || operator === '-') {
                stack.push(operator === '+' ? Number(num) : -Number(num));
            } else if (operator === '*' || operator === '/') {
                const prevNum = stack.pop();
                const result = operation(operator, prevNum, Number(num));
                stack.push(result);
            }
            num = '';
            operator = s[i];
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0);
}

const operation = (operator: string, first: number, second: number) => {
    if (operator === '+') return first + second;
    else if (operator === '-') return first - second;
    else if (operator === '*') return first * second;
    else return Math.trunc(first / second);
}
