load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3756418464944326122', ({v20 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v23 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
(function (){
codealchemist_log_type_pre('-6254088878912117047', ({}));
const kErrorCount = 100000;
codealchemist_log_type_post('-6254088878912117047', ({v0 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let errorsCreatedBySetup;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('-8277037293077404557', ({v5 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined)}));
function CreateErrors(fn){
codealchemist_log_type_pre('-5972112927478329196', ({}));
(counter) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(errorsCreatedBySetup) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('6821357954830515562', ({v2 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined)}));
for(let i = 0;(i) < (kErrorCount);++i){
codealchemist_log_type_pre('4066121759817011741', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v2 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-5473749807924162496', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v2 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(errorsCreatedBySetup[i]) = fn();
codealchemist_log_type_post('-5473749807924162496', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v2 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('4066121759817011741', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v2 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('6821357954830515562', ({v2 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined)}));
}
codealchemist_log_type_post('-8277037293077404557', ({}));
codealchemist_log_type_pre('352673009270015067', ({v1 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
function SimpleSetup(){
codealchemist_log_type_pre('4337133698837324663', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
CreateErrors((()=>new Error("Simple Error")));
codealchemist_log_type_post('4337133698837324663', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
}
codealchemist_log_type_post('352673009270015067', ({}));
codealchemist_log_type_pre('1661762617110070111', ({}));
class CustomError extends Error{
}
codealchemist_log_type_post('1661762617110070111', ({}));
;
codealchemist_log_type_pre('27917162051672773', ({v1 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined), v2 : ((typeof CustomError) != ('undefined')) ? (CustomError) : (undefined)}));
function CustomSetup(){
codealchemist_log_type_pre('1179185364040657853', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined), v1 : ((typeof CustomError) != ('undefined')) ? (CustomError) : (undefined)}));
CreateErrors((()=>new CustomError("Custom Error")));
codealchemist_log_type_post('1179185364040657853', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
}
codealchemist_log_type_post('27917162051672773', ({}));
codealchemist_log_type_pre('4361998223048792433', ({v7 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
function InlineSetup(){
codealchemist_log_type_pre('-511862332913132169', ({}));
function Inner(){
codealchemist_log_type_pre('-4388539357113807217', ({}));
var temp_4388539357113807217 = new Error("Throwing from inlined function!");
codealchemist_log_type_post('-4388539357113807217', ({}));
return temp_4388539357113807217;
}
codealchemist_log_type_post('-511862332913132169', ({}));
codealchemist_log_type_pre('8667424780976120254', ({v1 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
function Middle(){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
var temp_2196234077404683449 = Inner();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof Inner) != ('undefined')) ? (Inner) : (undefined)}));
return temp_2196234077404683449;
}
codealchemist_log_type_post('8667424780976120254', ({}));
codealchemist_log_type_pre('8667424780976120254', ({v1 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
function Outer(){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
var temp_2196234077404683449 = Middle();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof Middle) != ('undefined')) ? (Middle) : (undefined)}));
return temp_2196234077404683449;
}
codealchemist_log_type_post('8667424780976120254', ({}));
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
codealchemist_log_type_pre('-2240388102944650134', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined), v1 : ((typeof Outer) != ('undefined')) ? (Outer) : (undefined)}));
CreateErrors((()=>Outer()));
codealchemist_log_type_post('-2240388102944650134', ({v0 : ((typeof CreateErrors) != ('undefined')) ? (CreateErrors) : (undefined)}));
}
codealchemist_log_type_post('4361998223048792433', ({}));
codealchemist_log_type_pre('-2726206592431052336', ({}));
const kInitialRecursionValue = 12;
codealchemist_log_type_post('-2726206592431052336', ({v0 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
codealchemist_log_type_pre('6481459888475916189', ({v6 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v7 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined), v8 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
function RecursiveSetup(){
codealchemist_log_type_pre('-5972112927478329196', ({}));
(counter) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(errorsCreatedBySetup) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('3289669813784672918', ({v4 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v2 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
function StepOne(val){
codealchemist_log_type_pre('7910353295226144975', ({v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
if((val) <= (0)){
codealchemist_log_type_pre('-8004119849989827455', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('-3622515832670867609', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
errorsCreatedBySetup.push(new Error("Error in StepOne!"));
codealchemist_log_type_post('-3622515832670867609', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
return;
codealchemist_log_type_post('-8004119849989827455', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
}
codealchemist_log_type_post('7910353295226144975', ({v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-5770742916709001908', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepTwo((val) - (3));
codealchemist_log_type_post('-5770742916709001908', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-3443633603801980999', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepTwo((val) - (4));
codealchemist_log_type_post('-3443633603801980999', ({v0 : ((typeof StepTwo) != ('undefined')) ? (StepTwo) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
}
codealchemist_log_type_post('3289669813784672918', ({}));
codealchemist_log_type_pre('7219400574356679238', ({v4 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v2 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
function StepTwo(val){
codealchemist_log_type_pre('1611080675321517801', ({v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
if((val) <= (0)){
codealchemist_log_type_pre('4290194538309021441', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('1784660561131960790', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
errorsCreatedBySetup.push(new Error("Error in StepTwo!"));
codealchemist_log_type_post('1784660561131960790', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
return;
codealchemist_log_type_post('4290194538309021441', ({v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
}
codealchemist_log_type_post('1611080675321517801', ({v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v0 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-8566438542195281468', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepOne((val) - (1));
codealchemist_log_type_post('-8566438542195281468', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
codealchemist_log_type_pre('-6866043388016633480', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
StepOne((val) - (2));
codealchemist_log_type_post('-6866043388016633480', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof val) != ('undefined')) ? (val) : (undefined)}));
}
codealchemist_log_type_post('7219400574356679238', ({}));
codealchemist_log_type_pre('-7420113412538145846', ({v2 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v1 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined), v3 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
while((errorsCreatedBySetup.length) < (kErrorCount)){
codealchemist_log_type_pre('3909125431120928320', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
StepOne(kInitialRecursionValue);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
codealchemist_log_type_post('3909125431120928320', ({v0 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v1 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
}
codealchemist_log_type_post('-7420113412538145846', ({v2 : ((typeof StepOne) != ('undefined')) ? (StepOne) : (undefined), v0 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined), v1 : ((typeof kErrorCount) != ('undefined')) ? (kErrorCount) : (undefined), v3 : ((typeof kInitialRecursionValue) != ('undefined')) ? (kInitialRecursionValue) : (undefined)}));
}
codealchemist_log_type_post('6481459888475916189', ({}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let counter;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('3315750177807910190', ({v1 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v2 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
function SerializeStack(){
codealchemist_log_type_pre('-2430305165296449461', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
if((counter) < (errorsCreatedBySetup.length)){
codealchemist_log_type_pre('5475192300479467831', ({v2 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_pre('8186075481964404740', ({v2 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
%FlattenString(errorsCreatedBySetup[counter++].stack);
codealchemist_log_type_post('8186075481964404740', ({v2 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
codealchemist_log_type_post('5475192300479467831', ({v2 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
}else {
codealchemist_log_type_pre('8590431664271885957', ({}));
codealchemist_log_type_pre('-6686807808333062819', ({}));
%FlattenString(new Error().stack);
codealchemist_log_type_post('-6686807808333062819', ({}));
codealchemist_log_type_post('8590431664271885957', ({}));
}
codealchemist_log_type_post('-2430305165296449461', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof errorsCreatedBySetup) != ('undefined')) ? (errorsCreatedBySetup) : (undefined)}));
}
codealchemist_log_type_post('3315750177807910190', ({}));
codealchemist_log_type_pre('-7041435664183443292', ({v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v2 : ((typeof SimpleSetup) != ('undefined')) ? (SimpleSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Simple-Serialize-Error.stack', 1000, SerializeStack, SimpleSetup);
codealchemist_log_type_post('-7041435664183443292', ({v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v2 : ((typeof SimpleSetup) != ('undefined')) ? (SimpleSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('6829945742735461515', ({v2 : ((typeof CustomSetup) != ('undefined')) ? (CustomSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Custom-Serialize-Error.stack', 1000, SerializeStack, CustomSetup);
codealchemist_log_type_post('6829945742735461515', ({v2 : ((typeof CustomSetup) != ('undefined')) ? (CustomSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('7612414619340688207', ({v2 : ((typeof InlineSetup) != ('undefined')) ? (InlineSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Inline-Serialize-Error.stack', 1000, SerializeStack, InlineSetup);
codealchemist_log_type_post('7612414619340688207', ({v2 : ((typeof InlineSetup) != ('undefined')) ? (InlineSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('515256113819150704', ({v2 : ((typeof RecursiveSetup) != ('undefined')) ? (RecursiveSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Recursive-Serialize-Error.stack', 1000, SerializeStack, RecursiveSetup);
codealchemist_log_type_post('515256113819150704', ({v2 : ((typeof RecursiveSetup) != ('undefined')) ? (RecursiveSetup) : (undefined), v1 : ((typeof SerializeStack) != ('undefined')) ? (SerializeStack) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
})();
codealchemist_log_type_post('3756418464944326122', ({}));
