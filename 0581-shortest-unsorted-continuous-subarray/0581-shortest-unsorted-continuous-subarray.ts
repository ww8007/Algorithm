function findUnsortedSubarray(nums: number[]): number {
    let leftIdx = -1;
    let rightIdx = -2;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[nums.length - 1 - i]);

        if (nums[i] < max) {
            rightIdx = i;
        }
        if (nums[nums.length - 1 - i] > min) {
            leftIdx = nums.length - 1 - i;
        }
    }

    return rightIdx - leftIdx + 1;
}
