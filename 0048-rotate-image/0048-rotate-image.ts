/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    const mid = Math.floor(n / 2) + n % 2;

    const len = n - 1;

    for (let i = 0; i < mid; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[len - j][i];
            
            matrix[len - j][i] = matrix[len - i][len - j];
            matrix[len - i][len - j] = matrix[j][len - i];
            matrix[j][len - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};