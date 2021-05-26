const v0 = /[α-ζ]/i;
function v1(){
v0.test("βκςΑφabcdeβκEFGαοςερκ");
}
function v2(){
let v1 = - 1;
const v2 = ((v3) == (null)) ? (0) : (v3.length);
const v4 = new Array(v2);
while((++v1) < (v2)){
(v4[v1]) = v6(v3[v1], v1, v3);
}
return v4;
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
function v4(v1 = (2) * (v3)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
function v5(v1, v2){
new v3(v2, [], []);
}
}
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
function v7(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
function v8(){
v7(1e3);
}
}
function v9(v1){
v4(('Random') + (v1), 1000, v2, (()=>v1(v1)));
v4(('Sorted') + (v1), 1000, v2, (()=>v5(v1)));
}
// GenBlkBrick
for(var v10 = 0;(v10) < (5);v10++){
function v11(v1 = (2) * (v10)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
}
function v12(v1){
v7(('Random') + (v1), 1000, v9, (()=>v8(v1)));
v7(('Sorted') + (v1), 1000, v9, (()=>v11(v1)));
}
