//Write a function to move all zeroes in an array to the end without changing the order of non-zero elements.
let a=[3,6,0,5,0,2,0,1]//8
let k=a.filter(i=>{
    return i!=0
})
 let len=a.length-k.length;//3
// console.log(len)
let j=0;
while(j<len)
{
   k.push(0)
   j++;
}
console.log(k)