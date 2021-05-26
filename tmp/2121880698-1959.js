const v0 = "NE-DEINTERN-prop";
let v1 = (v0) + ("+");
const v2 = 1e3;
const v3 = (()=>(v1) = /(?:)/gu);
function v4(v1){
(v1.foo) = 0;
(v1.bar) = 0;
delete v1.foo;
delete v1.bar;
(v1[1e9]) = 0;
return v1;
}
let v5 = (()=>v3(v4, v4));
let v6 = (()=>v5(v4, v4));
function v7(v1 = (2) * (v2)){
v3(v1);
v5();
}
