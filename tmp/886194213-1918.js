function v0(){
(v1) = /[Cz]/u;
(v2) = v3();
}
function v1(){
const v1 = ({1 : "foo"});
const v2 = 1;
for(var v3 = 0;(v3) < (1000);++v3){
const v4 = v1[v2];
}
}
function v2(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) += ((v4.hasOwnProperty(('') + (v3))) == (- 1)) ? (0) : (1);
}
return v2;
}
function v3(){
(v1) = /[Cz]/uy;
(v2) = v3();
}
function v4(v1, v2){
for(let v3 = 0;(v3) < (v2);++v3){
v1.push(v3);
}
}
let v5 = (()=>v2(v0, v4));
let v6 = (()=>v4(v2, v2));
function v7(v1){
v0(('Random') + (v1), 1000, v4, (()=>v3(v1)));
v0(('Sorted') + (v1), 1000, v4, (()=>v2(v1)));
}
