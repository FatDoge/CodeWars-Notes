function nbYear(p0, percent, aug, p) {
  // your code
  let init = p0
  for(let i = 1;;i++) {
    init = init + init*percent/100 + aug
    if(init >= p) return i
  }
}

console.log(nbYear(1500, 5, 100, 5000)) // 15