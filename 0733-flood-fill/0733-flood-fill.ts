function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const prevColor = image[sr][sc];
    if (prevColor === color) return image;
    dfs(image, sr, sc, color, prevColor);
    return image;
};

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (image: number[][], i: number, j: number, color: number, prevColor: number) => {
    if (image[i][j] === prevColor) {
        image[i][j] = color;
        for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];
            if (nx >= 0 && nx < image.length && ny >= 0 && ny < image[0].length) {
                dfs(image, nx, ny, color, prevColor);
            }
        }
    }
};