function v0(v1, v2, v3){
return (v1.charAt(v3)) == (v1.charAt(v2));
}
function v1(v1, ...v2){
let v3 = 0;
for(let v4 = 0;(v4) < (v1.length);++v4){
(v3) += v1[v4].length;
}
return v3;
}
function v2(v1){
(v2) = [];
for(let v3 = 0;(v3) < (v1);++v3){
v2.push(Math.floor((Math.random()) * (v1)));
}
v0();
}
var v3 = v1(50);
function v4(v1){
let v2 = new Array(v1);
for(let v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
const v6 = v0(v5);
const v7 = v4(v5);
}
let v8 = (()=>v0(v3, 1000, v5));
for(var v9 = 0;(v9) < (v5);v9++){
(v3[v9]) = ('') + (v9);
}
