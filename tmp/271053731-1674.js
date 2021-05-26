const v0 = 2e4;
const v1 = [];
function v2(v1){
let v2 = 0;
for(var v3 = 0;(v3) < (v1);v3++){
(v2) += ((v1.indexOf(('') + (v3))) == (- 1)) ? (0) : (1);
}
return v2;
}
// GenBlkBrick
for(var v3 = 0;(v3) < (5);v3++){
const v4 = (v3) / (4);
}
(v4) += v3;
var v5 = v2(v3);
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
function v7(){
if((v1.length) !== ((v2.length) / (2))){
return true;
}
for(let v3 = 0;(v3) < ((v6) / (2));v3++){
if((v1[v3]) !== (v2[(v3) * (2)])){
return true;
}
}
}
function v8(v1, v2){
return v7(v1, v2, ((v4)=>{
if(((v4) % (2)) == (0)){
return v4;
}
return ("key") + (v4);
}));
}
}
let v9 = (()=>v7(v8, v2));
