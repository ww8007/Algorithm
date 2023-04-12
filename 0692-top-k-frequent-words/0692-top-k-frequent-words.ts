function topKFrequent(words: string[], k: number): string[] {
    const map = new Map();
    words.forEach((item) => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    });
    
    let arr = [...map];
    
    arr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]); 
    }
        return b[1] - a[1];
    }).slice(0, k);
    
    return arr.map(([k, v]) => k);
};