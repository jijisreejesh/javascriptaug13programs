//Write a function to find the missing number in an array of integers from 1 to n.
let a=[1,4,6,8,12],flag=1
let end=a.at(a.length-1)
let start=a[0],r=a[0]
for(i=1;i<a.length;i++)//1<3
{  
    j=i
    
    while(r+1!=a[j])
    {
        r=r+1;
        console.log(r)
        flag=0;
    }
    if(flag==0)
    r=r+1
}