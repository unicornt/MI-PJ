load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4316521030236392899', ({}));
const input = 'äϠ�𝌆 Lorem ipsum test test';
codealchemist_log_type_post('4316521030236392899', ({v0 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
codealchemist_log_type_pre('3220146018060406622', ({v4 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
function helper(fn){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('8757669516785777213', ({v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof input) != ('undefined')) ? (input) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var i = 0;(i) < (input.length);i++){
codealchemist_log_type_pre('-3073870901766783448', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('8699192355763971610', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += fn(input, i, i);
codealchemist_log_type_post('8699192355763971610', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-3073870901766783448', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('8757669516785777213', ({v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof input) != ('undefined')) ? (input) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('3220146018060406622', ({}));
codealchemist_log_type_pre('5977522619712732299', ({}));
function charCodeAt(str, i){
codealchemist_log_type_pre('-202570881671443646', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_202570881671443646 = (str.charCodeAt(i)) === (116);
codealchemist_log_type_post('-202570881671443646', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_202570881671443646;
}
codealchemist_log_type_post('5977522619712732299', ({}));
codealchemist_log_type_pre('-5831686839670754762', ({}));
function charCodeAtBoth(str, i, j){
codealchemist_log_type_pre('-2494254075808766616', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_2494254075808766616 = (str.charCodeAt(j)) == (str.charCodeAt(i));
codealchemist_log_type_post('-2494254075808766616', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_2494254075808766616;
}
codealchemist_log_type_post('-5831686839670754762', ({}));
codealchemist_log_type_pre('-6761642697901471945', ({}));
function charAt(str, i){
codealchemist_log_type_pre('-5762454521604315177', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_5762454521604315177 = ('t') == (str.charAt(i));
codealchemist_log_type_post('-5762454521604315177', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_5762454521604315177;
}
codealchemist_log_type_post('-6761642697901471945', ({}));
codealchemist_log_type_pre('-5148203613105759472', ({}));
function charAtNever(str, i){
codealchemist_log_type_pre('-2266842172701990242', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_2266842172701990242 = ('𝌆') == (str.charAt(i));
codealchemist_log_type_post('-2266842172701990242', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_2266842172701990242;
}
codealchemist_log_type_post('-5148203613105759472', ({}));
codealchemist_log_type_pre('8232895187690769847', ({}));
function charAtBoth(str, i, j){
codealchemist_log_type_pre('-6114669901979174091', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_6114669901979174091 = (str.charAt(j)) == (str.charAt(i));
codealchemist_log_type_post('-6114669901979174091', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_6114669901979174091;
}
codealchemist_log_type_post('8232895187690769847', ({}));
codealchemist_log_type_pre('-4105009861604085100', ({}));
function stringIndex(str, i){
codealchemist_log_type_pre('-6198449520554273206', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
var temp_6198449520554273206 = (str[i]) === ('t');
codealchemist_log_type_post('-6198449520554273206', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
return temp_6198449520554273206;
}
codealchemist_log_type_post('-4105009861604085100', ({}));
codealchemist_log_type_pre('3090331208169328576', ({v2 : ((typeof charCodeAt) != ('undefined')) ? (charCodeAt) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('charCodeAt_const', 1, (()=>helper(charCodeAt)));
codealchemist_log_type_post('3090331208169328576', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('4241034130624757091', ({v2 : ((typeof charCodeAtBoth) != ('undefined')) ? (charCodeAtBoth) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('charCodeAt_both', 1, (()=>helper(charCodeAtBoth)));
codealchemist_log_type_post('4241034130624757091', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('6289242016836357150', ({v2 : ((typeof charAt) != ('undefined')) ? (charAt) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('charAt_const', 1, (()=>helper(charAt)));
codealchemist_log_type_post('6289242016836357150', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-8307352192537917753', ({v2 : ((typeof charAtNever) != ('undefined')) ? (charAtNever) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('charAt_never', 1, (()=>helper(charAtNever)));
codealchemist_log_type_post('-8307352192537917753', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-5368478299846049085', ({v2 : ((typeof charAtBoth) != ('undefined')) ? (charAtBoth) : (undefined), v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('charAt_both', 1, (()=>helper(charAtBoth)));
codealchemist_log_type_post('-5368478299846049085', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-977873925002546893', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined), v2 : ((typeof stringIndex) != ('undefined')) ? (stringIndex) : (undefined)}));
createSuiteWithWarmup('stringIndex_const', 1, (()=>helper(stringIndex)));
codealchemist_log_type_post('-977873925002546893', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
