//Write a function to find the intersection of two arrays.
let a=[4,7,3,9,1]
let b=[1,2,7,4,8],m=[]
a.forEach(i=>{
   if(b.includes(i))
   {
     m.push(i)
   }
});
console.log('Intersection of two arrays are :  '+m)