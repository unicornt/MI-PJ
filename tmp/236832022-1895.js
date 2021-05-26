function v0(){
var v1 = arguments[0];
for(var v3 = 1;(v3) < (arguments.length);++v3){
(v1) += arguments[v3];
}
return v1;
}
function v1(v1, v2){
return ('t') == (v1.charAt(v2));
}
let v2 = (()=>v0(v1, v1));
function v3(){
v2(1e3);
}
function v4(){
v3((()=>new Error("Simple Error")));
}
function v5(){
(v1) = v2.reduce(v3, v1(v2));
}
function v6(){
/[α-ζ]/i.test("βκςΑφabcdeβκEFGαοςερκ");
}
let v7 = (()=>{
(v1) = 0;
v0();
v3();
v5();
});
