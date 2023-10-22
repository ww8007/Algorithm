function change(amount: number, coins: number[]): number {
    const len = coins.length;
    
    const arr = Array.from(Array(len + 1), () => Array(amount + 1).fill(0));
    
    for (let i = 0; i < len + 1; i++) {
        arr[i][0] = 1;
    } 
    
    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < amount + 1; j++) {
            if (j - coins[i - 1] >= 0) {
                arr[i][j] = arr[i-1][j] + arr[i][j - coins[i - 1]];
            } else {
                arr[i][j] = arr[i-1][j];
            }
        }
    }
    
    return arr[len][amount];
};