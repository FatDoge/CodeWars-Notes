function duplicateEncode(word){
  const processedWord = []
  word
  .toLowerCase()
  .split('')
  .forEach( (e, index, arr) => {
    if(arr.indexOf(e) === arr.lastIndexOf(e)){
      processedWord[index] = '('
    } else {
      processedWord[index] = ')'
      }
    })
  return processedWord.join('')
}

console.log(duplicateEncode('(( @'))

/*
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
*/