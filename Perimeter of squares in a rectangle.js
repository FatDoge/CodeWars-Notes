function perimeter(n) {
  let res = 0
  let p = n + 1
  for(let i = 1;i <= p ;i++) {
    i
    res += Math.round(Math.pow((1+Math.sqrt(5))/2, i)/Math.sqrt(5))*4
  }
  return res
}
console.log(perimeter(5))
