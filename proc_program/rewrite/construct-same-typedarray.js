load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1784919940569065909', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ConstructBySameTypedArray', [], []);
codealchemist_log_type_post('-1784919940569065909', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1570063083217209043', ({}));
const length = 1024;
codealchemist_log_type_post('-1570063083217209043', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('4785489690017178459', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let arr = new Uint8Array(length);
codealchemist_log_type_post('4785489690017178459', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('8384789889565077130', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(var i = 0;(i) < (length);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(arr[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8384789889565077130', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-6310628740374184679', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
function constructor(){
codealchemist_log_type_pre('-3270490504184593308', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
new Uint8Array(arr);
codealchemist_log_type_post('-3270490504184593308', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
}
codealchemist_log_type_post('-6310628740374184679', ({}));
