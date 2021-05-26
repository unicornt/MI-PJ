load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3303138037394725211', ({}));
function setupArray(length){
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
codealchemist_log_type_pre('1447900311736507348', ({v1 : ((typeof setupArray) != ('undefined')) ? (setupArray) : (undefined)}));
const frozenArray = setupArray(200);
codealchemist_log_type_post('1447900311736507348', ({v0 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v1 : ((typeof setupArray) != ('undefined')) ? (setupArray) : (undefined)}));
codealchemist_log_type_pre('1036372023862195089', ({v4 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined)}));
function driverArrayIndexOf(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('2723149154653599801', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) < (n);i++){
codealchemist_log_type_pre('-7805968493689569811', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-244934499988798267', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += ((frozenArray.indexOf(('') + (i))) == (- 1)) ? (0) : (1);
codealchemist_log_type_post('-244934499988798267', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-7805968493689569811', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2723149154653599801', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('1036372023862195089', ({}));
codealchemist_log_type_pre('6848302637669060528', ({v1 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
function ArrayIndexOf(){
codealchemist_log_type_pre('-8399036745262485480', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
driverArrayIndexOf(1e4);
codealchemist_log_type_post('-8399036745262485480', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
}
codealchemist_log_type_post('6848302637669060528', ({}));
codealchemist_log_type_pre('-993708076935335840', ({v1 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
function ArrayIndexOfWarmUp(){
codealchemist_log_type_pre('-13791236498514422', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
driverArrayIndexOf(1e1);
codealchemist_log_type_post('-13791236498514422', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
codealchemist_log_type_pre('33725927228587217', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
driverArrayIndexOf(1e2);
codealchemist_log_type_post('33725927228587217', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
codealchemist_log_type_pre('-5751692830476515912', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
driverArrayIndexOf(1e3);
codealchemist_log_type_post('-5751692830476515912', ({v0 : ((typeof driverArrayIndexOf) != ('undefined')) ? (driverArrayIndexOf) : (undefined)}));
}
codealchemist_log_type_post('-993708076935335840', ({}));
codealchemist_log_type_pre('4090139086787485320', ({v1 : ((typeof ArrayIndexOf) != ('undefined')) ? (ArrayIndexOf) : (undefined), v2 : ((typeof ArrayIndexOfWarmUp) != ('undefined')) ? (ArrayIndexOfWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('ArrayIndexOf', 10, ArrayIndexOf, ArrayIndexOfWarmUp);
codealchemist_log_type_post('4090139086787485320', ({v1 : ((typeof ArrayIndexOf) != ('undefined')) ? (ArrayIndexOf) : (undefined), v2 : ((typeof ArrayIndexOfWarmUp) != ('undefined')) ? (ArrayIndexOfWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('5544218522075060464', ({v4 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined)}));
function driverArrayIncludes(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3529128233118725030', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) < (n);i++){
codealchemist_log_type_pre('-3067253550113567577', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-1947624537567720472', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += (frozenArray.includes(('') + (i))) ? (0) : (1);
codealchemist_log_type_post('-1947624537567720472', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3067253550113567577', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3529128233118725030', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('5544218522075060464', ({}));
codealchemist_log_type_pre('6848302637669060528', ({v1 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
function ArrayIncludes(){
codealchemist_log_type_pre('-8399036745262485480', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
driverArrayIncludes(1e4);
codealchemist_log_type_post('-8399036745262485480', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
}
codealchemist_log_type_post('6848302637669060528', ({}));
codealchemist_log_type_pre('-993708076935335840', ({v1 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
function ArrayIncludesWarmUp(){
codealchemist_log_type_pre('-13791236498514422', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
driverArrayIncludes(1e1);
codealchemist_log_type_post('-13791236498514422', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
codealchemist_log_type_pre('33725927228587217', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
driverArrayIncludes(1e2);
codealchemist_log_type_post('33725927228587217', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
codealchemist_log_type_pre('-5751692830476515912', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
driverArrayIncludes(1e3);
codealchemist_log_type_post('-5751692830476515912', ({v0 : ((typeof driverArrayIncludes) != ('undefined')) ? (driverArrayIncludes) : (undefined)}));
}
codealchemist_log_type_post('-993708076935335840', ({}));
codealchemist_log_type_pre('-8486588981757879453', ({v1 : ((typeof ArrayIncludes) != ('undefined')) ? (ArrayIncludes) : (undefined), v2 : ((typeof ArrayIncludesWarmUp) != ('undefined')) ? (ArrayIncludesWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('ArrayIncludes', 10, ArrayIncludes, ArrayIncludesWarmUp);
codealchemist_log_type_post('-8486588981757879453', ({v1 : ((typeof ArrayIncludes) != ('undefined')) ? (ArrayIncludes) : (undefined), v2 : ((typeof ArrayIncludesWarmUp) != ('undefined')) ? (ArrayIncludesWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
