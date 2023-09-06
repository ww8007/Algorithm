function isAnagram(s: string, t: string): boolean {
    const map = new Map();
    
    for (const word of s) {
        map.get(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
    }
    
    for (const word of t) {
        if (map.get(word)) {
            map.set(word, map.get(word) - 1);
        } else {
            return false;
        }
    }
    
    const find = [...map].find(([k, v]) => v !== 0);
    return find ? false : true;
};