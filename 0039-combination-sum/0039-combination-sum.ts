function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    
    const BT = (sum: number, startIndex: number, res: number[]) => {
        // 1. 종료 조건
        if (sum > target) return;
        if (sum === target) {
            ans.push([...res]);
            return;
        }

        // 2. 진행
        for (let i = startIndex; i < candidates.length; i++) {
            const num = candidates[i];
            res.push(num);
            BT(sum + num, i, res);
            res.pop();
        }
    }
    
    BT(0, 0, []);
    
    return ans;
};
