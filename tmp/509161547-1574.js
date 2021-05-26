// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
let v1 = new Array(v0);
const v2 = new Array(v1.length);
}
function v3(){
Number.isNaN(Number(v2[0]));
Number.isNaN(Number(v2[1]));
Number.isNaN(Number(v2[2]));
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
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
v1(v4);
}
}
function v6(){
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
while((v2.length) < (v4)){
v3(v0);
}
}
function v7(){
v2.sort(v5);
}
function v8(v1){
v5(('Random') + (v1), 1000, v7, (()=>v6(v1)));
v5(('Sorted') + (v1), 1000, v7, (()=>v3(v1)));
}
{
(v2[v4]) = Math.floor((Math.random()) * (v0));
}
function v9(v1, v2){
(v3) = [];
v1(v3, v4);
v2(v3, v4);
}
