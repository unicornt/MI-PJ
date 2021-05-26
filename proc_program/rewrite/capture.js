load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-2641492774847354794', ({v14 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v15 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
(function (){
codealchemist_log_type_pre('1466114040773991830', ({}));
function Simple(){
codealchemist_log_type_pre('1164053836815482890', ({}));
new Error("Simple Error");
codealchemist_log_type_post('1164053836815482890', ({}));
}
codealchemist_log_type_post('1466114040773991830', ({}));
codealchemist_log_type_pre('1661762617110070111', ({}));
class CustomError extends Error{
}
codealchemist_log_type_post('1661762617110070111', ({}));
;
codealchemist_log_type_pre('-9123856707951447374', ({v1 : ((typeof CustomError) != ('undefined')) ? (CustomError) : (undefined)}));
function Custom(){
codealchemist_log_type_pre('-9004794803719523336', ({v0 : ((typeof CustomError) != ('undefined')) ? (CustomError) : (undefined)}));
new CustomError("Custom Error");
codealchemist_log_type_post('-9004794803719523336', ({v0 : ((typeof CustomError) != ('undefined')) ? (CustomError) : (undefined)}));
}
codealchemist_log_type_post('-9123856707951447374', ({}));
codealchemist_log_type_pre('7163615961500241289', ({}));
function Inline(){
codealchemist_log_type_pre('-6904215100466907660', ({}));
function Inner(){
codealchemist_log_type_pre('-236604640756388690', ({}));
new Error("Error from inlined function!");
codealchemist_log_type_post('-236604640756388690', ({}));
}
codealchemist_log_type_post('-6904215100466907660', ({}));
codealchemist_log_type_pre('3523353627810839495', ({v1 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
function Middle(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
Inner();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
}
codealchemist_log_type_post('3523353627810839495', ({}));
codealchemist_log_type_pre('3523353627810839495', ({v1 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
function Outer(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
Middle();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
}
codealchemist_log_type_post('3523353627810839495', ({}));
codealchemist_log_type_pre('-2720962835941863676', ({v1 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
%PrepareFunctionForOptimization(Outer);
codealchemist_log_type_post('-2720962835941863676', ({v1 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
Outer();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
Outer();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
codealchemist_log_type_pre('-4470248593654286346', ({v1 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
%OptimizeFunctionOnNextCall(Outer);
codealchemist_log_type_post('-4470248593654286346', ({v1 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
Outer();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
}
codealchemist_log_type_post('7163615961500241289', ({}));
codealchemist_log_type_pre('-5977464602555164890', ({}));
const kInitialRecursionValue = 10;
codealchemist_log_type_post('-5977464602555164890', ({v0 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
codealchemist_log_type_pre('-6439552322208740248', ({v4 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v5 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
function Recursive(){
codealchemist_log_type_pre('6523773006530463699', ({v3 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined)}));
function StepOne(val){
codealchemist_log_type_pre('-7842914714035068504', ({v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
if((val) <= (0)){
codealchemist_log_type_pre('-3204587799002486093', ({}));
var temp_3204587799002486093 = new Error("Error in StepOne!");
codealchemist_log_type_post('-3204587799002486093', ({}));
return temp_3204587799002486093;
}
codealchemist_log_type_post('-7842914714035068504', ({v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-5770742916709001908', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepTwo((val) - (3));
codealchemist_log_type_post('-5770742916709001908', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-3443633603801980999', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepTwo((val) - (4));
codealchemist_log_type_post('-3443633603801980999', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
}
codealchemist_log_type_post('6523773006530463699', ({}));
codealchemist_log_type_pre('1546828737285397091', ({v3 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined)}));
function StepTwo(val){
codealchemist_log_type_pre('3462775678574972887', ({v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
if((val) <= (0)){
codealchemist_log_type_pre('2251441063065649259', ({}));
var temp_2251441063065649259 = new Error("Error in StepTwo!");
codealchemist_log_type_post('2251441063065649259', ({}));
return temp_2251441063065649259;
}
codealchemist_log_type_post('3462775678574972887', ({v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-8566438542195281468', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepOne((val) - (1));
codealchemist_log_type_post('-8566438542195281468', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-6866043388016633480', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepOne((val) - (2));
codealchemist_log_type_post('-6866043388016633480', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
}
codealchemist_log_type_post('1546828737285397091', ({}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
StepOne(kInitialRecursionValue);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
}
codealchemist_log_type_post('-6439552322208740248', ({}));
codealchemist_log_type_pre('8849329020811002998', ({v1 : ((typeof Simple) != ('undefined')) ? (Simple) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Simple-Capture-Error', 1000, Simple, (()=>{
}));
codealchemist_log_type_post('8849329020811002998', ({v1 : ((typeof Simple) != ('undefined')) ? (Simple) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-7079784347249997013', ({v1 : ((typeof Custom) != ('undefined')) ? (Custom) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Custom-Capture-Error', 1000, Custom, (()=>{
}));
codealchemist_log_type_post('-7079784347249997013', ({v1 : ((typeof Custom) != ('undefined')) ? (Custom) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('3341616581536589186', ({v1 : ((typeof Inline) != ('undefined')) ? (Inline) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Inline-Capture-Error', 1000, Inline, (()=>{
}));
codealchemist_log_type_post('3341616581536589186', ({v1 : ((typeof Inline) != ('undefined')) ? (Inline) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-4492678852430546546', ({v1 : ((typeof Recursive) != ('undefined')) ? (Recursive) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Recursive-Capture-Error', 1000, Recursive, (()=>{
}));
codealchemist_log_type_post('-4492678852430546546', ({v1 : ((typeof Recursive) != ('undefined')) ? (Recursive) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
})();
codealchemist_log_type_post('-2641492774847354794', ({}));
