function v0(v1, v2){
return (v1.indexOf(v2)) !== (- 1);
}
function v1(){
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
function v2(){
(v1) = v2.find(v3, v1(v2));
}
let v3 = (()=>v0(v2, v2));
const v4 = "NE-DEINTERN-prop";
let v5 = (()=>v2(v3, v3));
function v6(){
(v1) = v2.every(v3, v5(v2));
}
function v7(v1, v2){
if((v1) < (v2)){
return - 1;
}
if((v2) < (v1)){
return 1;
}
return 0;
}
