document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

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
  for(var i = 0; i < board['cells'].length; i++){
      var currentCell = board.cells[i]
      currentCell.surroundingMines = countSurroundingMines(currentCell)
 }
   lib.initBoard()     
   document.addEventListener("click", checkForWin)
   document.addEventListener("contextmenu", checkForWin)
   }
  

function checkForWin () {
   for(var i = 0; i < board.cells.length; i++){
      var currentCell = board.cells[i]
      if (currentCell.isMine == true && currentCell.isMarked == false) {
         return;
      } else if (currentCell.hidden == true && currentCell.isMine == false) {
         return;
      }
      }
       return lib.displayMessage('LESGO!')
   }



function countSurroundingMines(cell) {
   var adjacentCells = getSurroundingCells(cell.row, cell.col)
   var count = 0
   for (var i = 0; i < adjacentCells.length; i++){
      if (adjacentCells[i].isMine == true){
         count++
      }
   }
   return count
}

