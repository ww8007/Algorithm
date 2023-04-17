function longestCommonPrefix(strs: string[]): string {
    for (let i = 0; i < strs[0].length; i++) {
        for (const str of strs) {
            if (str[i] !== strs[0][i]) return str.slice(0, i);
        }
    }
    
    return strs[0];
};