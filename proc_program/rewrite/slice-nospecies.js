load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1926022209765424138', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('SliceNoSpecies', [], []);
codealchemist_log_type_post('1926022209765424138', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5934158437519036897', ({}));
var size = 1000;
codealchemist_log_type_post('-5934158437519036897', ({v0 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('-6106731831549102422', ({v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
var initialFloat64Array = new Float64Array(size);
codealchemist_log_type_post('-6106731831549102422', ({v0 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('-1878835345261735438', ({v2 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
for(var i = 0;(i) < (size);++i){
codealchemist_log_type_pre('-4147145330609733899', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
codealchemist_log_type_pre('6512195641849705139', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
(initialFloat64Array[i]) = Math.random();
codealchemist_log_type_post('6512195641849705139', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
codealchemist_log_type_post('-4147145330609733899', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('-1878835345261735438', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var arr;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var new_arr;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
codealchemist_log_type_pre('1231048021723800773', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
function slice(){
codealchemist_log_type_pre('8527772349201322735', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
(new_arr) = arr.slice(1, - 1);
codealchemist_log_type_post('8527772349201322735', ({v1 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
}
codealchemist_log_type_post('1231048021723800773', ({}));
codealchemist_log_type_pre('2233051716039132759', ({v3 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
function sliceSetup(){
codealchemist_log_type_pre('-8535027364771836468', ({v2 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
(arr) = new Float64Array(initialFloat64Array);
codealchemist_log_type_post('-8535027364771836468', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v2 : ((typeof initialFloat64Array) != ('undefined')) ? (initialFloat64Array) : (undefined)}));
}
codealchemist_log_type_post('2233051716039132759', ({}));
codealchemist_log_type_pre('4253902104845926249', ({v3 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v4 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
function sliceTearDown(){
codealchemist_log_type_pre('5673498972410103955', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v3 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
for(var i = 1;(i) < ((size) - (1));++i){
codealchemist_log_type_pre('-8662487749702081744', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
codealchemist_log_type_pre('3976555846501091948', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
if((arr[i]) != (new_arr[(i) - (1)])){
codealchemist_log_type_pre('2770251137866828367', ({v1 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
codealchemist_log_type_pre('-5653100522654970021', ({v1 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
var temp_5653100522654970021 = new TypeError(("Unexpected result!\n") + (new_arr));
codealchemist_log_type_post('-5653100522654970021', ({v1 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
throw temp_5653100522654970021;
codealchemist_log_type_post('2770251137866828367', ({v1 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
}
codealchemist_log_type_post('3976555846501091948', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
codealchemist_log_type_post('-8662487749702081744', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
}
codealchemist_log_type_post('5673498972410103955', ({v2 : ((typeof arr) != ('undefined')) ? (arr) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('2157368412597649204', ({}));
(arr) = void 0;
codealchemist_log_type_post('2157368412597649204', ({v0 : ((typeof arr) != ('undefined')) ? (arr) : (undefined)}));
codealchemist_log_type_pre('2157368412597649204', ({}));
(new_arr) = void 0;
codealchemist_log_type_post('2157368412597649204', ({v0 : ((typeof new_arr) != ('undefined')) ? (new_arr) : (undefined)}));
}
codealchemist_log_type_post('4253902104845926249', ({}));
