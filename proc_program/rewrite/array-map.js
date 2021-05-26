load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3303138037394725211', ({}));
function setupArrayMap(length){
codealchemist_log_type_pre('9143866055438896542', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
var a = new Array(length);
codealchemist_log_type_post('9143866055438896542', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('8073003234329091987', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(var i = 0;(i) < (length);i++){
codealchemist_log_type_pre('5781058428376479252', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('3761686207159839155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(a[i]) = ('') + (i);
codealchemist_log_type_post('3761686207159839155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('5781058428376479252', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8073003234329091987', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-3330799748240046220', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
var temp_3330799748240046220 = Object.freeze(a);
codealchemist_log_type_post('-3330799748240046220', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
return temp_3330799748240046220;
}
codealchemist_log_type_post('3303138037394725211', ({}));
codealchemist_log_type_pre('1447900311736507348', ({v1 : ((typeof setupArrayMap) != ('undefined')) ? (setupArrayMap) : (undefined)}));
const frozenArrayMap = setupArrayMap(200);
codealchemist_log_type_post('1447900311736507348', ({v0 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined), v1 : ((typeof setupArrayMap) != ('undefined')) ? (setupArrayMap) : (undefined)}));
codealchemist_log_type_pre('573541753814602477', ({v4 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined)}));
function driverArrayMap(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('7980811109183496708', ({v3 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
for(var i = 0;(i) < (n);i++){
codealchemist_log_type_pre('6328350744714522284', ({v1 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined)}));
codealchemist_log_type_pre('8889296922714012354', ({v1 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined)}));
(result) = frozenArrayMap.map(Number);
codealchemist_log_type_post('8889296922714012354', ({v1 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('6328350744714522284', ({v1 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7980811109183496708', ({v3 : ((typeof frozenArrayMap) != ('undefined')) ? (frozenArrayMap) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('573541753814602477', ({}));
codealchemist_log_type_pre('2818694195511618972', ({v1 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
function ArrayMap(){
codealchemist_log_type_pre('-5751692830476515912', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
driverArrayMap(1e3);
codealchemist_log_type_post('-5751692830476515912', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
}
codealchemist_log_type_post('2818694195511618972', ({}));
codealchemist_log_type_pre('5976173339270472259', ({v1 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
function ArrayMapWarmUp(){
codealchemist_log_type_pre('-13791236498514422', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
driverArrayMap(1e1);
codealchemist_log_type_post('-13791236498514422', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
codealchemist_log_type_pre('33725927228587217', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
driverArrayMap(1e2);
codealchemist_log_type_post('33725927228587217', ({v0 : ((typeof driverArrayMap) != ('undefined')) ? (driverArrayMap) : (undefined)}));
}
codealchemist_log_type_post('5976173339270472259', ({}));
codealchemist_log_type_pre('-1392910396240227516', ({v1 : ((typeof ArrayMap) != ('undefined')) ? (ArrayMap) : (undefined), v2 : ((typeof ArrayMapWarmUp) != ('undefined')) ? (ArrayMapWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('ArrayMap', 10, ArrayMap, ArrayMapWarmUp);
codealchemist_log_type_post('-1392910396240227516', ({v1 : ((typeof ArrayMap) != ('undefined')) ? (ArrayMap) : (undefined), v2 : ((typeof ArrayMapWarmUp) != ('undefined')) ? (ArrayMapWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
