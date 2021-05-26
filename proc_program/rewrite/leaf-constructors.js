load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5872569963098562932', ({}));
'use strict';
codealchemist_log_type_post('-5872569963098562932', ({}));
codealchemist_log_type_pre('-5260815619082150781', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var DefaultConstructorBenchmark = new BenchmarkSuite('LeafConstructors', [], []);
codealchemist_log_type_post('-5260815619082150781', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof DefaultConstructorBenchmark) != ('undefined')) ? (DefaultConstructorBenchmark) : (undefined)}));
codealchemist_log_type_pre('700676008366207193', ({}));
const Point = (class Point{
});
codealchemist_log_type_post('700676008366207193', ({v0 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const klasses = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof klasses) != ('undefined')) ? (klasses) : (undefined)}));
codealchemist_log_type_pre('8256689131573218392', ({v3 : ((typeof klasses) != ('undefined')) ? (klasses) : (undefined)}));
function WithExplicitArguments(){
codealchemist_log_type_pre('1564558217053050846', ({}));
let result = null;
codealchemist_log_type_post('1564558217053050846', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1214669319153812969', ({v1 : ((typeof klasses) != ('undefined')) ? (klasses) : (undefined)}));
for(const klass of klasses){
codealchemist_log_type_pre('-3935475207418209557', ({v1 : ((typeof klass) != ('undefined')) ? (klass) : (undefined)}));
codealchemist_log_type_pre('-8521303462319485879', ({v1 : ((typeof klass) != ('undefined')) ? (klass) : (undefined)}));
(result) = new klass(0, 1, 2);
codealchemist_log_type_post('-8521303462319485879', ({v1 : ((typeof klass) != ('undefined')) ? (klass) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3935475207418209557', ({v1 : ((typeof klass) != ('undefined')) ? (klass) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('1214669319153812969', ({v0 : ((typeof klass) != ('undefined')) ? (klass) : (undefined), v1 : ((typeof klasses) != ('undefined')) ? (klasses) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('8256689131573218392', ({}));
;
