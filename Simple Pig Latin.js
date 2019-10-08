function pigIt(str){
  //Code here
  return str.split(' ').map( e => {
    const process = e.split('')
    const head = process.shift().concat(e === '!' || e === '?' ? '': 'ay')
    process.push(head)
    return process.join('')
  })
  .join(' ')
}

console.log(pigIt('O tempora o mores ?'))