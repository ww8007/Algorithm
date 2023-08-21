function strStr(haystack: string, needle: string): number {
    const set = new Set();
    set.add(needle);
    
    for (let i = 0; i < haystack.length; i++) {
        const slice = haystack.slice(i, i + needle.length);
        if (set.has(slice)) return i;
    }
    
    return -1;
};