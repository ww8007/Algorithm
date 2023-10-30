function solveSudoku(board: string[][]): void {
    const [nRow, nCol] = findNextEmpty(board);
    if (nRow === 9 && nCol === 9) return;

    for (let i = 1; i <= 9; i++) {
        BT(board, nRow, nCol, String(i));
    }
};

const BT = (board: string[][], row: number, col: number, num: string) => {
    if (!checkRow(board, row, num)) return false;
    if (!checkCol(board, col, num)) return false;
    if (!checkSquare(board, row, col, num)) return false;

    board[row][col] = String(num);

    const [nRow, nCol] = findNextEmpty(board);

    if (nRow === 9 && nCol === 9) return true;

    for (let i = 1; i <= 9; i++) {
        if(BT(board, nRow, nCol, String(i))) return true;
    }

    board[row][col] = '.';
    return false;
}

const checkRow = (board: string[][], row: number, num: string) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
    }
    return true;
}

const checkCol = (board: string[][], col: number, num: string) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }
    return true;
}

const checkSquare = (board: string[][], row: number, col: number, num: string) => {
    const boxX = Math.floor(col / 3) * 3;
    const boxY = Math.floor(row / 3) * 3;
    
    for (let i = boxX; i < boxX + 3; i++) {
        for (let j = boxY; j < boxY + 3; j++) {
            if (board[j][i] === num) return false;
        }
    }
    return true;
}

const findNextEmpty = (board: string[][]) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === '.') return [j, i];
        }
    }
    return [9, 9];
}
