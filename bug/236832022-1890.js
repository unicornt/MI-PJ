const v0 = (()=>(v1) = /./g);
function v1(v1, v2, v3){
return (v1.charCodeAt(v3)) == (v1.charCodeAt(v2));
}
let v2 = (()=>v0(v1, v1));
let v3 = (()=>{
(v1) = 0;
v0();
v2();
v1();
});
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
if((v5) === (undefined)){
(v5) = 0;
}
const v6 = v2(v5);
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
while((v2.length) < (v5)){
v3(v7);
}
}
}
function v9(){
v6.sort(v1);
}
%NeverOptimizeFunction(v1);
