load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
load('../base.js');
codealchemist_log_type_pre('-153958155562280390', ({}));
const BENCHMARK_NAME = arguments[0];
codealchemist_log_type_post('-153958155562280390', ({v0 : ((typeof BENCHMARK_NAME) != ('undefined')) ? (BENCHMARK_NAME) : (undefined)}));
codealchemist_log_type_pre('-4746449115216368963', ({}));
const TEST_TYPE = arguments[1];
codealchemist_log_type_post('-4746449115216368963', ({v0 : ((typeof TEST_TYPE) != ('undefined')) ? (TEST_TYPE) : (undefined)}));
codealchemist_log_type_pre('7279557796997355802', ({}));
const optimize_param = arguments[2];
codealchemist_log_type_post('7279557796997355802', ({v0 : ((typeof optimize_param) != ('undefined')) ? (optimize_param) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let optimize;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
codealchemist_log_type_pre('-5735444330845049041', ({v0 : ((typeof optimize_param) != ('undefined')) ? (optimize_param) : (undefined)}));
if((optimize_param) == ("opt")){
codealchemist_log_type_pre('-582395116167789489', ({}));
codealchemist_log_type_pre('-7643690174167014527', ({}));
(optimize) = true;
codealchemist_log_type_post('-7643690174167014527', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
codealchemist_log_type_post('-582395116167789489', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
}else {
codealchemist_log_type_pre('-2650234969560316714', ({v0 : ((typeof optimize_param) != ('undefined')) ? (optimize_param) : (undefined)}));
if((optimize_param) == ("noopt")){
codealchemist_log_type_pre('-5450643529953774299', ({}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(optimize) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
codealchemist_log_type_post('-5450643529953774299', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
}else {
codealchemist_log_type_pre('-6252135157278284687', ({}));
codealchemist_log_type_pre('-1268071854078038009', ({}));
var temp_1268071854078038009 = new Error("Test configuration error");
codealchemist_log_type_post('-1268071854078038009', ({}));
throw temp_1268071854078038009;
codealchemist_log_type_post('-6252135157278284687', ({}));
}
codealchemist_log_type_post('-2650234969560316714', ({v1 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v0 : ((typeof optimize_param) != ('undefined')) ? (optimize_param) : (undefined)}));
}
codealchemist_log_type_post('-5735444330845049041', ({v1 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v0 : ((typeof optimize_param) != ('undefined')) ? (optimize_param) : (undefined)}));
codealchemist_log_type_pre('-7990118379578255899', ({}));
const DETERMINISTIC_RUNS = 1;
codealchemist_log_type_post('-7990118379578255899', ({v0 : ((typeof DETERMINISTIC_RUNS) != ('undefined')) ? (DETERMINISTIC_RUNS) : (undefined)}));
codealchemist_log_type_pre('-8471649471644114502', ({}));
const LOCAL_ITERATIONS = 10000;
codealchemist_log_type_post('-8471649471644114502', ({v0 : ((typeof LOCAL_ITERATIONS) != ('undefined')) ? (LOCAL_ITERATIONS) : (undefined)}));
codealchemist_log_type_pre('1025555206307318033', ({v1 : ((typeof BENCHMARK_NAME) != ('undefined')) ? (BENCHMARK_NAME) : (undefined), v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite(BENCHMARK_NAME, [], []);
codealchemist_log_type_post('1025555206307318033', ({v1 : ((typeof BENCHMARK_NAME) != ('undefined')) ? (BENCHMARK_NAME) : (undefined), v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class A{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
;
codealchemist_log_type_pre('-3065053859457716101', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a0) = 10;
codealchemist_log_type_post('-3065053859457716101', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('598745169280316842', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a1) = 10;
codealchemist_log_type_post('598745169280316842', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('6344362036975549685', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a2) = 10;
codealchemist_log_type_post('6344362036975549685', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('-1006865430591729979', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a3) = 10;
codealchemist_log_type_post('-1006865430591729979', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('1961039479504978504', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a4) = 10;
codealchemist_log_type_post('1961039479504978504', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('8219871225398345731', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a5) = 10;
codealchemist_log_type_post('8219871225398345731', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('-8872909961736234066', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a6) = 10;
codealchemist_log_type_post('-8872909961736234066', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('7053676658628896191', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a7) = 10;
codealchemist_log_type_post('7053676658628896191', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('-2113022442942997682', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a8) = 10;
codealchemist_log_type_post('-2113022442942997682', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('-721365343407887154', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A.prototype.super_prop_a9) = 10;
codealchemist_log_type_post('-721365343407887154', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
class B extends A{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
codealchemist_log_type_pre('5672622329337120020', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b0) = 10;
codealchemist_log_type_post('5672622329337120020', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('9027914649696299410', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b1) = 10;
codealchemist_log_type_post('9027914649696299410', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('5871338671260724655', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b2) = 10;
codealchemist_log_type_post('5871338671260724655', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-963378335457262035', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b3) = 10;
codealchemist_log_type_post('-963378335457262035', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('8993707548772548596', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b4) = 10;
codealchemist_log_type_post('8993707548772548596', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-4736791242978865935', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b5) = 10;
codealchemist_log_type_post('-4736791242978865935', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('7957298077505638698', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b6) = 10;
codealchemist_log_type_post('7957298077505638698', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-6189585401712406225', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b7) = 10;
codealchemist_log_type_post('-6189585401712406225', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('2811771454573082365', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b8) = 10;
codealchemist_log_type_post('2811771454573082365', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-9068348666743109764', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b9) = 10;
codealchemist_log_type_post('-9068348666743109764', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
class C extends B{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
;
codealchemist_log_type_pre('422892071322715433', ({}));
function createClasses(base){
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof base) != ('undefined')) ? (base) : (undefined)}));
class B extends base{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof base) != ('undefined')) ? (base) : (undefined)}));
;
codealchemist_log_type_pre('5672622329337120020', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b0) = 10;
codealchemist_log_type_post('5672622329337120020', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('9027914649696299410', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b1) = 10;
codealchemist_log_type_post('9027914649696299410', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('5871338671260724655', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b2) = 10;
codealchemist_log_type_post('5871338671260724655', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-963378335457262035', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b3) = 10;
codealchemist_log_type_post('-963378335457262035', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('8993707548772548596', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b4) = 10;
codealchemist_log_type_post('8993707548772548596', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-4736791242978865935', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b5) = 10;
codealchemist_log_type_post('-4736791242978865935', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('7957298077505638698', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b6) = 10;
codealchemist_log_type_post('7957298077505638698', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-6189585401712406225', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b7) = 10;
codealchemist_log_type_post('-6189585401712406225', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('2811771454573082365', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b8) = 10;
codealchemist_log_type_post('2811771454573082365', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-9068348666743109764', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
(B.prototype.super_prop_b9) = 10;
codealchemist_log_type_post('-9068348666743109764', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
class C extends B{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof C) != ('undefined')) ? (C) : (undefined)}));
var temp_3444589576563574513 = C;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof C) != ('undefined')) ? (C) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('422892071322715433', ({}));
codealchemist_log_type_pre('6053479678771104703', ({}));
function test_property_access(o){
codealchemist_log_type_pre('7647041846673655972', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var temp_7647041846673655972 = (((((((((o.prop0) + (o.prop1)) + (o.prop2)) + (o.prop3)) + (o.prop4)) + (o.prop5)) + (o.prop6)) + (o.prop7)) + (o.prop8)) + (o.prop9);
codealchemist_log_type_post('7647041846673655972', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
return temp_7647041846673655972;
}
codealchemist_log_type_post('6053479678771104703', ({}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let objects;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let tested_functions;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('6628186707968373841', ({v0 : ((typeof TEST_TYPE) != ('undefined')) ? (TEST_TYPE) : (undefined)}));
switch(TEST_TYPE){
}
codealchemist_log_type_post('6628186707968373841', ({v0 : ((typeof TEST_TYPE) != ('undefined')) ? (TEST_TYPE) : (undefined)}));
codealchemist_log_type_pre('6033091947058751151', ({v2 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
for(f of tested_functions){
codealchemist_log_type_pre('-6500231702942926141', ({v2 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
codealchemist_log_type_pre('4908761676614677198', ({v2 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
if(optimize){
codealchemist_log_type_pre('-3068145003373045858', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-2720962835941863676', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
%PrepareFunctionForOptimization(f);
codealchemist_log_type_post('-2720962835941863676', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('-3068145003373045858', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}else {
codealchemist_log_type_pre('3388933560246553539', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
%NeverOptimizeFunction(f);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('3388933560246553539', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}
codealchemist_log_type_post('4908761676614677198', ({v2 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
codealchemist_log_type_post('-6500231702942926141', ({v2 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined)}));
}
codealchemist_log_type_post('6033091947058751151', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('-1771328305016705087', ({v4 : ((typeof LOCAL_ITERATIONS) != ('undefined')) ? (LOCAL_ITERATIONS) : (undefined), v6 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v10 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v8 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
function runBenchmark(){
codealchemist_log_type_pre('-6031961066196657597', ({}));
const expected_value = (10) * (10);
codealchemist_log_type_post('-6031961066196657597', ({v0 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined)}));
codealchemist_log_type_pre('8720562409487186565', ({}));
let ix = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof ix) != ('undefined')) ? (ix) : (undefined)}));
codealchemist_log_type_pre('5910758864605803968', ({v1 : ((typeof LOCAL_ITERATIONS) != ('undefined')) ? (LOCAL_ITERATIONS) : (undefined), v7 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v4 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v3 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v9 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v6 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
for(let i = 0;(i) < (LOCAL_ITERATIONS);++i){
codealchemist_log_type_pre('1043264234117677611', ({v5 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v7 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v4 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
const object = objects[ix];
codealchemist_log_type_post('4947307678015975283', ({v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
codealchemist_log_type_pre('-1704717549113312494', ({v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
const r = tested_functions[ix].call(object, object);
codealchemist_log_type_post('-1704717549113312494', ({v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof r) != ('undefined')) ? (r) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('-2939153779128390872', ({v1 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
if((r) != (expected_value)){
codealchemist_log_type_pre('-2136142604547975573', ({}));
codealchemist_log_type_pre('5783208118986185369', ({}));
var temp_5783208118986185369 = new Error("Test error");
codealchemist_log_type_post('5783208118986185369', ({}));
throw temp_5783208118986185369;
codealchemist_log_type_post('-2136142604547975573', ({}));
}
codealchemist_log_type_post('-2939153779128390872', ({v1 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
codealchemist_log_type_pre('779889727214105963', ({v0 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v2 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v4 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
if((++ix) == (objects.length)){
codealchemist_log_type_pre('5957177116684334806', ({v1 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v3 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('-5972112927478329196', ({}));
(ix) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof ix) != ('undefined')) ? (ix) : (undefined)}));
codealchemist_log_type_pre('-7029529992222624164', ({v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v2 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
if(optimize){
codealchemist_log_type_pre('-4193201861032868474', ({v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_pre('-6328989457906446772', ({v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
for(f of tested_functions){
codealchemist_log_type_pre('4511112000829598897', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-4470248593654286346', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
%OptimizeFunctionOnNextCall(f);
codealchemist_log_type_post('-4470248593654286346', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_post('4511112000829598897', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
}
codealchemist_log_type_post('-6328989457906446772', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_post('-4193201861032868474', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined), v1 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
}
codealchemist_log_type_post('-7029529992222624164', ({v1 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v2 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_post('5957177116684334806', ({v2 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v1 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v3 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
}
codealchemist_log_type_post('779889727214105963', ({v3 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v2 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v4 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
codealchemist_log_type_post('1043264234117677611', ({v5 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v8 : ((typeof f) != ('undefined')) ? (f) : (undefined), v2 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v7 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v3 : ((typeof r) != ('undefined')) ? (r) : (undefined), v4 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
}
codealchemist_log_type_post('5910758864605803968', ({v1 : ((typeof LOCAL_ITERATIONS) != ('undefined')) ? (LOCAL_ITERATIONS) : (undefined), v7 : ((typeof expected_value) != ('undefined')) ? (expected_value) : (undefined), v10 : ((typeof f) != ('undefined')) ? (f) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof ix) != ('undefined')) ? (ix) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof objects) != ('undefined')) ? (objects) : (undefined), v9 : ((typeof optimize) != ('undefined')) ? (optimize) : (undefined), v5 : ((typeof r) != ('undefined')) ? (r) : (undefined), v6 : ((typeof tested_functions) != ('undefined')) ? (tested_functions) : (undefined)}));
}
codealchemist_log_type_post('-1771328305016705087', ({}));
codealchemist_log_type_pre('-3888903574222718072', ({}));
var success = true;
codealchemist_log_type_post('-3888903574222718072', ({v0 : ((typeof success) != ('undefined')) ? (success) : (undefined)}));
codealchemist_log_type_pre('4104679471433824552', ({}));
function PrintResult(name, result){
codealchemist_log_type_pre('9206269440343717470', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
print(((name) + ('(Score): ')) + (result));
codealchemist_log_type_post('9206269440343717470', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('4104679471433824552', ({}));
codealchemist_log_type_pre('-3809483966262188939', ({v3 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined)}));
function PrintError(name, error){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v2 : ((typeof error) != ('undefined')) ? (error) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
PrintResult(name, error);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v2 : ((typeof error) != ('undefined')) ? (error) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(success) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof success) != ('undefined')) ? (success) : (undefined)}));
}
codealchemist_log_type_post('-3809483966262188939', ({}));
codealchemist_log_type_pre('-2191492742492556817', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
(BenchmarkSuite.config.doWarmup) = false;
codealchemist_log_type_post('-2191492742492556817', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4725534536568588586', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
(BenchmarkSuite.config.doDeterministic) = true;
codealchemist_log_type_post('4725534536568588586', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3508617974978086069', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v2 : ((typeof PrintError) != ('undefined')) ? (PrintError) : (undefined), v1 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined)}));
BenchmarkSuite.RunSuites(({NotifyResult : PrintResult, NotifyError : PrintError}));
codealchemist_log_type_post('-3508617974978086069', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v2 : ((typeof PrintError) != ('undefined')) ? (PrintError) : (undefined), v1 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined)}));
