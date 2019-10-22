function pyramid(n) {
  const res = []
  while(n--) {
    const temp = new Array(n+1).fill(1)
    res.unshift(temp)
  }
  return res
}
console.log(pyramid(5))