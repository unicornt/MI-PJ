function v0(){
(v1) = /[cZ]/g;
(v2) = v3();
}
function v1(v1, v2){
return v0(v2, v1);
}
const v2 = [];
function v3(v1){
(v2) = [];
for(let v3 = 0;(v3) < (v1);++v3){
v2.push(v3);
}
v0();
}
let v4 = (()=>{
(v1) = 0;
v1();
v0();
v3();
});
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
let v6 = (()=>v3(v1, v1));
function v7(v1 = (2) * (v5)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
}
function v8(){
(v1) = new Array(v5);
for(let v4 = 0;(v4) < (v5);++v4){
(v1[v4]) = `value ${v2[v4]}`;
}
v0();
}
function v9(){
(v1) = Array.from(v2);
delete v1[0];
v4();
}
