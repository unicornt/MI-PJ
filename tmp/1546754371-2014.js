function v0(){
new RegExp(/[Cz]/, "guiym");
}
function v1(){
(v1) = /[A-Za-z\u0080-\u00FF ]/;
(v2) = "hipopótamo maçã pólen ñ poção água língüa";
}
function v2(){
(v1) = v2.findIndex(v3, v0(v2));
}
let v3 = (()=>v2(v1, v0));
let v4 = (()=>v2(v0, v0));
function v5(v1){
v3(('Random') + (v1), 1000, v0, (()=>v1(v1)));
v3(('Sorted') + (v1), 1000, v0, (()=>v2(v1)));
}
let v6 = (()=>v4(v3, v3));
var v7 = ({"Object.keys()" : v2((()=>{
return Object.keys(v3);
})), "for-in" : v2((()=>{
var v4 = 0;
var v5;
for(var v6 in v3){
v4++;
(v5) = v3[v6];
}
;
return [];
})), "for-in hasOwnProperty()" : v2((()=>{
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
})), "for (i < Object.keys().length)" : v2((()=>{
var v4 = 0;
var v5;
var v7 = Object.keys(v3);
for(var v8 = 0;(v8) < (v7.length);v8++){
v4++;
(v5) = v3[v7[v8]];
}
;
return [];
})), "Object.keys().forEach()" : v2((()=>{
var v4 = 0;
var v5;
Object.keys(v3).forEach(((v9, v10, v11)=>{
v4++;
(v5) = v9;
}));
return [];
}))});
