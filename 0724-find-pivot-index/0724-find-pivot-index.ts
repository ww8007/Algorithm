function pivotIndex(nums: number[]): number {
    let rSum = nums.reduce(add);
    let lSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        lSum += i > 0 ? nums[i - 1] : 0;
        rSum -= nums[i];
        
        if (rSum === lSum) return i;
    }
    
    return -1;
};

const add = (a: number, b: number) => a + b;