
function sudoku(input) {
    const testNums = [1,2,3,4,5,6,7,8,9];
    const solvedNums = [];
    // replace 0's, solved arrays, push solved nums
    input.forEach(row => {
        row.forEach((num,i) => {
            if (num == 0) { 
                row[i] = testNums 
            }
            if (num.length == 1) {
                row[i] = num[0];
            }
            if (!row[i].length) {
                solvedNums.push(num)
            }
        })
    })
    // return if all boxes are solved
    if (solvedNums.length == 81) {
        return input;
    }
    // filter test arrays by row
    input.forEach(row => {
        row.forEach((num,i) => {
            if (num.length) { row[i] = num.filter(x => !row.includes(x)) }
        })
    })
    // filter test arrays by column
    let columns = [[],[],[],[],[],[],[],[],[]];
    input.forEach(row => row.forEach((num,i) => columns[i].push(num)));
    columns.forEach((col,i) => {
        col.forEach((num,j) => {
            if (num.length) {
                input[j][i] = num.filter(x => !col.includes(x));
            }
        })
    })
    // make blocks
    let blocks = [[],[],[],[],[],[],[],[],[]];
    input.forEach((row,i) => {
        row.forEach((n,j) => {
            if (i < 3) {
                j < 3 ? blocks[0].push(n) : j < 6 ? blocks[1].push(n) : blocks[2].push(n);
            }
            else if (i < 6) {
                j < 3 ? blocks[3].push(n) : j < 6 ? blocks[4].push(n) :  blocks[5].push(n); 
            }
            else {
                j < 3 ? blocks[6].push(n) : j < 6 ? blocks[7].push(n) : blocks[8].push(n);
            }
        })
    })
    // filter test arrays by blocks
    blocks.forEach(block => {
        block.forEach((num,i) => {
            if (num.length) {
                block[i] = num.filter(x => !block.includes(x));
            }
        })
    })
    // put blocks back into board
    let newBoard = [[],[],[],[],[],[],[],[],[]]
    blocks.forEach((block,i) => {
        block.forEach((n,j) => {
            if (i == 0 || i == 3 || i == 6) {
                j < 3 ? newBoard[i].push(n) : j < 6 ? newBoard[i + 1].push(n) : newBoard[i + 2].push(n);
            }
            if (i == 1 || i == 4 || i == 7) {
                j < 3 ? newBoard[i - 1].push(n) : j < 6 ? newBoard[i].push(n) : newBoard[i + 1].push(n);
            }
            if (i == 2 || i == 5 || i == 8) {
                j < 3 ? newBoard[i - 2].push(n) : j < 6 ? newBoard[i - 1].push(n) : newBoard[i].push(n);
            }
        })
    })
    // recursive call
    return sudoku(newBoard);
}

var puzzle = [
     [5,3,0,0,7,0,0,0,0],
     [6,0,0,1,9,5,0,0,0],
     [0,9,8,0,0,0,0,6,0],
     [8,0,0,0,6,0,0,0,3],
     [4,0,0,8,0,3,0,0,1],
     [7,0,0,0,2,0,0,0,6],
     [0,6,0,0,0,0,2,8,0],
     [0,0,0,4,1,9,0,0,5],
     [0,0,0,0,8,0,0,7,9]
];

console.log(sudoku(puzzle));