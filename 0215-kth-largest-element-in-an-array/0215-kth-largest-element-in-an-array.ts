function findKthLargest(nums: number[], k: number): number {
    const len = nums.length;
    if (len === 1) return nums[0];

    let pivot = nums[Math.floor(len / 2)];
    let left = [];
    let right = [];
    let pivots = [];

    for (let num of nums) {
        if (num > pivot) {
            right.push(num);
        } else if (num < pivot) {
            left.push(num);
        } else {
            pivots.push(num);
        }
    }

    if (right.length >= k) {
        return findKthLargest(right, k);
    } else if (right.length + pivots.length >= k) {
        return pivot;
    } else {
        return findKthLargest(left, k - right.length - pivots.length);
    }
}
