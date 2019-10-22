snailCoordinate=n=>[0,1-n,2,1+n][n%4]/2

console.log(snailCoordinate(1),0)

console.log(snailCoordinate(2),1)

console.log(snailCoordinate(3),2)

console.log(snailCoordinate(12),0)

console.log(snailCoordinate(13),-6)

console.log(snailCoordinate(10),1)