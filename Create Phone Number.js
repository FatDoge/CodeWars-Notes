function createPhoneNumber(numbers){
  const str = numbers.join('')
  return `(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6)}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))