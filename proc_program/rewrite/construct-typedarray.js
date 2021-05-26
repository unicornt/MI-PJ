load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4274136856247840167', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ConstructByTypedArray', [], []);
codealchemist_log_type_post('4274136856247840167', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1760401496456596990', ({}));
var length = 1024;
codealchemist_log_type_post('-1760401496456596990', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('3817925600652235366', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
var arr = new Uint8Array(length);
codealchemist_log_type_post('3817925600652235366', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('8384789889565077130', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(var i = 0;(i) < (length);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(arr[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8384789889565077130', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('4960929262876264996', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
function constructor(){
codealchemist_log_type_pre('5112147438857704982', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
new Float64Array(arr);
codealchemist_log_type_post('5112147438857704982', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('4960929262876264996', ({}));
