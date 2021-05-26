load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4262605793662658673', ({v3 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
function addBenchmark(name, test){
codealchemist_log_type_pre('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
new BenchmarkSuite(name, [], []);
codealchemist_log_type_post('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
}
codealchemist_log_type_post('-4262605793662658673', ({}));
codealchemist_log_type_pre('-1869208144321775461', ({}));
function objectLookupStringConstant(){
codealchemist_log_type_pre('6479113090716965724', ({}));
const x = ({1 : "foo"});
codealchemist_log_type_post('6479113090716965724', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('8216090774264914794', ({v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
for(var i = 0;(i) < (1000);++i){
codealchemist_log_type_pre('1013194177926173021', ({v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-5518388409151062848', ({v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
const p = x["1"];
codealchemist_log_type_post('-5518388409151062848', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('1013194177926173021', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('8216090774264914794', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-1869208144321775461', ({}));
codealchemist_log_type_pre('-4325153797541231610', ({}));
function objectLookupIndexNumber(){
codealchemist_log_type_pre('6479113090716965724', ({}));
const x = ({1 : "foo"});
codealchemist_log_type_post('6479113090716965724', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-7990118379578255899', ({}));
const a = 1;
codealchemist_log_type_post('-7990118379578255899', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('599475130291695882', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
for(var i = 0;(i) < (1000);++i){
codealchemist_log_type_pre('-8913330110306516816', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
const p = x[a];
codealchemist_log_type_post('4947307678015975283', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-8913330110306516816', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('599475130291695882', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-4325153797541231610', ({}));
codealchemist_log_type_pre('4106960914474586768', ({}));
function objectLookupIndexString(){
codealchemist_log_type_pre('6479113090716965724', ({}));
const x = ({1 : "foo"});
codealchemist_log_type_post('6479113090716965724', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('1436890524910866856', ({}));
const a = "1";
codealchemist_log_type_post('1436890524910866856', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('599475130291695882', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
for(var i = 0;(i) < (1000);++i){
codealchemist_log_type_pre('-8913330110306516816', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
const p = x[a];
codealchemist_log_type_post('4947307678015975283', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-8913330110306516816', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('599475130291695882', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('4106960914474586768', ({}));
codealchemist_log_type_pre('-3035016344202499802', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupStringConstant) != ('undefined')) ? (objectLookupStringConstant) : (undefined)}));
addBenchmark('Object-Lookup-String-Constant', objectLookupStringConstant);
codealchemist_log_type_post('-3035016344202499802', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupStringConstant) != ('undefined')) ? (objectLookupStringConstant) : (undefined)}));
codealchemist_log_type_pre('1890459736861665187', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupIndexNumber) != ('undefined')) ? (objectLookupIndexNumber) : (undefined)}));
addBenchmark('Object-Lookup-Index-Number', objectLookupIndexNumber);
codealchemist_log_type_post('1890459736861665187', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupIndexNumber) != ('undefined')) ? (objectLookupIndexNumber) : (undefined)}));
codealchemist_log_type_pre('-3914164579979460566', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupIndexString) != ('undefined')) ? (objectLookupIndexString) : (undefined)}));
addBenchmark('Object-Lookup-Index-String', objectLookupIndexString);
codealchemist_log_type_post('-3914164579979460566', ({v0 : ((typeof addBenchmark) != ('undefined')) ? (addBenchmark) : (undefined), v1 : ((typeof objectLookupIndexString) != ('undefined')) ? (objectLookupIndexString) : (undefined)}));
