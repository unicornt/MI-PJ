let v0 = "[\\t\\n\\f ]";
function v1(v1){
return v1.startsWith(v0);
}
function v2(){
var v1;
var v2 = 10240;
var v3 = ({});
for(var v4 = 0;(v4) < (v2);v4++){
(v1) = v3[("test") + (v2)];
}
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
function v5(){
(v1) = /[Cz]/gy;
(v1.lastIndex) = (2) ** (32);
(v2) = v3();
}
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
while((v2.length) < (v3)){
v3(v4);
}
}
var v7 = v5((v4) + (v3));
let v8 = (()=>v2(v1, v6));
let v9 = (()=>v2(v6, v8));
