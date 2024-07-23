/*console.log("function declaration");
function rev(num){
    r = 0
    while (num!=0){
        rem = num%10;
        r = rem + (r*10);
        num = parseInt(num/10);
        return r;
    }
}
var x = -123;
if(x >= 0){
    x=rev(123)
    console.log(x);
}
else{          
    x= -1 * x;    
    y = rev(x);
    console.log(y * -1)
}
    */ 
   /*   
console.log("function expression");
var rev = function(num){
    r = 0
    while (num!=0){
        rem = num%10;
        r = rem + (r*10);
        num = parseInt(num/10);
    }
    return r;
}
var x = -123;
if(x >= 0){
    x=rev(123)
    console.log(x);
}
else{
    x= -1 * x;
    y = rev(x);
    console.log(y * -1)
}
    */
   /*
var reverse = function(n){
    res = 0
    while (n!=0){
        r = n%10;
        res = r + (res*10);
        n = parseInt(n/10);
    }
    return res;   
}
var z = 123;
var w =3;
var res = (z*10)+w;
console.log(res);
res = reverse(res);
console.log(res);
res = (res*10)+w;
console.log(res);
res = reverse(res);
console.log(res);
*/
/*
console.log("arrow function")
var x = (A,S) => {
    console.log(A%S);
}
x(13,4);
*/
/*
console.log("IIFE");
(function(){
    var n =5;
    var res = 1;
    for(i=5;i>0;i--){
        res=res*i;
    }
    console.log(res);
})();
*/
/*
  console.log("named function")
  var h = function c(n){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
  }
  h(13);
  */
 /*
console.log("userdefined")

function wpwr(a,b,c){
    return (a+b+c);
}
console.log(wpwr(10,20,30));

function wpwor(a,b,c){
    console.log(a+b+c);
}
wpwor(10,20,30)

function wopwr(){
    return(10+20+30);
}
console.log(wopwr());

function wopwor(){
    console.log(10+20+30)
}
wopwor();   
*/
/*
function ams(x){
    c=0;
    r=0;
    while(x>0){
       res = x%10;
       r = res**c + (r);
       x=parseInt(x/10);
       c+=1
    }
    return r
}
var y = 153;
if(y>=0){
    y=ams(153)
    console.log(y);
}

   /*
var ams = (x,z)=>{
    var r=0
    while(x!=0){
       res = x%10;
       r = (res**z+(r));
       x=parseInt(x/10);
    }
    return r;
}
console.log(ams(153,3));
*/
