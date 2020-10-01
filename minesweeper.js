document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
board = Object
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: true,
    hidden: true,
    isMarked: false
  }, {
    row: 0,
    col: 1,
    isMine: false,
    hidden: true,
    isMarked: false
  }, {
    row: 0,
    col: 2,
    isMine: false,
    hidden: true,
    isMarked: false

  }, {
    row: 1,
    col: 0,
    isMine: false,
    hidden: true,
    isMarked: false
  }, {
    row: 1,
    col: 1,
    isMine: true,
    hidden: true,
    isMarked: false
  }, {
    row: 1,
    col: 2,
    isMine: false,
    hidden: true,
    isMarked: false
  }, {
    row: 2,
    col: 0,
    isMine: true,
    hidden: true,
    isMarked: false
  }, {
    row: 2,
    col: 1,
    isMine: true,
    hidden: true,
    isMarked: false
  }, {
    row: 2,
    col: 2,
    isMine: false,
    hidden: true,
    isMarked: false
  }]
}
  

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var i = 0; i < board['cells'].length; i++)
      var currentCell = board.cells[i]
      currentCell.surroundingMines = countSurroundingMines(currentCell)
}
  lib.initBoard() 
  document.addEventListener("click", checkForWin )
  document.addEventListener("contextmenu", checkForWin)

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
for(var i = 0; i < board.cells.length; i++)
    var currentCell = board.cells[i]
    if (currentCell.isMine == true && currentCell.isMarked == false) {
      return;
    } else if (currentCell.hidden == true && currentCell.isMine == false) {
      return;
    }
    }
    return lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 


// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var adjacentCells = countSurroundingMines(cell.row, cell.col)
  var count = 0
  for(var i = 0; i < adjacentCells.length; i++){
    if (adjacentCells[i].ismine == true){
      count++
    }
  }
  return count  
}

