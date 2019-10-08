function validatePIN (pin) {
  //return true or false
  const regx =  /(^\d{4}$)|(^\d{6}$)/
  return regx.test(pin)
}

console.log(validatePIN('123456'))