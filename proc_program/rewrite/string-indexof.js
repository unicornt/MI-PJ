load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1283539596504160023', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringIndexOfConstant', [], []);
codealchemist_log_type_post('1283539596504160023', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('3631096145542784159', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringIndexOfNonConstant', [], []);
codealchemist_log_type_post('3631096145542784159', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5160564191926255868', ({}));
const subject = "aaaaaaaaaaaaaaaab";
codealchemist_log_type_post('-5160564191926255868', ({v0 : ((typeof subject) != ('undefined')) ? (subject) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const searches = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof searches) != ('undefined')) ? (searches) : (undefined)}));
codealchemist_log_type_pre('-7250425705553883779', ({v3 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v4 : ((typeof subject) != ('undefined')) ? (subject) : (undefined)}));
function StringIndexOfConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('331582164594602897', ({v1 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v3 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (searches.length);++j){
codealchemist_log_type_pre('-3689497048354143797', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3056073523052845945', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += subject.indexOf(("") + (searches[j]));
codealchemist_log_type_post('-3056073523052845945', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-3689497048354143797', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('331582164594602897', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v3 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-7250425705553883779', ({}));
codealchemist_log_type_pre('8245805095223649719', ({v3 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v4 : ((typeof subject) != ('undefined')) ? (subject) : (undefined)}));
function StringIndexOfNonConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-7099523707765065666', ({v1 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v3 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (searches.length);++j){
codealchemist_log_type_pre('-8298330588482849673', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4788573396120253644', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += subject.indexOf(searches[j]);
codealchemist_log_type_post('-4788573396120253644', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8298330588482849673', ({v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v1 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-7099523707765065666', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof searches) != ('undefined')) ? (searches) : (undefined), v3 : ((typeof subject) != ('undefined')) ? (subject) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('8245805095223649719', ({}));
