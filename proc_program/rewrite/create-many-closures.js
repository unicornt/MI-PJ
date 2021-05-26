load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4861741291884818109', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ManyClosures', [], []);
codealchemist_log_type_post('4861741291884818109', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var a = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof CreateManyClosures_Setup) != ('undefined')) ? (CreateManyClosures_Setup) : (undefined)}));
%NeverOptimizeFunction(CreateManyClosures_Setup);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof CreateManyClosures_Setup) != ('undefined')) ? (CreateManyClosures_Setup) : (undefined)}));
codealchemist_log_type_pre('-2790878539956348059', ({}));
function CreateManyClosures_Setup(){
codealchemist_log_type_pre('7319435607679293794', ({}));
function g(){
codealchemist_log_type_pre('-2505476068453029207', ({}));
var temp_2505476068453029207 = ((i)=>(i) + (1));
codealchemist_log_type_post('-2505476068453029207', ({}));
return temp_2505476068453029207;
}
codealchemist_log_type_post('7319435607679293794', ({}));
codealchemist_log_type_pre('6004342504817365746', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
var f = g();
codealchemist_log_type_post('6004342504817365746', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('-2720962835941863676', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
%PrepareFunctionForOptimization(f);
codealchemist_log_type_post('-2720962835941863676', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(0);
codealchemist_log_type_post('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(0);
codealchemist_log_type_post('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-4470248593654286346', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
%OptimizeFunctionOnNextCall(f);
codealchemist_log_type_post('-4470248593654286346', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f(0);
codealchemist_log_type_post('4169839172240255327', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(a) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-5490325183570504301', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
for(var i = 0;(i) < (2000000);i++){
codealchemist_log_type_pre('-1104149737279961628', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('6004342504817365746', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
var f = g();
codealchemist_log_type_post('6004342504817365746', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
f();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
a.push(f);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('-1104149737279961628', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
}
codealchemist_log_type_post('-5490325183570504301', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-2790878539956348059', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof CreateManyClosures) != ('undefined')) ? (CreateManyClosures) : (undefined)}));
%NeverOptimizeFunction(CreateManyClosures);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof CreateManyClosures) != ('undefined')) ? (CreateManyClosures) : (undefined)}));
codealchemist_log_type_pre('968786483183513844', ({}));
function CreateManyClosures(){
codealchemist_log_type_pre('-5344310843364960578', ({}));
for(var i = 0;(i) < (50);i++){
codealchemist_log_type_pre('2846633432355434954', ({}));
codealchemist_log_type_pre('1332446275046020094', ({}));
gc(true);
codealchemist_log_type_post('1332446275046020094', ({}));
codealchemist_log_type_post('2846633432355434954', ({}));
}
codealchemist_log_type_post('-5344310843364960578', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('968786483183513844', ({}));
