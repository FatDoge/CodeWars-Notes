decodeMorse = function(morseCode){
  return morseCode
  .trim()
  .split('   ')
  .map(item => item
    .split(' ')
    .map(e => MORSE_CODE[e] // 内置了该HashMap
    )
    .join('')
  )
  .join(' ')
}

console.log(decodeMorse('...---... -.-.--'))
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
