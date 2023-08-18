/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let idx0 = 0;
    let idx2 = nums.length - 1;
    let i = 0;
    
    while (i <= idx2) {
        if (nums[i] === 0) {
            [nums[i], nums[idx0]] = [nums[idx0], nums[i]];
            idx0++;
            i++;
        }
        else if (nums[i] === 2) {
            [nums[i], nums[idx2]] = [nums[idx2], nums[i]];
            idx2--;
            // 2 포인터는 0, 1, 2 어느 숫자도 가능하기 때문에 정렬이 되었다고 볼 수 없음ㅁ
        }
        else {
            i++;
        }
    }
};