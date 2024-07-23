import {fun1,fun2} from "./module1-2.js"
fun1("taruni");
fun2();

import {fun3 as b1,fun4 as b2} from "./module1-2.js"
b1("taruni");
b2();

import * as newfile from "./module1-2.js"
newfile.s1("taruni")
newfile.s2();