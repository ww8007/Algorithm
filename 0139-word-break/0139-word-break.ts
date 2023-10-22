function wordBreak(s: string, wordDict: string[]): boolean {
    let arr = Array.from(Array(s.length + 1), () => false);
    
    arr[0] = true; // 첫 번째 인덱스는 도움용
   
    for (let i = 1; i < s.length + 1; i++) {
        wordDict.forEach((word) => {
            const idx = i - word.length;
            if (idx >= 0 && arr[idx]) {
                if (word === s.substring(idx, i)) {
                    arr[i] = true;
                }
            }
        });   
    }
    
    return arr[s.length];
}