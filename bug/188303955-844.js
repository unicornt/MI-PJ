const v0 = 1e3;
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
function v2(v1 = (2) * (v1)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>(v6) + (0.234)));
}
var v3 = new Array(v1);
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
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
while((v2.length) < (v1)){
v3(v4);
}
}
const v6 = v5(v1);
}
function v7(){
(v1) = new Array(v4);
for(let v4 = 0;(v4) < (v4);++v4){
(v1[v4]) = (v6[v4]) + (0.1);
}
v5();
}
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
%NeverOptimizeFunction(v2);
let v9 = (()=>v7(v2, v2));
}
// GenBlkBrick
for(var v10 = 0;(v10) < (5);v10++){
// GenBlkBrick
for(var v11 = 0;(v11) < (v1);(v11) += 3){
function v12(v1 = (2) * (v11)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
}
}
// GenBlkBrick
for(var v13 = 0;(v13) < (5);v13++){
var v14 = v2((v10) + (v0));
}
function v15(v1){
v2(('Random') + (v1), 1000, v7, (()=>v12(v1)));
v2(('Sorted') + (v1), 1000, v7, (()=>v5(v1)));
}
