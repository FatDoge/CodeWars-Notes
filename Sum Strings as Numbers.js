function sumStrings(a,b) {
  let res = '',
  temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
return res.replace(/^0+/, '');
}

console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'))
console.log(sumStrings('8797', '4512'))
