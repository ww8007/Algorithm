function romanToInt(s: string): number {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    
    let ans = 0;
    let prev = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const cur = map.get(s[i]);
        if (cur < prev) ans -= cur; 
        else ans += cur;
        prev = cur;
    }
    
    return ans;
};
