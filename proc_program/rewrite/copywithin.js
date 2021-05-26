load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('7639762273030229538', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('CopyWithin', [], []);
codealchemist_log_type_post('7639762273030229538', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1332137631544647435', ({}));
var initialLargeFloat64Array = new Array(10000);
codealchemist_log_type_post('-1332137631544647435', ({v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-5110799766479013037', ({v1 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
for(var i = 0;(i) < (5000);++i){
codealchemist_log_type_pre('301682230413706004', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
(initialLargeFloat64Array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('-5110799766479013037', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-6485785272722477695', ({v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
(initialLargeFloat64Array) = new Float64Array(initialLargeFloat64Array);
codealchemist_log_type_post('-6485785272722477695', ({v0 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var largeFloat64Array;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('3912187028628276757', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
function CopyWithinLarge(){
codealchemist_log_type_pre('-2079904100748848893', ({v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
largeFloat64Array.copyWithin(5000);
codealchemist_log_type_post('-2079904100748848893', ({v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('3912187028628276757', ({}));
codealchemist_log_type_pre('2233051716039132759', ({v3 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
function CopyWithinLargeSetup(){
codealchemist_log_type_pre('-8535027364771836468', ({v2 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined)}));
(largeFloat64Array) = new Float64Array(initialLargeFloat64Array);
codealchemist_log_type_post('-8535027364771836468', ({v2 : ((typeof initialLargeFloat64Array) != ('undefined')) ? (initialLargeFloat64Array) : (undefined), v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('2233051716039132759', ({}));
codealchemist_log_type_pre('8703462298792466064', ({v2 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
function CopyWithinLargeTearDown(){
codealchemist_log_type_pre('-4511442241608297962', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
for(var i = 0;(i) < (5000);++i){
codealchemist_log_type_pre('-6472661961940620614', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-2899241093477512742', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
if((largeFloat64Array[(i) + (5000)]) !== (i)){
codealchemist_log_type_pre('2770251137866828367', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('-5653100522654970021', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
var temp_5653100522654970021 = new TypeError(("Unexpected result!\n") + (largeFloat64Array));
codealchemist_log_type_post('-5653100522654970021', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
throw temp_5653100522654970021;
codealchemist_log_type_post('2770251137866828367', ({v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('-2899241093477512742', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
codealchemist_log_type_post('-6472661961940620614', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('-4511442241608297962', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
codealchemist_log_type_pre('2157368412597649204', ({}));
(largeFloat64Array) = void 0;
codealchemist_log_type_post('2157368412597649204', ({v0 : ((typeof largeFloat64Array) != ('undefined')) ? (largeFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('8703462298792466064', ({}));
