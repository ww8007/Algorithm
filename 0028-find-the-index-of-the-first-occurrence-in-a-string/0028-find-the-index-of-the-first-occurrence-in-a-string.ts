function strStr(haystack: string, needle: string): number {
    const set = new Set();
    set.add(needle);
    
    console.log(set);
    
    for(let i = 0; i < haystack.length; i++) {
        const parse = haystack.substring(i, i + needle.length);
        if (set.has(parse)) return i;
    }
    return -1;
};