z=['mango','orange','mango','apple','orange']
let m=[];
z.forEach(i => {
    if(!m.includes(i)&&!m.includes(' '))
        m.push(i)
});
console.log(m)
