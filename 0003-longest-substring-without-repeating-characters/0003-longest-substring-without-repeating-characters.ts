function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let max = 0;
    let next = 0;
    
    for (let i = 0; i < s.length; i++) {
        while(set.has(s[i])) set.delete(s[next++]);    
        set.add(s[i]);
        max = Math.max(max, set.size);
    }
    
    return max;
};