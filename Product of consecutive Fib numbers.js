

const f = n => Math.round(Math.pow((1+Math.sqrt(5))/2, n)/Math.sqrt(5))

function productFib(prod){
  for(let i = 0;;i++) {
    if(f(i)*f(i+1) === prod) {
      return [f(i), f(i+1), true]
    }

    if(f(i)*f(i+1) < prod && f(i+1)*f(i+2) > prod) {
      return [f(i+1), f(i+2), false]
    }
  }
}

console.log(productFib(4895))