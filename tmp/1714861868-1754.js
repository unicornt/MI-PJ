function v0(){
(v1) = /[A-Za-z\u0080-\u00FF ]/;
(v2) = "hipopótamo maçã pólen ñ poção água língüa";
}
function v1(v1, v2, v3, v4){
var v5 = v3;
var v6 = ((v2) + (" ")) + (v4);
var v7 = v1(v5);
return new v8(v6, false, false, 0, v7);
}
const v2 = 1024;
function v3(v1 = (2) * (v2)){
v0(v1);
v1();
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);v4++){
var v5 = v3(50);
}
for(let v0 = 0;(v0) < (v2);v0++){
(v5[v0]) = ('') + (v0);
}
function v6(){
(v1) = Array.from(v5);
Object.defineProperty(v1, (v4) - (2), ({get : (()=>this.foo), set : ((v6)=>(this.foo) = v6)}));
v3();
}
function v7(v1){
(v2) = [];
for(let v3 = 0;(v3) < (v1);++v3){
v2.push(Math.floor((Math.random()) * (v1)));
}
v1();
}
