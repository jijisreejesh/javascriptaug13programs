//Write a function to find the common elements in three sorted arrays.
let a=[3,6,2,1,8,5]
let b=[5,7,6,1]
let c=[9,3,1,6],d=[]
console.log('First array sorted : '+a.sort())
console.log('First array sorted : '+b.sort())
console.log('First array sorted : '+c.sort())
a.filter(i=>{
    if(b.includes(i)&&c.includes(i))
        d.push(i)
    
})
console.log(d)
