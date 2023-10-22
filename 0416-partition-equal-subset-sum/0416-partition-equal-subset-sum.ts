function canPartition(nums: number[]): boolean {
    const len = nums.length;
    const total = nums.reduce(sum, 0);
    
    if (total % 2) return false;
    
    const amountDivde2 = total / 2;
    
    let arr = Array.from(Array(len + 1), () => Array(amountDivde2 + 1).fill(false));
    
    for (let i = 0; i < len + 1; i++) {
        arr[i][0] = true;
    }
    
    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < amountDivde2 + 1; j++) {
            if (j - nums[i - 1] >= 0) {
                arr[i][j] = arr[i - 1][j] || arr[i - 1][j - nums[i - 1]];
            } else {
                arr[i][j] = arr[i - 1][j];
            }
        }
    }
    
    return arr[len][amountDivde2];
};

const sum = (a: number, b: number) => a + b;