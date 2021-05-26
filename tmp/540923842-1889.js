function v0(){
var v1 = v2.flags;
}
function v1(v1){
return (()=>{
for(var v2 = 0;(v2) < (v1.length);v2++){
v1[v2]();
}
});
}
let v2 = (()=>v1(v0, v0));
function v3(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
let v4 = (()=>v1(v0, v0));
let v5 = (()=>v1(v2, v3));
let v6 = (()=>{
(v1) = 0;
v2();
v3();
v5();
});
let v7 = (()=>v5(v3, v3));
