function addStrings(num1: string, num2: string): string {
    const ans = [];
    let carry = 0;
    
    const bigLen = Math.max(num1.length, num2.length);
    
    for (let i = 0; i < bigLen; i++) {
        const val1 = Number(num1[num1.length - 1 - i] || 0);
        const val2 = Number(num2[num2.length - 1 - i] || 0);
        
        const sum = val1 + val2 + carry;
        
        ans.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    if (carry) ans.push(carry);
    
    return ans.reverse().join('');
}
