function v0(v1, v2){
for(let v3 = 0;(v3) < (v2);++v3){
v1.push((v2) - (v3));
}
}
let v1 = v0([]);
%NeverOptimizeFunction(v1);
function v2(){
(v1) = /([Cz])/g;
(v2) = v3();
}
function v3(){
(v1) = v2.reduceRight(v3, v2(v2));
}
let v4 = (()=>v3(v1, v0));
function v5(v1){
v4(('Random') + (v1), 1000, v0, (()=>v1(v1)));
v4(('Sorted') + (v1), 1000, v0, (()=>v3(v1)));
}
let v6 = (()=>v1(v0, v0));
