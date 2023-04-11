function findAnagrams(s: string, p: string): number[] {
    const map = new Map();
    for(let i = 0; i < p.length; i++) {
        if (map.has(p[i])) map.set(p[i], map.get(p[i]) + 1);
        else map.set(p[i], 1);
    }
    
    const ans = [];
    let lp = 0;
    let rp = 0;
    
    while(rp < s.length) {
        if (map.get(s[rp]) > 0) {
            map.set(s[rp], map.get(s[rp]) - 1);
            rp++;
            if (rp - lp === p.length) ans.push(lp);
        } else if (lp === rp) {
            lp++;
            rp++;
        } else {
            map.set(s[lp], map.get(s[lp]) + 1);
            lp++;
        }
    }
    return ans;
};