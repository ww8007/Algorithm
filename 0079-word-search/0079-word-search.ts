function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (r: number, c: number, index: number): boolean => {
        if (index === word.length) return true;
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || board[r][c] !== word[index]) return false;

        visited[r][c] = true;

        for (const [dx, dy] of directions) {
            const newRow = r + dx;
            const newCol = c + dy;
            if (dfs(newRow, newCol, index + 1)) return true;
        }

        visited[r][c] = false;
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}
