'use strict';
function v0(){
(v1) = /[A-Za-z\u0080-\u00FF ]/;
(v2) = "hipopótamo maçã pólen ñ poção água língüa";
}
var v1 = v0(50);
let v2 = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?";
let v3 = ("\\\\") + (v2);
function v4(){
let v1 = new RegExp(v2, "gi");
"abcſABCβκς".match(v1);
"color:".match(v1);
}
(v5) = [];
function v6(v1){
(v1) = v0(v1);
(v1.__foo__) = 1;
delete v1.__foo__;
return v1;
}
