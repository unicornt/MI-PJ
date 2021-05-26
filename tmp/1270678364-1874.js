function v0(){
new RegExp();
}
function v1(v1, v2, v3){
var v4 = v0(v2);
var v6 = v4;
var v7 = 0;
for(var v8 = 0;(v8) < (v1);v8++){
(v7) += v2;
(v6.__proto__) = v0(v2, v7);
(v6) = v6.__proto__;
}
if((v3) === (false)){
(v6.__proto__) = new Proxy(({}), ({}));
}
return v4;
}
let v2 = [].join("|");
let v3 = (()=>v1(v0, v0));
function v4(){
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
v3((()=>v4()));
}
let v5 = (v2) + ("+");
let v6 = (()=>{
(v1) = 0;
v1();
v4();
v0();
});
function v7(){
(v1) = v5.matchAll(v3);
}
