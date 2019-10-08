function list(names){
  //your code here
  if(names.length === 0) {
    return ''
  }

  if(names.length === 1) {
    return names[0].name
  }

  return names
  .map( ({name}) => name)
  .slice(0, names.length -1)
  .join(', ')
  .concat(' & ', names[names.length-1].name)
}
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))