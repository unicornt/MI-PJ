let v0 = [].join("|");
let v1 = ("[\\u0080-\\ud7ff\\ue000-\\ufffd]|") + (v0);
function v2(){
var v1 = v2.flags;
}
let v3 = (((("(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|") + (v1)) + ("|")) + (v0)) + (")");
function v4(v1, v2){
return v2(v1, v2, ((v4)=>v4));
}
function v5(){
let v1;
while(((v1) = v2.exec(v0)) !== (null)){
(v4) = v1[0];
}
}
const v6 = "INTERN-prop";
let v7 = (()=>{
(v1) = 0;
v2();
v5();
v4();
});
