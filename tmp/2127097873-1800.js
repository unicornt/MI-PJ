function v0(v1, v2){
return (v1.indexOf(v2)) !== (- 1);
}
function v1(){
let v1 = - 1;
const v2 = ((v3) == (null)) ? (0) : (v3.length);
for(let v1 = 0;(v1) < (v2);v1++){
const v4 = v3[v1];
if(v5(v4, v1, v3)){
(v6) = v4;
break ;
}
}
}
function v2(){
var v1 = arguments[0];
for(var v3 = 1;(v3) < (arguments.length);++v3){
(v1) += arguments[v3];
}
return v1;
}
let v3 = (()=>{
(v1) = 0;
v1();
v2();
v0();
});
function v4(){
(v1) = v2.some(v3, v1(v2));
}
let v5 = (()=>v3(v2, v2));
function v6(v1){
v4(('Random') + (v1), 1000, v1, (()=>v3(v1)));
v4(('Sorted') + (v1), 1000, v1, (()=>v5(v1)));
}
function v7(v1){
v5(('Random') + (v1), 1000, v4, (()=>v6(v1)));
v5(('Sorted') + (v1), 1000, v4, (()=>v1(v1)));
}
