function v0(){
(v1) = /[Cz]/;
(v2) = "";
}
const v1 = (()=>(v1) = /./g);
function v2(v1, v2){
if((v1) < (v2)){
return - 1;
}
if((v2) < (v1)){
return 1;
}
return 0;
}
let v3 = (()=>v2(v0, v0));
let v4 = (()=>v3(v2, v0));
%NeverOptimizeFunction(v3);
function v5(v1, v2){
return (v1.indexOf(v2)) !== (- 1);
}
function v6(v1){
v0(('Random') + (v1), 1000, v4, (()=>v2(v1)));
v0(('Sorted') + (v1), 1000, v4, (()=>v1(v1)));
}
