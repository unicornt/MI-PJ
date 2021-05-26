function v0(v1, v2, v3){
return (v1.charCodeAt(v3)) == (v1.charCodeAt(v2));
}
function v1(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);++v3){
(v2) += v0 `${"Hello"} ${"cruel"} ${"slow"} ${"world"}!\n`;
(v2) += v0 `${"Why"} ${"is"} ${"this"} ${"so"} ${"damn"} ${"slow"}?!\n`;
}
return v2;
}
let v2 = (()=>v1(v0, v0));
function v3(){
function v1(){
return new Error("Throwing from inlined function!");
}
function v3(){
return v1();
}
function v4(){
return v3();
}
%PrepareFunctionForOptimization(v4);
v4();
v4();
%OptimizeFunctionOnNextCall(v4);
v4();
v0((()=>v4()));
}
let v4 = (()=>v2(v1, v3));
function v5(){
(v1) = v2.some(v3, v1(v2));
}
function v6(){
v0(1e1);
v0(1e2);
v0(1e3);
}
function v7(v1){
v1(('Random') + (v1), 1000, v4, (()=>v0(v1)));
v1(('Sorted') + (v1), 1000, v4, (()=>v2(v1)));
}
