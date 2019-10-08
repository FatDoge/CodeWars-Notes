function narcissistic(value) {
  // Code me to return true or false
  const data = value
  let i = value.toString().length
  let res = 0
  for(let j = 0; j < i;j++) {
    res += Math.pow(value % 10, i)
    value = (value - value % 10) / 10
  }
  return res === data
}
console.log(narcissistic( 371 ))