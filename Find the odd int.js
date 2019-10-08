function findOdd(A) {
  //happy coding!
  let res;
  const hashMap = new Map()
  for( item of A) {
    if(hashMap.get(item)) {
      hashMap.set(item, hashMap.get(item) + 1)
    } else {
      hashMap.set(item, 1)
    }
  }
  hashMap.forEach( (value, key) => {
    if(value % 2) res = key
    return;
  })
  return res
}

const findOddPro = arr => arr.reduce((a,b) => a^b)
console.log(findOddPro([1,1,1,2,2,3,3]))


console.log(findOdd([1,1,1,2,2,3,3]))