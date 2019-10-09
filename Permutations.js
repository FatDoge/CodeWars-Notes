function permutations(str) {
if (str.length == 1) {
    return [str];
}
let res = []
let arr = arguments.callee(str.slice(1));
for(let i = 0;i < arr.length;i++){
    let partArr = [];
    for(let j = 0;j < arr[i].length+1;j++){
        let newStr = arr[i].slice(0,j) + str[0] + arr[i].slice(j);
        partArr.push(newStr);
    }
    res = res.concat(partArr)
}
return [...new Set(res)];
}


console.log(permutations('a'), ['a']);
console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());