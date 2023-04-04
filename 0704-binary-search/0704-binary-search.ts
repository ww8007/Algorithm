function search(nums: number[], target: number): number {
    let lp = 0;
    let rp = nums.length - 1;
    
    
    while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) lp = mid + 1;
        else rp = mid - 1;
    }
    
    return -1;
};