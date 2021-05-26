function v0(){
new RegExp("[Cz]");
}
const v1 = ((v1, v2)=>(v1) + (Number(v2)));
let v2 = (()=>v1(v0, v0));
let v3 = (()=>v1(v0, v0));
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
function v6(v1){
(v2) = 0;
(v3) = [];
for(let v4 = 0;(v4) < (v5);++v4){
(v3[v4]) = v1();
}
}
let v7 = (()=>{
(v1) = 0;
v2();
v3();
v6();
});
}
}
// GenBlkBrick
for(let v0 = 0;(v0) < (v4);++v0){
var v8 = v3(v4);
// GenBlkBrick
for(var v9 = 0;(v9) < (5);v9++){
function v10(){
Number(0).toString(16);
Number(- 12).toString(16);
Number(13).toString(16);
Number(123456789).toString(16);
Number(1234567.89).toString(16);
Number(- 123456789).toString(16);
Number(- 1234567.89).toString(16);
}
// GenBlkBrick
for(var v11 = 0;(v11) < (5);v11++){
function v12(v1 = (2) * (v11)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
var v13 = v12(50);
}
}
}
(v8.__proto__) = v3(v5, v11);
// GenBlkBrick
for(var v14 = 0;(v14) < (5);v14++){
const v15 = 200;
function v16(){
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
while((v2.length) < (v15)){
v3(v14);
}
}
}
