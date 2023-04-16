function isPalindrome(x: number): boolean {
    let str = [];
    if (x < 0) return false;
    
    while(x) {
        str.push(x % 10);
        x = Math.floor(x / 10);
    }
    
    console.log(str);
    
    const reverse = str.slice().reverse();
    
    return str.join('') === reverse.join('');
};