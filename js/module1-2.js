function fun1(name){
    console.log("my name is"+name);
}
function fun2(){
    console.log("this is module1-2.js");
}
function fun3(name){
    console.log("my name is"+name);
}
function fun4(){
    console.log("this is module1-2.js");
}
function fun5(name){
    console.log("my name is"+name);
}
function fun6(){
    console.log("this is module1-2.js");
}
export{fun1,fun2,fun3,fun4};
export {fun5 as s1 , fun6 as s2}