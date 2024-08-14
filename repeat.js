//Write a function to find the first repeating element in an array.
let a=[0,7,7,2,3,5]
let k=a.find(i=>{
     if((a.includes(i)))
        return i
        
 })
 console.log(k)
 
// var a = [7,4,2,4,5,1,7,6,8,9,4];
// var firstIndex = 0;

// for(var i = 0; i < a.length; i++){
//   for( var j = i+1; j < a.length; j++){
//     if(a[i] == a[j]){
//       firstIndex = a[i];
//       break;      
//     }

//   }
// }
// console.log(firstIndex);