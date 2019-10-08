function anagrams(word, words) {
  const res = []
  words.forEach(element => {
    if(word.split('').sort().join('') === element.split('').sort().join('')) {
      res.push(element)
    }
  });
  return res
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))