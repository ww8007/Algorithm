function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            let lp = j + 1;
            let rp = nums.length - 1;
            
            while (lp < rp) {
                const sum = nums[i] + nums[j] + nums[lp] + nums[rp];
            
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[lp], nums[rp]]);
                
                    while (lp < rp && nums[lp] === nums[lp + 1]) lp++;
                    while (lp < rp && nums[rp] === nums[rp - 1]) rp--;
                    
                    lp++;
                    rp--;
                } else if (sum > target) rp--;
                else lp++;
            }
        }
    }
    
    return ans;
};