function permute(nums: number[]): number[][] {
    const ans: number[][] = [];
    
    const BT = (lv: number, res: number[]) => {
        // 1. 종료 조건
        if (lv === nums.length) {
            ans.push([...res]);
            return;
        }
        
        // 2. 진행
        const digit: number[] = [];
        for (const num of nums) {
            !res.includes(num) && digit.push(num);
        }
        
        // 3. 재귀탐색
        for (const num of digit) {
            res.push(num);
            BT(lv + 1, [...res]);
            res.pop();
        }
    }
    
    BT(0, []);
    
    return ans;
};