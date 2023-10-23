function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const map = new Map<string, string[]>();
    map.set('2', ['a', 'b', 'c']);
    map.set('3', ['d', 'e', 'f']);
    map.set('4', ['g', 'h', 'i']);
    map.set('5', ['j', 'k', 'l']);
    map.set('6', ['m', 'n', 'o']);
    map.set('7', ['p', 'q', 'r', 's']);
    map.set('8', ['t', 'u', 'v']);
    map.set('9', ['w', 'x', 'y', 'z']);

    const ans: string[] = [];

    const backtrack = (current: string, res: string) => {
        if (!res.length) {
            ans.push(current);
            return;
        }
        
        const digit = res[0];
        const words = map.get(digit);
        
        if (words) {
            words.forEach((word) => backtrack(current + word, res.substring(1)));
        }
    }

    backtrack('', digits);
    return ans;
}
