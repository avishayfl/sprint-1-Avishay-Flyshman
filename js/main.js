'use strict'

const MINE = ' @ '
const FLAG = '^'
const EMPTY = 'H'

var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
};

var gLevel = {
    size: 4,
    mines: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}


function buildBoard() {
    var board = [];
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = []
        for (var j = 0; j < gLevel.size; j++) {
            var cell = {minesAroundCount: 0,isShown: false,isMine: false,isMarked: false}
            board[i][j] = cell

        }
    }
    board[0][1] = board[1][2] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false
    }
console.table (board)
     return board;
}

function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`;
        for (var j = 0; j < board[0].length; j++) {
            var cell = gBoard[i][j]
            var className =''
            if(cell.isMine) className='mine' ///todo fix the duble mark
            else if(!cell.isMine) className=''
            strHTML += `<td class =" cell ${className}" id=cell-${i}-${j} onclick="cellClick(${i},${j},this)">`
            strHTML += '</td>\n';
        }
        var elBoard = document.querySelector('.board');
        elBoard.innerHTML = strHTML;
    }
}

// maybe take to util?
function renderCell(location, value) {
      var elCell = document.getElementById(`cell-${location.i}-${location.j}`);
    //console.log(elCell, 'elCell');
    elCell.innerHTML = value;
}


function cellClick(i, j,) {

    var location = { i, j };
    var currCell = gBoard[i][j];
     if (currCell.isMine) {
        currCell.isShown = true;
        // dom
        renderCell(location, MINE)
    // gameOver() //END GAME FUNCTION

    // else/////....
       
    } 
}





