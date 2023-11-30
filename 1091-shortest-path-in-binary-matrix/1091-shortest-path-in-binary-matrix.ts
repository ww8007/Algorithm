function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length;
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
        return -1;
    }

    const dirs = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
    const queue: [number, number, number][] = [[0, 0, 1]];

    while (queue.length > 0) {
        const [row, col, pathLength] = queue.shift()!;
        if (row === n - 1 && col === n - 1) {
            return pathLength;
        }

        for (const [x, y] of dirs) {
            const newRow = row + x;
            const newCol = col + y;
            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] === 0) {
                grid[newRow][newCol] = 1;
                queue.push([newRow, newCol, pathLength + 1]);
            }
        }
    }

    return -1;
}
