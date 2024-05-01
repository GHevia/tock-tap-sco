let currentMove = 'rock';
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function setCurrentMove(move) {
    currentMove = move;
}
function makeMove(cell, row, col) {
    if (isValidMove(row, col)) {
        board[row][col] = currentMove;
        cell.textContent = currentMove.charAt(0).toUpperCase() + currentMove.slice(1);
        if (checkWin()) {
            alert(`${currentMove.charAt(0).toUpperCase() + currentMove.slice(1)} wins!`);
            resetBoard();
        }
    }
}
function isValidMove(row, col) {
    const cellContent = board[row][col];
    if (cellContent === null) {
        return true; // Cell is empty
    } else if ((cellContent === 'rock' && currentMove === 'paper') ||
               (cellContent === 'paper' && currentMove === 'scissors') ||
               (cellContent === 'scissors' && currentMove === 'rock')) {
        return true; // Current move beats the cell content
    }
    return false; // Move not allowed
}
function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null ||
            board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== null) {
            return true;
        }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null ||
        board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
        return true;
    }
    return false;
}
function resetBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = null;
            const cell = document.querySelector(`.row:nth-child(${i + 1}) .cell:nth-child(${j + 1})`);
            cell.textContent = '';
        }
    }
}
