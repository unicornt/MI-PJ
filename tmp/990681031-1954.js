// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
function v1(v1 = (2) * (v0)){
(v3) = Array.from(({length : v1}), ((v5, v6)=>({})));
}
function v2(v1, v2){
new v3(v1, [], []);
}
}
function v3(v1 = (2) * (v0)){
v2(v1);
v1();
}
var v4 = v2(5);
(v4) = v4.__proto__;
function v5(v1 = (2) * (v0)){
v3(v1);
v1();
}
(v4.__proto__) = new Proxy(({}), ({}));
// GenBlkBrick
for(var v6 = 0;(v6) < (5);v6++){
let v7 = (()=>v5(v2, v1));
}
{
(v0) += v6;
(v4.__proto__) = v3(v6, v0);
(v4) = v4.__proto__;
}
