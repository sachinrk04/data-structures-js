const n = 8;

function isSafe(x, y, board) {
    // A utility function to check if i,j are valid indexes 
    // for N*N chessboard
    if(x >= 0 && y >= 0 && x < n && y < n && board[x][y] == -1)
        return true
    return false
}

function printSolution(n, board) {
    // A utility function to print Chessboard matrix
    for (let i in n) {
		for (let j in n) {
			console.log(board[i][j], end=' ')
        }
		console.log()
    }
};

// function solveKT(n) {
//     board = [[-1 for (let i in n)]for (let i in n)]
// }

solveKT(n)