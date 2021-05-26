function v0(){
(v1) = /[Cz]/u;
(v2) = v3();
}
function v1(v1, v2){
return v0(v1, v2, ((v4)=>{
if(((v4) % (2)) == (0)){
return v4;
}
return ("key") + (v4);
}));
}
// GenBlkBrick
for(var v2 = 0;(v2) < (5);v2++){
const v3 = (v2) >>> (1);
}
let v4 = (()=>v0(v1, v1));
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
while((v2.length) < (v2)){
v3(v3);
}
}
function v6(v1 = (2) * (v2)){
v1(v1);
v0();
}
function v7(){
(v1) = v2.findIndex(v3, v1(v2));
}
const v8 = v5(v3);
