load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('5503188845104730482', ({}));
function setupArrayReduce(length){
codealchemist_log_type_pre('3108214989096593263', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let a = new Array(length);
codealchemist_log_type_post('3108214989096593263', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('6071077571428534722', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);i++){
codealchemist_log_type_pre('5781058428376479252', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('3761686207159839155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(a[i]) = ('') + (i);
codealchemist_log_type_post('3761686207159839155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('5781058428376479252', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('6071077571428534722', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-3330799748240046220', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
var temp_3330799748240046220 = Object.freeze(a);
codealchemist_log_type_post('-3330799748240046220', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
return temp_3330799748240046220;
}
codealchemist_log_type_post('5503188845104730482', ({}));
codealchemist_log_type_pre('553371821692394843', ({}));
const kArraylength = 200;
codealchemist_log_type_post('553371821692394843', ({v0 : ((typeof kArraylength) != ('undefined')) ? (kArraylength) : (undefined)}));
codealchemist_log_type_pre('-2227645541896689336', ({v2 : ((typeof kArraylength) != ('undefined')) ? (kArraylength) : (undefined), v1 : ((typeof setupArrayReduce) != ('undefined')) ? (setupArrayReduce) : (undefined)}));
const frozenArrayReduce = setupArrayReduce(kArraylength);
codealchemist_log_type_post('-2227645541896689336', ({v0 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof kArraylength) != ('undefined')) ? (kArraylength) : (undefined), v1 : ((typeof setupArrayReduce) != ('undefined')) ? (setupArrayReduce) : (undefined)}));
codealchemist_log_type_pre('-7708161943510574975', ({}));
const reducer = ((accumulator, currentValue)=>(accumulator) + (Number(currentValue)));
codealchemist_log_type_post('-7708161943510574975', ({v0 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
codealchemist_log_type_pre('-2217964638790143374', ({v4 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v5 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
function driverArrayReduce(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-8569364446782861932', ({v3 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v4 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
for(let i = 0;(i) < (n);i++){
codealchemist_log_type_pre('-4422104794854156649', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
codealchemist_log_type_pre('6131069197662730151', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
(result) = frozenArrayReduce.reduce(reducer);
codealchemist_log_type_post('6131069197662730151', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-4422104794854156649', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-8569364446782861932', ({v3 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v4 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2217964638790143374', ({}));
codealchemist_log_type_pre('-2209422412347338036', ({}));
const kIterations = 1e3;
codealchemist_log_type_post('-2209422412347338036', ({v0 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
codealchemist_log_type_pre('1335033636361262848', ({v1 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v2 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
function ArrayReduce(){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
driverArrayReduce(kIterations);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
}
codealchemist_log_type_post('1335033636361262848', ({}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const kIterationsWarmUp = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
codealchemist_log_type_pre('7328416698295237366', ({v1 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v2 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
function ArrayReduceWarmUp(){
codealchemist_log_type_pre('8134944168993442721', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
driverArrayReduce(kIterationsWarmUp[0]);
codealchemist_log_type_post('8134944168993442721', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
codealchemist_log_type_pre('-5884183629529882657', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
driverArrayReduce(kIterationsWarmUp[1]);
codealchemist_log_type_post('-5884183629529882657', ({v0 : ((typeof driverArrayReduce) != ('undefined')) ? (driverArrayReduce) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
}
codealchemist_log_type_post('7328416698295237366', ({}));
codealchemist_log_type_pre('-7035390978527676454', ({}));
const kRun = 1e1;
codealchemist_log_type_post('-7035390978527676454', ({v0 : ((typeof kRun) != ('undefined')) ? (kRun) : (undefined)}));
codealchemist_log_type_pre('-6888097666987596348', ({v2 : ((typeof ArrayReduce) != ('undefined')) ? (ArrayReduce) : (undefined), v3 : ((typeof ArrayReduceWarmUp) != ('undefined')) ? (ArrayReduceWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof kRun) != ('undefined')) ? (kRun) : (undefined)}));
createSuite('ArrayReduce', kRun, ArrayReduce, ArrayReduceWarmUp);
codealchemist_log_type_post('-6888097666987596348', ({v2 : ((typeof ArrayReduce) != ('undefined')) ? (ArrayReduce) : (undefined), v3 : ((typeof ArrayReduceWarmUp) != ('undefined')) ? (ArrayReduceWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof kRun) != ('undefined')) ? (kRun) : (undefined)}));
codealchemist_log_type_pre('908593395549576463', ({v4 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v5 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
function driverArrayReduceRight(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('6453564220547853037', ({v3 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v4 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
for(let i = 0;(i) < (n);i++){
codealchemist_log_type_pre('-3452459632872653148', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
codealchemist_log_type_pre('3149687531012261974', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined)}));
(result) = frozenArrayReduce.reduceRight(reducer);
codealchemist_log_type_post('3149687531012261974', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3452459632872653148', ({v1 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v2 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('6453564220547853037', ({v3 : ((typeof frozenArrayReduce) != ('undefined')) ? (frozenArrayReduce) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v4 : ((typeof reducer) != ('undefined')) ? (reducer) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('908593395549576463', ({}));
codealchemist_log_type_pre('1335033636361262848', ({v1 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v2 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
function ArrayReduceRight(){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
driverArrayReduceRight(kIterations);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterations) != ('undefined')) ? (kIterations) : (undefined)}));
}
codealchemist_log_type_post('1335033636361262848', ({}));
codealchemist_log_type_pre('7328416698295237366', ({v1 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v2 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
function ArrayReduceRightWarmUp(){
codealchemist_log_type_pre('8134944168993442721', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
driverArrayReduceRight(kIterationsWarmUp[0]);
codealchemist_log_type_post('8134944168993442721', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
codealchemist_log_type_pre('-5884183629529882657', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
driverArrayReduceRight(kIterationsWarmUp[1]);
codealchemist_log_type_post('-5884183629529882657', ({v0 : ((typeof driverArrayReduceRight) != ('undefined')) ? (driverArrayReduceRight) : (undefined), v1 : ((typeof kIterationsWarmUp) != ('undefined')) ? (kIterationsWarmUp) : (undefined)}));
}
codealchemist_log_type_post('7328416698295237366', ({}));
codealchemist_log_type_pre('-7075821845239874878', ({v2 : ((typeof ArrayReduceRight) != ('undefined')) ? (ArrayReduceRight) : (undefined), v3 : ((typeof ArrayReduceRightWarmUp) != ('undefined')) ? (ArrayReduceRightWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof kRun) != ('undefined')) ? (kRun) : (undefined)}));
createSuite('ArrayReduceRight', kRun, ArrayReduceRight, ArrayReduceRightWarmUp);
codealchemist_log_type_post('-7075821845239874878', ({v2 : ((typeof ArrayReduceRight) != ('undefined')) ? (ArrayReduceRight) : (undefined), v3 : ((typeof ArrayReduceRightWarmUp) != ('undefined')) ? (ArrayReduceRightWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof kRun) != ('undefined')) ? (kRun) : (undefined)}));
