function v0(){
(v1) = /([cZ])/y;
(v2) = v3();
}
function v1(v1, v2){
return ('𝌆') == (v1.charAt(v2));
}
function v2(v1){
(v2) = v3.reduceRight(((v4, v5, v6, v7)=>(v4) + (v1)));
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (5);v5++){
function v6(v1 = (2) * (v5)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>('s') + (v6)));
}
let v7 = v6([]);
}
}
}
function v8(v1){
return ((v2, v3)=>{
++v5;
if((v5) == ((v3) / (2))){
v1();
}
return v0(v2, v3);
});
}
// GenBlkBrick
for(var v9 = 0;(v9) < (5);v9++){
function v10(v1, v2){
(v3) = [];
v1(v3, v9);
v2(v3, v9);
}
}
function v11(){
v6(v3);
}
function v12(v1){
v0(('Random') + (v1), 1000, v10, (()=>v6(v1)));
v0(('Sorted') + (v1), 1000, v10, (()=>v8(v1)));
}
