function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    const counts = Array(26).fill(0);
    
    for (const str of strs) {
        for (let i = 0; i < 26; i++) {
            counts[i] = 0;
        }
        
        for (const char of str) {
            counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        const key = counts.map((count, idx) => count ? String.fromCharCode(97 + idx) + count : '').join('');

        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(str);
    }
    
    return [...map.values()];
};