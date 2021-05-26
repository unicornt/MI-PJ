let v0 = "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)";
function v1(v1){
var v2 = new Array(v1);
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v4]) = ('') + (v4);
}
return Object.freeze(v2);
}
let v2 = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?";
const v3 = 'äϠ�𝌆 Lorem ipsum test test';
function v4(v1){
return (v1[0]) === (v2);
}
let v5 = (((("(?:[a-zA-Z0-9_-]|") + (v2)) + ("|")) + (v3)) + (")");
let v6 = (("(?!url[(])") + (v0)) + ("[(]");
let v7 = (()=>v1(v4, v4));
