let a=[3,5,1,7,8]
let m=3
console.log(a);
let x=a.slice(0,m-1)
// console.log(x)
let b=a.slice(m-1,a.length)
console.log(b.reverse().concat(x))

