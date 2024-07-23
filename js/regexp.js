var re = new RegExp("a.*t");
console.log(re.test("at"));
console.log(re.exec("at")[0]);

var re =/a.*t/;
console.log(re.test("at"));
console.log(re.exec("at")[0]);

var p = /\d/g;
var t = "i am 21.";
var r = t.match(p);
console.log(r);

var p = /\D/g;
var t = "i am 21.";
var r = t.match(p);
console.log(r);

var p = /\s/g;
var t = "i am 21.";
var r = t.match(p);
console.log(r);

var p = /\S/g;
var t = "i am 21.";
var r = t.match(p);
console.log(r);

var p = /\w/g;
var t = "i  _am  21 years 19ac.";
var r = t.match(p);
console.log(r);

var p = /\W/g;
var t = "i _am 21 years 19ac.";
var r = t.match(p);
console.log(r);

var p = /\bcost\b/g;
var t = "the cost is 40 costs.";
var r = t.match(p);
console.log(r);

var p = /h.t/g;
var t = "hot hat ht pot hit";
var r = t.match(p);
console.log(r);

var p = /^hot/g;
var t = "hot is hot";
var r = t.match(p);
console.log(r);

var p = /e$/g;
var t = "apple the";
var r = t.match(p);
console.log(r);


var p = /ho*t/g;
var t = "hot hat cht hoooot hit";
var r = t.match(p);
console.log(r);

var p = /ho+t/g;
var t = "hot hat cht hoooot hit";
var r = t.match(p);
console.log(r);

var p = /colors?/g;
var t = "ilove black color";
var r = t.match(p);
console.log(r);

var p = /\d{3}-\d{3}-\d{4}/g;
var t = "234567890-6,123-123-1234";
var r = t.match(p);
console.log(r);

var p = /[ch]at/g;
var t = "cat,bat,wat,hat,chat,hcat";
var r = t.match(p);
console.log(r);

var p = /cat|hat/g;
var t = "cat,bat,wat,hat,chat,hcat";
var r = t.match(p);
console.log(r);
