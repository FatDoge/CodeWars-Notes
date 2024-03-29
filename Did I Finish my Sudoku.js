function doneOrNot(board){
  let rowMap = {}, columnMap = {}, regionMap = {}
  //your code here
  for(let i = 0;i < 9;i++) {
    for(let j = 0;j < 9;j++) {
      if(rowMap[board[i][j]] || columnMap[board[j][i]]) {
        return 'Try again!'
      } else {
        rowMap[board[i][j]] = true
        columnMap[board[j][i]] = true
      }
      // 判断数独每一块是否符合规则 i从0=>8，共9块: 
      if(regionMap[board[(i%3)*3+(j-j%3)/3][(i%3)*3+j%3]]) {
        return 'Try again!'
      } else {
        regionMap[board[(i%3)*3+(j-j%3)/3][(i%3)*3+j%3]] = true
      }
    }
    rowMap = {}
    columnMap = {}
    regionMap = {}
  }
  return 'Finished!'
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");
         
console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");

  // https://www.codewars.com/kata/53db96041f1a7d32dc0004d2