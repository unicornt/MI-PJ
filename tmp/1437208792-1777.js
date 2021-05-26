function v0(){
var v1;
var v2 = 10240;
var v3 = ({});
for(var v4 = 0;(v4) < (v2);v4++){
(v1) = v3[("test") + (v2)];
}
}
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
function v2(v1){
(v2) = 0;
(v3) = [];
for(let v4 = 0;(v4) < (v1);++v4){
(v3[v4]) = v1();
}
}
}
function v3(v1, v2){
return v2(v1, v2, ((v4)=>v4));
}
let v4 = (()=>v0(v2, v2));
function v5(v1, v2){
for(let v3 = 0;(v3) < (v2);++v3){
v1.push(Math.floor((Math.random()) * (v2)));
}
}
function v6(){
v0(1e1);
v0(1e2);
v0(1e3);
}
let v7 = (()=>{
(v1) = 0;
v4();
v5();
v2();
});
function v8(){
v4(v1);
}
