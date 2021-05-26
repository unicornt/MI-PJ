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
codealchemist_log_type_pre('-1695386604669057436', ({v1 : ((typeof setupArray) != ('undefined')) ? (setupArray) : (undefined)}));
const frozenSpreadArray = setupArray(100);
codealchemist_log_type_post('-1695386604669057436', ({v0 : ((typeof frozenSpreadArray) != ('undefined')) ? (frozenSpreadArray) : (undefined), v1 : ((typeof setupArray) != ('undefined')) ? (setupArray) : (undefined)}));
codealchemist_log_type_pre('1452143975344000280', ({}));
function foo(){
codealchemist_log_type_pre('5773904466456012350', ({}));
var result = arguments[0];
codealchemist_log_type_post('5773904466456012350', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3010050686364189783', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 1;(i) < (arguments.length);++i){
codealchemist_log_type_pre('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += arguments[i];
codealchemist_log_type_post('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3010050686364189783', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('1452143975344000280', ({}));
codealchemist_log_type_pre('2708190612321728639', ({v1 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v2 : ((typeof frozenSpreadArray) != ('undefined')) ? (frozenSpreadArray) : (undefined)}));
function SpreadCall(){
codealchemist_log_type_pre('-1809297551520814187', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v1 : ((typeof frozenSpreadArray) != ('undefined')) ? (frozenSpreadArray) : (undefined)}));
foo(...frozenSpreadArray);
codealchemist_log_type_post('-1809297551520814187', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v1 : ((typeof frozenSpreadArray) != ('undefined')) ? (frozenSpreadArray) : (undefined)}));
}
codealchemist_log_type_post('2708190612321728639', ({}));
codealchemist_log_type_pre('-1060064249654035372', ({v1 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
function SpreadCallSpreadLiteral(){
codealchemist_log_type_pre('8978160938580609404', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
foo(...[]);
codealchemist_log_type_post('8978160938580609404', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
}
codealchemist_log_type_post('-1060064249654035372', ({}));
codealchemist_log_type_pre('2043079442546982400', ({v1 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
function ApplySpreadLiteral(){
codealchemist_log_type_pre('-47606986993387045', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
foo.apply(this, []);
codealchemist_log_type_post('-47606986993387045', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
}
codealchemist_log_type_post('2043079442546982400', ({}));
codealchemist_log_type_pre('-4262605793662658673', ({v3 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
function CreateBenchmark(name, f){
codealchemist_log_type_pre('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
new BenchmarkSuite(name, [], []);
codealchemist_log_type_post('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
}
codealchemist_log_type_post('-4262605793662658673', ({}));
codealchemist_log_type_pre('-2984615197440241281', ({v1 : ((typeof ApplySpreadLiteral) != ('undefined')) ? (ApplySpreadLiteral) : (undefined), v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined)}));
CreateBenchmark('ApplySpreadLiteral', ApplySpreadLiteral);
codealchemist_log_type_post('-2984615197440241281', ({v1 : ((typeof ApplySpreadLiteral) != ('undefined')) ? (ApplySpreadLiteral) : (undefined), v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined)}));
codealchemist_log_type_pre('684469848075949515', ({v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined), v1 : ((typeof SpreadCall) != ('undefined')) ? (SpreadCall) : (undefined)}));
CreateBenchmark('SpreadCall', SpreadCall);
codealchemist_log_type_post('684469848075949515', ({v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined), v1 : ((typeof SpreadCall) != ('undefined')) ? (SpreadCall) : (undefined)}));
codealchemist_log_type_pre('2411637563620317296', ({v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined), v1 : ((typeof SpreadCallSpreadLiteral) != ('undefined')) ? (SpreadCallSpreadLiteral) : (undefined)}));
CreateBenchmark('SpreadCallSpreadLiteral', SpreadCallSpreadLiteral);
codealchemist_log_type_post('2411637563620317296', ({v0 : ((typeof CreateBenchmark) != ('undefined')) ? (CreateBenchmark) : (undefined), v1 : ((typeof SpreadCallSpreadLiteral) != ('undefined')) ? (SpreadCallSpreadLiteral) : (undefined)}));
