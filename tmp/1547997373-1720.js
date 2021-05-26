function v0(v1, v2){
return v1.includes(v2);
}
function v1(v1, v2){
return v0(v1, v2, ((v4)=>{
if(((v4) % (2)) == (0)){
return v4;
}
return ("key") + (v4);
}));
}
const v2 = v1('a'.repeat(100));
%NeverOptimizeFunction(v0);
let v3 = (v2) + ("+");
function v4(){
v0((()=>new Error("Simple Error")));
}
const v5 = "el";
let v6 = (()=>{
(v1) = 0;
v0();
v1();
v4();
});
