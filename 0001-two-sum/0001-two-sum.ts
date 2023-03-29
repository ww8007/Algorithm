function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const left = target - nums[i];
        if (map.has(left)) return [map.get(left), i];
        map.set(nums[i], i);
    }
}
