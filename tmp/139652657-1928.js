function v0(){
let v1 = - 1;
let v2 = 0;
const v3 = ((v4) == (null)) ? (0) : (v4.length);
const v5 = [];
while((++v1) < (v3)){
const v6 = v4[v1];
if(v7(v6, v1, v4)){
(v5[v2++]) = v6;
}
}
return v5;
}
function v1(){
(v1) = v2.reduceRight(v3, v0(v2));
}
const v2 = 100000;
let v3 = (()=>v0(v1, v1));
let v4 = (()=>v3(v1, v1));
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
%NeverOptimizeFunction(v3);
function v6(v1 = (2) * (v5)){
v1(v1);
v4();
}
}
// GenBlkBrick
for(var v7 = 0;(v7) < (5);v7++){
function v8(){
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
while((v2.length) < (v2)){
v3(v7);
}
}
}
function v9(v1){
v6(('Random') + (v1), 1000, v1, (()=>v4(v1)));
v6(('Sorted') + (v1), 1000, v1, (()=>v0(v1)));
}
