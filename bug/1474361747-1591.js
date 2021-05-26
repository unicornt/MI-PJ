function v0(v1){
(v1.foo) = 0;
(v1.bar) = 0;
delete v1.foo;
delete v1.bar;
(v1[1e9]) = 0;
return v1;
}
var v1 = ({"Object.keys()" : v0((()=>{
return Object.keys(v3);
})), "for-in" : v0((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v0((()=>{
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
})), "for (i < Object.keys().length)" : v0((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v0((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
var v2 = v0(v1);
(v1) = v1.__proto__;
%NeverOptimizeFunction(v2);
let v3 = (()=>v2(v0, v0));
function v4(v1){
(v2) = v3.find(((v4, v5, v6)=>(v4) === (`value ${v1}`)));
}
let v5 = [].join("|");
