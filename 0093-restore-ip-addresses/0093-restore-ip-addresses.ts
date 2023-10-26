function restoreIpAddresses(s: string): string[] {
    const ans: string[] = [];
    
    const BT = (len: number, cur: string, res: string[]) => {
        // 1. 종료 조건
        if (len === 4) {
            cur.length === 0 && ans.push(res.join('.'));
            return;
        }
        
        // 2. 진행
        const digit: number[] = [];
        
        for (let i = 0; i < 3 && i < cur.length; i++) {
            const str = cur.substring(0, i + 1);
            
            if ((str.length > 1 && str[0] === '0') || Number(str) > 255) continue;
        
            res.push(str);
            BT(len + 1, cur.substring(i + 1), res);
            res.pop();
        }
    }
    
    BT(0, s, []);
        
    return ans;
};