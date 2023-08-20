function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let lp = 0;
    let rp = m * n - 1;
    
    while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);
        const midValue = matrix[Math.floor(mid / n)][mid % n];
        
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            lp = mid + 1;
        } else {
            rp = mid - 1;
        }
    }
    
    return false;
}
