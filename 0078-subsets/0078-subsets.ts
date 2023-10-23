function subsets(nums: number[]): number[][] {
    const ans: number[][] = [];
    
    const backtrack = (level: number, res: number[]) => {
        if (level === nums.length) {
            ans.push([...res]);
            return;
        }
        
        const cur = nums[level];
        
        res.push(cur);
        backtrack(level + 1, res);
        
        res.pop();
        backtrack(level + 1, res);
    }
    
    backtrack(0, []);
    
    return ans;
};
