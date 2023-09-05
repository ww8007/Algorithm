function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[][] = [];
    const ans: number[] = new Array(temperatures.length).fill(0);
    
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        
        if (stack.length) {
            ans[i] = stack[stack.length - 1][1] - i;
        }
        
        stack.push([temperatures[i], i]);
    }
    
    return ans;
};
