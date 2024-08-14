let prompt=require('prompt-sync')()
// let a=prompt('Enter the limit : ');
let b=prompt('Enter the numbers in single line: ');
let c=Array.from(b)
let d1=c.reduce((i,d)=>{
    if(parseInt(i)>parseInt(d))
       i=d;
    return i
})
 console.log("Minimum value : "+d1)