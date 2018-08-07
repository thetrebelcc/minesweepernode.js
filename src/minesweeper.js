// const blankLine = '  |   |  ';

// console.log('This is what an empty board would look like:');
// console.log(blankLine);
// console.log(blankLine);
// console.log(blankLine);



// const guessLine = '1 |   |  ';
// const bombLine = '  | B |  ';


// console.log('this is what a live board would be');
// console.log(guessLine);
// console.log(bombLine);
// console.log(blankLine);



const exampleBoard = [

    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];


const printBoard = (board) => {
console.log('current game');
console.log(board[0].join(' | '));
console.log(board[1].join(' | '));
console.log(board[2].join(' | '));


};

printBoard(exampleBoard);
exampleBoard[0][1] ="1"
exampleBoard[1][0] ="B"
printBoard(exampleBoard);