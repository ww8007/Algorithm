function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        // 중복된 숫자 건너뛰기
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        let lp = i + 1;
        let rp = nums.length - 1;
        
        while (lp < rp) {
            const sum = nums[i] + nums[lp] + nums[rp];
            
            if (sum === 0) {
                ans.push([nums[i], nums[lp], nums[rp]])
                
                 // 중복된 숫자 건너뛰기
                while(lp < rp && nums[lp] === nums[lp+1]) lp++;
                while(lp < rp && nums[rp] === nums[rp-1]) rp--;
            
                lp++;
                rp--;
            } else if (sum > 0) {
                rp--
            } else {
                lp++;
            }
        }
    }
    
    return ans;
};