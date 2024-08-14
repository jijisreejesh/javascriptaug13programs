//Implement a function to find the index of the first occurrence of a target value in an array.
let a=[3,6,2,7,8]
let b=7
if(a.includes(b))
{
    let m=a.indexOf(b)
     console.log('Target found at : '+m)
}
else{
    console.log('Target not found')
}