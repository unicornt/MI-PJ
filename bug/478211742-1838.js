// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
const v1 = (v0) >>> (1);
(v0) += v1;
}
function v2(){
(v1) = 0;
(v2) = [];
function v3(v4){
if((v4) <= (0)){
v2.push(new Error("Error in StepOne!"));
return;
}
v6((v4) - (3));
v6((v4) - (4));
}
function v6(v4){
if((v4) <= (0)){
v2.push(new Error("Error in StepTwo!"));
return;
}
v3((v4) - (1));
v3((v4) - (2));
}
while((v2.length) < (v0)){
v3(v1);
}
}
const v3 = v2(v0);
%NeverOptimizeFunction(v2);
const v4 = v2(v0);
function v5(){
(v1) = 0;
(v2) = [];
function v3(v4){
if((v4) <= (0)){
v2.push(new Error("Error in StepOne!"));
return;
}
v6((v4) - (3));
v6((v4) - (4));
}
function v6(v4){
if((v4) <= (0)){
v2.push(new Error("Error in StepTwo!"));
return;
}
v3((v4) - (1));
v3((v4) - (2));
}
while((v2.length) < (v0)){
v3(v1);
}
}
function v6(){
(v1) = new Array(v1);
for(let v4 = 0;(v4) < (v1);++v4){
(v1[v4]) = `value ${v4[v4]}`;
}
v2();
}
function v7(){
Number.isNaN(Number(v4[0]));
Number.isNaN(Number(v4[1]));
Number.isNaN(Number(v4[2]));
}
