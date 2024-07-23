console.log("if")
let a=19;
if(a>=18){
    console.log("yess!!He can vote.")
}

console.log("if-else");
let b=10;
if(b>=18){
    console.log("yess!!He can vote.")
}
else{
    console.log("No!! he cannot vote")
}

console.log("if else-if else");
let c=10;
voter=false;
if(c>=18){
    console.log("yess!!He can vote.")
}
else if(voter==true){
    console.log("yess!!He can vote.")
}
else{
    console.log("No!! he cannot vote")
}

console.log("switch");
let pro=7;
let dis;
switch(pro){
    case 1:
        dis= "10%"
        break;
    case 2:
        dis= "20%"
        break;
    case 3:
        dis= "30%"
        break;
    case 4:
        dis= "40%"
        break;
    case 5:
        dis= "50%"
        break;
    case 6:
        dis= "60%"
        break;
    case 7:
        dis= "70%"
        break;
    case 8:
        dis= "80%"
        break;
    default: dis="unknown"
}
console.log("discount is "+dis)

console.log("nested");
let d=10;
vote=true
if(d>=18){
    if(vote==true){
    console.log("yess!!He can vote.")
}
}
else{
    console.log("No!! he cannot vote")
}

console.log("FOR");
for(var i=0 ; i<5 ; i++){
    console.log(i);
}
for(var i=4 ; i>=0 ; i--){  
    console.log(i);
}
let color ={
    first : "red",
    second : "orange",
    third : "black"
}
for( z in color){
    console.log(z+":"+color[z]);
}
let colors= ["red","orange","black"]
for( y of colors){
    console.log(y)
}
  
let x=1;
while(x<=10){
    console.log(x);
    x++;
}

let w=1;
do{
    console.log(w);
    w++;
}
while(w<10);


let s=20;   
let t= 30;
let r= 10;
if((s<t && s>r)||(s>t && s<r)){
    console.log(s);
}
else if((t<s && t>r)||(t>s && t<r)){
    console.log(t);
}
else{
    console.log(r);
}  
let ab =100;
let aa =20;
let ac = ab-aa/2;
console.log(ac);

let num=12;
let v=0;
for(i=1;i<num;i++){
    if(num%i==0){
        v=v+i;
        console.log(v);

    }
} 
if(v==num){
    console.log("perfect");
}
else{
    console.log("notperfect");
}    
