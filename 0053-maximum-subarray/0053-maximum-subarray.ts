function maxSubArray(nums: number[]): number {
    const len = nums.length;
    
    let dp = Array.from({ length : len }, () => 0);
    dp[0] = nums[0];
    
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }
    
    return dp.reduce((a, b) => Math.max(a, b), -Number.MAX_SAFE_INTEGER);
};