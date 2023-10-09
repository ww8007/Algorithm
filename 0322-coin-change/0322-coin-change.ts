function coinChange(coins: number[], amount: number): number {
    let arr = new Array(amount + 1).fill(amount + 1);
    
    arr[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                arr[i] = Math.min(arr[i], 1 + arr[i - coins[j]]);
            }
        }
    }
    
    return arr[amount] <= amount ? arr[amount] : -1;
};