export function initializeGame() {
    const board = Array(4).fill().map(() => Array(4).fill(0))
    return addRandomTile(addRandomTile(board))
}

function addRandomTile(board) {
    const emptyTiles = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyTiles.push({ i, j })
            }
        }
    }
    if (emptyTiles.length > 0) {
        const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
        board[i][j] = Math.random() < 0.9 ? 2 : 4
    }
    return board
}

export function move(board, direction) {
    let newBoard = JSON.parse(JSON.stringify(board))
    let newScore = 0

    const moveLeft = (row) => {
        let newRow = row.filter(tile => tile !== 0)
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2
                newScore += newRow[i]
                newRow.splice(i + 1, 1)
            }
        }
        while (newRow.length < 4) {
            newRow.push(0)
        }
        return newRow
    }

    const moveRight = (row) => {
        let newRow = row.filter(tile => tile !== 0)
        for (let i = newRow.length - 1; i > 0; i--) {
            if (newRow[i] === newRow[i - 1]) {
                newRow[i] *= 2
                newScore += newRow[i]
                newRow.splice(i - 1, 1)
                i--
            }
        }
        while (newRow.length < 4) {
            newRow.unshift(0)
        }
        return newRow
    }

    switch (direction) {
        case 'ArrowLeft':
            newBoard = newBoard.map(row => moveLeft(row))
            break
        case 'ArrowRight':
            newBoard = newBoard.map(row => moveRight(row))
            break
        case 'ArrowUp':
            for (let col = 0; col < 4; col++) {
                let column = newBoard.map(row => row[col])
                let newColumn = moveLeft(column)
                for (let row = 0; row < 4; row++) {
                    newBoard[row][col] = newColumn[row]
                }
            }
            break
        case 'ArrowDown':
            for (let col = 0; col < 4; col++) {
                let column = newBoard.map(row => row[col])
                let newColumn = moveRight(column)
                for (let row = 0; row < 4; row++) {
                    newBoard[row][col] = newColumn[row]
                }
            }
            break
    }

    if (JSON.stringify(board) !== JSON.stringify(newBoard)) {
        newBoard = addRandomTile(newBoard)
    }

    return { newBoard, newScore }
}

export function isGameOver(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) return false
            if (i < 3 && board[i][j] === board[i + 1][j]) return false
            if (j < 3 && board[i][j] === board[i][j + 1]) return false
        }
    }
    return true
}