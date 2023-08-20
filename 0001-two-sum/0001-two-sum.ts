function twoSum(nums: number[], target: number): number[] {
    const sortedNums = [...nums]; 
    sortedNums.sort((a, b) => a - b); 
    
    let lp = 0;
    let rp = sortedNums.length - 1;
    
    while (lp < rp) {
        const sum = sortedNums[lp] + sortedNums[rp];
        
        if (sum < target) lp++;
        else if (sum > target) rp--;
        else {
            const index1 = nums.indexOf(sortedNums[lp]);
            const index2 = nums.lastIndexOf(sortedNums[rp]);
            return [index1, index2];
        }
    }
    
    return [];
}
