let a =[10,20,"sai",20.5];
let b = new Array(40,30,"ravi",30.5);
console.log(a);
console.log(b);
console.log(a[2]);
console.log(b[3]);
a[0]=80;
console.log(a)
b[1]=90.9;
console.log(b)
let c=[10,12,14,16,18,20];
c.push(22);
console.log(c);
d=c.pop();
console.log(d);
console.log(c); 
e=c.shift();
console.log(e);
console.log(c);
c.unshift(10);
console.log(c);
f=c.slice(1,4);
console.log(f)
g=c.slice(3);
console.log(g)
h=[30,40,50,60]
i=c.concat(h);
console.log(i)
j=c.join(" ");
console.log(j);
k=c.indexOf(14);
console.log(k);
var m =[10,20,30,40,50]
var n= m.forEach(function(l){
    console.log(l+30);
});
var o =[10,20,30,40,50]
var p= o.map(function(q){
    return(q+30);
});
console.log(p);
var o =[10,20,30,40,50,13,5,9,7]
var p= o.filter(function(q){
    return q%2==0;
});
console.log(p);
var o =[10,20,30,40,50]
var p= o.reduce(function(acc,cv){
    return acc+cv;
},0);
console.log(p)