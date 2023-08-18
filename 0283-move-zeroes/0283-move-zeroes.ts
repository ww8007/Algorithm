/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let idx = 0;
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] !== 0) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            idx++;
        }
    }
};