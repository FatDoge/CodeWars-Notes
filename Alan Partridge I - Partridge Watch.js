function part(x){
  const relatedTerms = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let flag = false
  let relate = 0
  x.forEach(e => {
      if(relatedTerms.includes(e)) {
        flag = true;
        relate++
      }
  })

  return flag ? 'Mine\'s a Pint'+'!'.repeat(relate) : 'Lynn, I\'ve pierced my foot on a spike!!'
  
}

// console.log(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
// console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');
