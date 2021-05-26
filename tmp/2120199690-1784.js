let v0 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
function v1(){
(v1) = /[Cz]/;
(v2) = v3();
}
function v2(){
(v1) = v0.matchAll(v3);
}
let v3 = (()=>v2(v1, v1));
let v4 = (()=>v2(v1, v1));
function v5(v1, v2){
for(let v3 = 0;(v3) < (v2);++v3){
v1.push(v3);
}
}
function v6(v1){
return v1.startsWith(v0);
}
function v7(){
let v1 = - 1;
let v2 = 0;
const v3 = ((v4) == (null)) ? (0) : (v4.length);
const v5 = [];
while((++v1) < (v3)){
const v6 = v4[v1];
if(v7(v6, v1, v4)){
(v5[v2++]) = v6;
}
}
return v5;
}
