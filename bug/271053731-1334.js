const v0 = [];
function v1(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) = v0.map(Number);
}
return v2;
}
let v2 = v1((()=>v0.push(0.1)));
var v3 = ({"Object.keys()" : v1((()=>{
return Object.keys(v3);
})), "for-in" : v1((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v1((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
if(! v3.hasOwnProperty(v6)){
continue ;
}
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for (i < Object.keys().length)" : v1((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v1((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
%NeverOptimizeFunction(v2);
function v4(){
(v1) = Array.from(v0);
delete v1[0];
v1();
}
function v5(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v0.reduce(v1);
}
return v2;
}
function v6(){
v2(3);
}
