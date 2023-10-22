function countSubstrings(s: string): number {
    const len = s.length;

    let arr = Array.from(Array(len), () => Array(len).fill(false));
    let count = 0;

    for (let i = 0; i < len; i++) {
        arr[i][i] = true;
        count++;  
    }

    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            arr[i][i + 1] = true;
            count++;
        }
    }

    for (let length = 3; length <= len; length++) {
        for (let i = 0; i + length <= len; i++) {
            let j = i + length - 1;
            if (s[i] === s[j] && arr[i + 1][j - 1]) {
                arr[i][j] = true;
                count++;
            }
        }
    }

    return count;
}
