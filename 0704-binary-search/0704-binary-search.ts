function search(nums: number[], target: number): number {
    let lp = 0;
    let rp = nums.length - 1;
    
    while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);
        const currentNum = nums[mid]
        if (currentNum < target) lp = mid + 1;
        else if (currentNum > target) rp = mid - 1;
        else return mid;
    }
    
    return -1;
};