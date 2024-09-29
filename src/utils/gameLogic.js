export function initializeGame() {
    const board = Array(4).fill().map(() => Array(4).fill(0));
    return addRandomTile(addRandomTile(board));
}

function addRandomTile(board) {
    const emptyTiles = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyTiles.push({ i, j });
            }
        }
    }
    if (emptyTiles.length > 0) {
        const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
    return board;
}

export function move(board, direction) {
    let newBoard = JSON.parse(JSON.stringify(board));
    let newScore = 0;
    let tileMoved = false;

    const moveRow = (row) => {
        let newRow = row.filter(tile => tile !== 0);
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                newScore += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }
        while (newRow.length < 4) {
            newRow.push(0);
        }
        return newRow;
    };

    const moveLeft = (board) => board.map(moveRow);
    const moveRight = (board) => board.map(row => moveRow([...row].reverse()).reverse());
    const moveUp = (board) => transpose(moveLeft(transpose(board)));
    const moveDown = (board) => transpose(moveRight(transpose(board)));

    const transpose = (matrix) => matrix[0].map((_, i) => matrix.map(row => row[i]));

    switch (direction) {
        case 'ArrowLeft':
            newBoard = moveLeft(newBoard);
            break;
        case 'ArrowRight':
            newBoard = moveRight(newBoard);
            break;
        case 'ArrowUp':
            newBoard = moveUp(newBoard);
            break;
        case 'ArrowDown':
            newBoard = moveDown(newBoard);
            break;
        default:
            return { newBoard, newScore, tileMoved: false };
    }

    tileMoved = JSON.stringify(board) !== JSON.stringify(newBoard);

    if (tileMoved) {
        newBoard = addRandomTile(newBoard);
    }

    return { newBoard, newScore, tileMoved };
}

export function checkForBombUnlock(board) {
    return board.some(row => row.some(tile => tile >= 128));
}

export function useBomb(board, row, col) {
    let newBoard = JSON.parse(JSON.stringify(board));
    let removedValue = 0;

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];

    removedValue += newBoard[row][col];
    newBoard[row][col] = 0;

    directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 4) {
            removedValue += newBoard[newRow][newCol];
            newBoard[newRow][newCol] = 0;
        }
    });

    return { newBoard, removedValue };
}

export function isGameOver(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) return false;
            if (i < 3 && board[i][j] === board[i + 1][j]) return false;
            if (j < 3 && board[i][j] === board[i][j + 1]) return false;
        }
    }
    return true;
}