//Write a function to find the majority element in an array (element appearing more than n/2 times).
let a=[9,3,7,9,9,9,7,9,3,3,9,9],flag=0,c=0,n=a.length,i=0
 a.sort();
console.log(a)
    while(i<n)
    {
        c=1
        for(j=i+1;j<n;j++)
        {
            if(a[i]==a[j])
                c++;//6
            else 
             break;
        }
        if(c>n/2)
        {
        console.log(a[i])
        flag=1
        }
       i=j
    }
    
        if(flag==0)
            console.log('Majority no element found')
    
    


