function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])

    let ans = [intervals[0]];
    let cur = ans[0];
    
    for (let i = 1; i < intervals.length; i++) {
        const [min, max] = intervals[i];
        if (cur[1] >= min) {
            cur[1] = Math.max(cur[1], max);
        } else {
            cur = [min, max];
            ans.push(cur);
        }
        
    }

    return ans;
}
