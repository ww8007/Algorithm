function maxProduct(nums: number[]): number {
    const len = nums.length;
    
    let minDP = Array.from({ length : len }, () => 0);
    let maxDP = Array.from({ length : len }, () => 0);
    minDP[0] = nums[0];
    maxDP[0] = nums[0];
    
    for (let i = 1; i < len; i++) {
        const cur = nums[i];
        minDP[i] = Math.min(minDP[i - 1] * cur, maxDP[i - 1] * cur, cur);
        maxDP[i] = Math.max(minDP[i - 1] * cur, maxDP[i - 1] * cur, cur);
    }
    
    return maxDP.reduce((a, b) => Math.max(a, b), -Number.MAX_SAFE_INTEGER);
};