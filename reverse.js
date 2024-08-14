let prompt=require('prompt-sync')()
let a=prompt('Enter the limit : ');
let b=prompt('Enter the numbers : ');
let c=Array.from(b);
console.log("Reverse of array : "+c.reverse());
