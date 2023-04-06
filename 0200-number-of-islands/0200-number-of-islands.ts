function numIslands(grid: string[][]): number {
	let answer = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				answer++;
				dfs(grid, i, j);
			}
		}
	}

	return answer;
};

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (grid: string[][], x: number, y: number) => {
    grid[x][y] = "0";
    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === "1") {
            dfs(grid, nx, ny);
        }
    }
}