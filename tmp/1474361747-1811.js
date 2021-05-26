function v0(v1, v2, v3, v4, v5 = (()=>{
})){
let v6 = (()=>{
(v7) = 0;
v4();
v3();
v5();
});
return v8(v1, v2, v6);
}
function v1(v1, v2, v3){
if((v2) === (undefined)){
(v2) = 0;
}
if((v3) === (undefined)){
(v3) = ((v5)=>{
return ("key") + (v5);
});
}
var v6 = ({});
for(var v5 = 0;(v5) < (v1);v5++){
var v7 = v3((v5) + (v2));
(v6[v7]) = "value";
}
return v6;
}
function v2(){
const v1 = ({1 : "foo"});
const v2 = 1;
for(var v3 = 0;(v3) < (1000);++v3){
const v4 = v1[v2];
}
}
const v3 = v2(100);
function v4(){
(v1) = Array.from(v3, ((v4, v5)=>`value ${v4}`));
v1();
}
function v5(v1){
let v2 = 0;
for(let v3 = 0;(v3) < (v1);v3++){
(v2) = v3.reduce(v1);
}
return v2;
}
let v6 = (()=>{
(v1) = 0;
v0();
v2();
v4();
});
let v7 = (()=>v0(v5, v5));
