const v0 = 200;
function v1(){
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
v1(v0);
}
function v2(){
(v1) = v2.reduce(v3, v1(v2));
}
function v3(v1 = (2) * (v0)){
v2(v1);
v1();
}
let v4 = v3([]);
let v5 = (()=>v4(v3, v2));
let v6 = (()=>v3(v5, v2));
let v7 = (()=>v1(v6, v6));
