var obj = {
    name : "taruni",
    mob : 2345678989,
    age:21
}
console.log(obj);
console.log(obj.age);
obj.gender="female";
console.log(obj);
obj.age=22;
console.log(obj);
delete obj.age;
console.log(obj);
var a = Object.keys(obj);
console.log(a);
var b = Object.values(obj);
console.log(b);
var c = Object.entries(obj);
console.log(c);


var obj = new Object();
obj["name"]="taruni";
obj["mob"] = 12345623456;
obj["age"] = 21;
console.log(obj);
console.log(obj["age"]);
obj["mob"] = 9876543456;
console.log(obj)
obj["gender"] = "female"
console.log(obj);
delete obj["mob"];
console.log(obj);
console.log(obj);
var a = Object.keys(obj);
console.log(a);
var b = Object.values(obj);
console.log(b);
var c = Object.entries(obj);
console.log(c);