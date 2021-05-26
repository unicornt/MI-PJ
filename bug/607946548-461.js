function v0(v1, v2){
for(let v3 = 0;(v3) < (v1.length);++v3){
if((v1[v3]) === (v2)){
return true;
}
}
return v4;
}
let v1 = v0([]);
%NeverOptimizeFunction(v0);
%NeverOptimizeFunction(v1);
// GenBlkBrick
for(var v2 = 0;(v2) < (5);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
function v4(){
v1.replace(v2, "");
}
function v5(){
function v1(v2){
if((v2) <= (0)){
return new Error("Error in StepOne!");
}
v4((v2) - (3));
v4((v2) - (4));
}
function v4(v2){
if((v2) <= (0)){
return new Error("Error in StepTwo!");
}
v1((v2) - (1));
v1((v2) - (2));
}
v1(v3);
}
}
}
let v6 = (()=>v4(v0, v0));
let v7 = (()=>v1(v6, v6));
let v8 = (()=>v0(v1, v1));
