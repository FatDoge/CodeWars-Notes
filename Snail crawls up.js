function snail(column, day, night) {
  let temp = 0;
  let process = 0;
  while(true) {
    temp++
    process += day
    if(process >= column) {
      return temp
    } else {
      process -= night
    }
  }
}

console.log(snail(10,3,2)) // 8
console.log(snail(5,10,3)) // 1
console.log(snail(100,20,5)) // 7