//Implement a binary search algorithm on a sorted array.
let s=[3,6,5,1,9,4],mid,low,high,flag=0
s.sort()
console.log("sorted array : ",s)
let x=4
low=0
high=s.length-1
while(low<=high)
{
    mid=Math.floor(low+high/2)
    if(s[mid]===x)
    {
        flag=1;break;
    }
    else if(s[mid]<x)
        low=mid+1
    else
      high=mid-1
}
if(flag==0)
    console.log('element not found')
else
    console.log('element found')

