function search(nums: number[], target: number): number {
    let lt = 0;
    let rt = nums.length - 1;

    if (!nums.some((n) => n === target)) return -1;


    let ans:number = 0;
    while(lt <= rt) {
        const middle = Math.floor((lt + rt) / 2);
        if (nums[middle] === target) {
            ans = middle;
            break;
        }
        if (nums[middle] > target) {
            rt = middle - 1;
        }
        if (nums[middle] < target) {
            lt = middle + 1;
        }
    }
    return ans;
};