function findDuplicate(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const cur = Math.abs(nums[i]);
        
        if (nums[cur] > 0) nums[cur] = Math.abs(nums[cur]) * -1;
        else return cur;
     }
};