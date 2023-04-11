function firstUniqChar(s: string): number {
    const map = new Map();
    
    for (const w of s) {
        map.has(w) ? map.set(w, 2) : map.set(w, 1);
    }
    
    const entry = [...map].find(([k, v]) => v === 1);
    if (!entry) return -1;
    const [w] = entry;
    return s.indexOf(w);
};