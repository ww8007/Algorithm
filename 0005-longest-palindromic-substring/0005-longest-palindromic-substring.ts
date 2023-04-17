function longestPalindrome(s: string): string {
    let longStr = '';
    
    for (let i = 0; i < s.length; i++) {
        const odd = findPalindrome(s, i, i);
        const even = findPalindrome(s, i, i + 1);
        
        if (odd.length > longStr.length) longStr = odd;
        if (even.length > longStr.length) longStr = even;
    }
    
    return longStr;
};

const findPalindrome = (s: string, lp: number, rp: number) => {
    while(lp >= 0 && rp < s.length) {
        if (s[lp] !== s[rp]) break;
        lp--;
        rp++;
    }
    return s.slice(lp + 1, rp);
}
