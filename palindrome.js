//Write a function to check if an array is a palindrome.
//let a=[4,3,5,2,5,3,4]
let z=0
let a=['h','a','g','a','k','h']
console.log('Array is : '+a)
let b=a.length
let x=a.every(i=>{
   if(i==a[b-1])
   {
    z++;
   }
   else
   {
    z=0;
   }
   b--;
   return z;
})
if(z==a.length)
console.log('palindrome')
else
console.log('Not a palindrome')