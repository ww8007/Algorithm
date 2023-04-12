function topKFrequent(words: string[], k: number): string[] {
    const map = new Map();
    words.forEach((item) => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    });
    
    let arr = [...map];
    
    arr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]); // 알파벳순으로 정렬
    }
        return b[1] - a[1]; // 빈도수를 기준으로 내림차순 정렬
    }).slice(0, k);
    
    return arr.map(([k, v]) => k);
};