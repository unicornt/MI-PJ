function v0(v1){
(v2) = v3.filter(((v4, v5, v6)=>(v1) === (3)));
}
function v1(v1, ...v2){
let v3 = 0;
for(let v4 = 0;(v4) < (v1.length);++v4){
(v3) += v1[v4].length;
}
return v3;
}
const v2 = "DEINTERN-prop";
function v3(){
(v1) = v2.reduce(v3, v0(v2));
}
function v4(){
(v1) = /[cZ]/;
(v2) = v3();
}
function v5(v1, v2, v3){
let v4 = 0;
while(true){
for(let v5 = 0;(v5) < (v2);++v5){
v1.push(v5);
if((++v4) >= (v3)){
return;
}
}
for(let v5 = 0;(v5) < (v2);++v5){
v1.push((v2) - (v5));
if((++v4) >= (v3)){
return;
}
}
}
}
function v6(v1){
v0(('Random') + (v1), 1000, v3, (()=>v5(v1)));
v0(('Sorted') + (v1), 1000, v3, (()=>v4(v1)));
}
// GenBlkBrick
for(var v7 = 0;(v7) < (5);v7++){
// GenBlkBrick
for(var v8 = 0;(v8) < (5);v8++){
function v9(v1){
(v2) = v3.reduce(((v4, v5, v6, v7)=>(v4) + (v1)));
}
// GenBlkBrick
for(var v10 = 0;(v10) < (5);v10++){
let v11 = "\\uFEFF";
}
}
}
