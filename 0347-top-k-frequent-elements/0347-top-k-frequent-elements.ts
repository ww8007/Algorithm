function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    
    nums.forEach((num) => {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num , 1)
    });
    
    const ans = [...map];
    
    ans.sort((a, b) => b[1] - a[1]);
    
    return ans.map(([k, v]) => k).slice(0, k);
};