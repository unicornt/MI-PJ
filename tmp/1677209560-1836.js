var v0 = (()=>{
return Object.create(v2, v3);
});
// GenBlkBrick
for(var v1 = 0;(v1) < (5);v1++){
function v2(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);(v4) += 3){
(v2[v4]) = v4;
}
return v2;
}
}
function v3(){
(v1) = v2.filter(v3, v0(v2));
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
function v5(){
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
function v6(){
(v1) = /[Cz]/g;
(v2) = v3();
}
}
function v7(v1){
return ((v2, v3)=>{
++v4;
if((v4) == ((v1) / (2))){
v1();
}
return v6(v2, v3);
});
}
var v8 = v6((v4) + (v1));
const v9 = (v4) / (4);
function v10(v1, v2, v3){
var v4 = v2(v2);
var v6 = v4;
var v7 = 0;
for(var v8 = 0;(v8) < (v1);v8++){
(v7) += v2;
(v6.__proto__) = v2(v2, v7);
(v6) = v6.__proto__;
}
if((v3) === (false)){
(v6.__proto__) = new Proxy(({}), ({}));
}
return v4;
}
