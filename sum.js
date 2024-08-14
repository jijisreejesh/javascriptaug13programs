//Implement a function to find the sum of all elements in an array
let a=[3,6,2,2,7]
let k=a.reduce((i,j)=>{
    return i+j
})
console.log("Sum : "+k)