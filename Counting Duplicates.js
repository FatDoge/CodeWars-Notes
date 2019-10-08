function duplicateCount(text){
  //...
  const hashMap = {}
  let res = 0
  text.toLowerCase().split('').forEach(e => {
    if(hashMap[e]) {
      hashMap[e] += 1
    } else {
      hashMap[e] = 1
    }
  });
  for( v in hashMap ) {
    if(hashMap[v] > 1) {
      res += 1
    }
  }
  return res
}

console.log(duplicateCount("Indivisibilities"))