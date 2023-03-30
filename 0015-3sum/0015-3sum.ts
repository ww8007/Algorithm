function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const len = nums.length - 1;
    const result = [];

    for (let i = 0; i < len - 1; i++) {
        // 중복된 숫자는 건너뛴다
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let lp = i + 1;
        let rp = len;

        while (lp < rp) {
            const sum = nums[i] + nums[lp] + nums[rp];

            if (sum === 0) {
                result.push([nums[i], nums[lp], nums[rp]]);

                // 중복된 숫자는 건너뛴다
                while (lp < rp && nums[lp] === nums[lp + 1]) lp++;
                while (lp < rp && nums[rp] === nums[rp - 1]) rp--;

                lp++;
                rp--;
            } else if (sum < 0) {
                lp++;
            } else {
                rp--;
            }
        }
    }

    return result;
}


