// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
var v2 = new Array(v1);
}
}
function v3(){
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
let v4 = v3([]);
function v5(v1){
return ((v2, v3)=>{
++v0;
if((v0) == ((v1) / (2))){
v1();
}
return v4(v2, v3);
});
}
class v6 extends RegExp{
}
function v7(){
v2.sort(v5);
}
{
(v6.__proto__.__proto__.__proto__[("proto") + (v0)]) = true;
}
%NeverOptimizeFunction(v4);
