function maxProfit(prices: number[]): number {
    let ans = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i - 1]);
        ans = Math.max(ans, prices[i] - min);
    }
    
    return ans;
};