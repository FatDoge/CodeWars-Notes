const gcd = (x, y) => {  
  let max,min,temp;  
  max = x > y ? x : y ;  
  min = x < y ? x : y ;  
  while( max % min ){  
    temp = max % min;  
    max = min;  
    min = temp;  
  }  
  return min;  
}  
//最小公倍数  
const lcm = (x, y) => x*y/gcd(x,y)

function convertFrac(lst){
  let res = ''
  //Your code here
  const lcmRes = lst.reduce((a, b) => {
    return lcm(a,b[1])
  }, 1)
  lst.forEach( e => {
    const process = `(${lcmRes/e[1]*e[0]},${lcmRes})`
    res = res.concat(process)
  })
  return res
}


//最大公约数


console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ])) //"(6,12)(4,12)(3,12)"
