load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('7838083884550891431', ({}));
const subjects = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('6257012396774315177', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSlice(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('4431695805533260451', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-7533689158019858418', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-8023919563435361386', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.slice(1);
codealchemist_log_type_post('-8023919563435361386', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-7533689158019858418', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('4431695805533260451', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('6257012396774315177', ({}));
codealchemist_log_type_pre('8291952584640329295', ({v1 : ((typeof StringDropFirstSlice) != ('undefined')) ? (StringDropFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSlice', 5, StringDropFirstSlice);
codealchemist_log_type_post('8291952584640329295', ({v1 : ((typeof StringDropFirstSlice) != ('undefined')) ? (StringDropFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-7952214490185735538', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSubstr(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6010485868301813223', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-5631282548602208853', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-5585204485522133034', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substr(1);
codealchemist_log_type_post('-5585204485522133034', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-5631282548602208853', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('6010485868301813223', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-7952214490185735538', ({}));
codealchemist_log_type_pre('2748464221132552354', ({v1 : ((typeof StringDropFirstSubstr) != ('undefined')) ? (StringDropFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSubstr', 5, StringDropFirstSubstr);
codealchemist_log_type_post('2748464221132552354', ({v1 : ((typeof StringDropFirstSubstr) != ('undefined')) ? (StringDropFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-3776700882921968014', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSubstring(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-6332644237723247601', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('5641257000402023585', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('6925785725445029449', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substring(1);
codealchemist_log_type_post('6925785725445029449', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('5641257000402023585', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-6332644237723247601', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-3776700882921968014', ({}));
codealchemist_log_type_pre('-3950676552617821583', ({v1 : ((typeof StringDropFirstSubstring) != ('undefined')) ? (StringDropFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSubstring', 5, StringDropFirstSubstring);
codealchemist_log_type_post('-3950676552617821583', ({v1 : ((typeof StringDropFirstSubstring) != ('undefined')) ? (StringDropFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-2548336608731071571', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeFirstSlice(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('8587228831954896707', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('5598377311000596767', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-7782287094886713563', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.slice(0, 1);
codealchemist_log_type_post('-7782287094886713563', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('5598377311000596767', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('8587228831954896707', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2548336608731071571', ({}));
codealchemist_log_type_pre('-5952073961734812884', ({v1 : ((typeof StringTakeFirstSlice) != ('undefined')) ? (StringTakeFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeFirstSlice', 5, StringTakeFirstSlice);
codealchemist_log_type_post('-5952073961734812884', ({v1 : ((typeof StringTakeFirstSlice) != ('undefined')) ? (StringTakeFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-2932949095831820698', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeFirstSubstr(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('3496131003279534153', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-7343909955666990289', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('6845211655634717361', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substr(0, 1);
codealchemist_log_type_post('6845211655634717361', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-7343909955666990289', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('3496131003279534153', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2932949095831820698', ({}));
codealchemist_log_type_pre('5099943723648832321', ({v1 : ((typeof StringTakeFirstSubstr) != ('undefined')) ? (StringTakeFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeFirstSubstr', 5, StringTakeFirstSubstr);
codealchemist_log_type_post('5099943723648832321', ({v1 : ((typeof StringTakeFirstSubstr) != ('undefined')) ? (StringTakeFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-4499582374494475461', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeFirstSubstring(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4168455315212157007', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('737505209910668448', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('4228659479150787419', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substring(0, 1);
codealchemist_log_type_post('4228659479150787419', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('737505209910668448', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-4168455315212157007', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-4499582374494475461', ({}));
codealchemist_log_type_pre('2416332830393123342', ({v1 : ((typeof StringTakeFirstSubstring) != ('undefined')) ? (StringTakeFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeFirstSubstring', 5, StringTakeFirstSubstring);
codealchemist_log_type_post('2416332830393123342', ({v1 : ((typeof StringTakeFirstSubstring) != ('undefined')) ? (StringTakeFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('915364428271300706', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropLastSlice(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('4366477709288312244', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-9015985635894549194', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-2959896176762677187', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.slice(0, - 1);
codealchemist_log_type_post('-2959896176762677187', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-9015985635894549194', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('4366477709288312244', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('915364428271300706', ({}));
codealchemist_log_type_pre('-3691934858332091158', ({v1 : ((typeof StringDropLastSlice) != ('undefined')) ? (StringDropLastSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropLastSlice', 5, StringDropLastSlice);
codealchemist_log_type_post('-3691934858332091158', ({v1 : ((typeof StringDropLastSlice) != ('undefined')) ? (StringDropLastSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('1592211084095426463', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropLastSubstr(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-2790171870208698250', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('5706918473139881345', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('2701575365543711929', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substr(0, (s.length) - (1));
codealchemist_log_type_post('2701575365543711929', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('5706918473139881345', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-2790171870208698250', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('1592211084095426463', ({}));
codealchemist_log_type_pre('-2169028757746966791', ({v1 : ((typeof StringDropLastSubstr) != ('undefined')) ? (StringDropLastSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropLastSubstr', 5, StringDropLastSubstr);
codealchemist_log_type_post('-2169028757746966791', ({v1 : ((typeof StringDropLastSubstr) != ('undefined')) ? (StringDropLastSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-1559422820473686975', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropLastSubstring(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4439644409883173276', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-3940096018745516683', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('83084412123473844', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substring(0, (s.length) - (1));
codealchemist_log_type_post('83084412123473844', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-3940096018745516683', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-4439644409883173276', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-1559422820473686975', ({}));
codealchemist_log_type_pre('1917907207890368676', ({v1 : ((typeof StringDropLastSubstring) != ('undefined')) ? (StringDropLastSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropLastSubstring', 5, StringDropLastSubstring);
codealchemist_log_type_post('1917907207890368676', ({v1 : ((typeof StringDropLastSubstring) != ('undefined')) ? (StringDropLastSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-1683380754588464084', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeLastSlice(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('7213048697610179947', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-1874626824551669573', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('3709305338265449233', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.slice(- 1);
codealchemist_log_type_post('3709305338265449233', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-1874626824551669573', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('7213048697610179947', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-1683380754588464084', ({}));
codealchemist_log_type_pre('2615742238798230432', ({v1 : ((typeof StringTakeLastSlice) != ('undefined')) ? (StringTakeLastSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeLastSlice', 5, StringTakeLastSlice);
codealchemist_log_type_post('2615742238798230432', ({v1 : ((typeof StringTakeLastSlice) != ('undefined')) ? (StringTakeLastSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('880391607436870061', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeLastSubstr(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-8461610194904418928', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-7613586216303126512', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-7483177064454100096', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substr(- 1);
codealchemist_log_type_post('-7483177064454100096', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-7613586216303126512', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-8461610194904418928', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('880391607436870061', ({}));
codealchemist_log_type_pre('2059746293085822783', ({v1 : ((typeof StringTakeLastSubstr) != ('undefined')) ? (StringTakeLastSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeLastSubstr', 5, StringTakeLastSubstr);
codealchemist_log_type_post('2059746293085822783', ({v1 : ((typeof StringTakeLastSubstr) != ('undefined')) ? (StringTakeLastSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('4873993898365294804', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringTakeLastSubstring(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('220562211842458259', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('854087282961475384', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('384049054283527698', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substring((s.length) - (1), s.length);
codealchemist_log_type_post('384049054283527698', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('854087282961475384', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('220562211842458259', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('4873993898365294804', ({}));
codealchemist_log_type_pre('-1387128234609480329', ({v1 : ((typeof StringTakeLastSubstring) != ('undefined')) ? (StringTakeLastSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringTakeLastSubstring', 5, StringTakeLastSubstring);
codealchemist_log_type_post('-1387128234609480329', ({v1 : ((typeof StringTakeLastSubstring) != ('undefined')) ? (StringTakeLastSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('6936687430125426909', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSlice(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-5466307892569213387', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-305163531995050697', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-457138205693972465', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.slice(1, - 1);
codealchemist_log_type_post('-457138205693972465', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-305163531995050697', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-5466307892569213387', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('6936687430125426909', ({}));
codealchemist_log_type_pre('8291952584640329295', ({v1 : ((typeof StringDropFirstSlice) != ('undefined')) ? (StringDropFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSlice', 5, StringDropFirstSlice);
codealchemist_log_type_post('8291952584640329295', ({v1 : ((typeof StringDropFirstSlice) != ('undefined')) ? (StringDropFirstSlice) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('1032233337089641042', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSubstr(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('2705776471058863760', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-530909328891116390', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('-2151225126943231768', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substr(1, (s.length) - (2));
codealchemist_log_type_post('-2151225126943231768', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-530909328891116390', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('2705776471058863760', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('1032233337089641042', ({}));
codealchemist_log_type_pre('2748464221132552354', ({v1 : ((typeof StringDropFirstSubstr) != ('undefined')) ? (StringDropFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSubstr', 5, StringDropFirstSubstr);
codealchemist_log_type_post('2748464221132552354', ({v1 : ((typeof StringDropFirstSubstr) != ('undefined')) ? (StringDropFirstSubstr) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-8142413770314273156', ({v3 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
function StringDropFirstSubstring(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var sum = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-660593976891158062', ({v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (subjects.length);++j){
codealchemist_log_type_pre('-8599009564767130809', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
let s = subjects[j];
codealchemist_log_type_post('1185294362193301947', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined)}));
codealchemist_log_type_pre('5482814405591327952', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += s.substring(1, (s.length) - (1));
codealchemist_log_type_post('5482814405591327952', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8599009564767130809', ({v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-660593976891158062', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof s) != ('undefined')) ? (s) : (undefined), v1 : ((typeof subjects) != ('undefined')) ? (subjects) : (undefined), v3 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-8142413770314273156', ({}));
codealchemist_log_type_pre('-3950676552617821583', ({v1 : ((typeof StringDropFirstSubstring) != ('undefined')) ? (StringDropFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
createSuiteWithWarmup('StringDropFirstSubstring', 5, StringDropFirstSubstring);
codealchemist_log_type_post('-3950676552617821583', ({v1 : ((typeof StringDropFirstSubstring) != ('undefined')) ? (StringDropFirstSubstring) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
