// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
function v2(){
(v1) = v2.reduceRight(v3, v1(v2));
}
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
var v5 = new Array(v4);
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
while((v2.length) < (v0)){
v3(v4);
}
}
var v7 = v6((v3) + (v0));
function v8(v1){
(v2) = v3.every(((v4, v5, v6)=>(v1) === (3)));
}
%NeverOptimizeFunction(v1);
function v9(){
(v1) = /[Cz]/y;
(v2) = v3();
}
function v10(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);++v3){
(v2) += v8 `${"Hello"} ${"cruel"} ${"slow"} ${"world"}!\n`;
(v2) += v8 `${"Why"} ${"is"} ${"this"} ${"so"} ${"damn"} ${"slow"}?!\n`;
}
return v2;
}
