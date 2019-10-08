function add(val){
  const rs = oval => {
      return add(val + oval)
  }
  rs.toString = () => val
  return rs;
}
console.log(add(1)==1);
console.log(add(1)(2)==3);
console.log(add(1)(2)(3)==6);