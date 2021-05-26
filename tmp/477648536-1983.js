function v0(){
function v1(){
new Error("Error from inlined function!");
}
function v3(){
v1();
}
function v4(){
v3();
}
%PrepareFunctionForOptimization(v4);
v4();
v4();
%OptimizeFunctionOnNextCall(v4);
v4();
}
function v1(v1){
for(var v2 in v1){
var v3 = v1[v2];
(v1[v2]) = Object.getOwnPropertyDescriptors(v3);
}
return v1;
}
let v2 = 0;
function v3(v1){
for(var v2 in v1){
var v3 = v1[v2];
(v1[v2]) = Object.getOwnPropertyDescriptors(v3);
}
return v1;
}
let v4 = (()=>v0(v3, v3));
let v5 = (()=>v1(v3, v3));
let v6 = (()=>{
(v1) = 0;
v1();
v0();
v5();
});
function v7(v1 = (2) * (v2)){
v5(v1);
v3();
}
