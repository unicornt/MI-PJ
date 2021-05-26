// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
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
}
function v2(v1){
(v2) = 0;
(v3) = [];
for(let v4 = 0;(v4) < (v0);++v4){
(v3[v4]) = v1();
}
}
function v3(v1 = (2) * (v0)){
v2(v1);
v1();
}
function v4(v1 = (2) * (v0)){
v1(v1);
v3();
}
function v5(v1 = (2) * (v0)){
v3(v1);
v4();
}
const v6 = (v0) >>> (1);
function v7(){
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
while((v2.length) < (v6)){
v3(v0);
}
}
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
// GenBlkBrick
for(var v9 = 0;(v9) < (5);v9++){
const v10 = v2(100);
}
}
