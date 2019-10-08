function findOutlier(integers){
  //your code here
  const hashMap = {
    odd: 0,
    even: 0,
    oddIndex: 0,
    evenIndex: 0
  }
  integers.forEach((n, index) => {
    if(n%2) {
      hashMap.odd +=1
      hashMap.oddIndex = index
    } else {
      hashMap.even +=1
      hashMap.evenIndex = index
    }
    return
  })

  return hashMap.odd < hashMap.even ? integers[hashMap.oddIndex] : integers[hashMap.evenIndex]
}

console.log(findOutlier([0,1,2]))