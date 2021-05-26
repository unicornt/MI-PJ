load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1597267641567618324', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Basic1', [], []);
codealchemist_log_type_post('-1597267641567618324', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-6875444801300630307', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ReturnArgsBabel', [], []);
codealchemist_log_type_post('-6875444801300630307', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2645952823603874209', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ReturnArgsNative', [], []);
codealchemist_log_type_post('-2645952823603874209', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2260346354826370010', ({}));
function basic_rest_fn_1(factor, ...values){
codealchemist_log_type_pre('8887107388399914408', ({}));
var result = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3953461937174762428', ({v3 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
for(var i = 0;(i) < (values.length);++i){
codealchemist_log_type_pre('2469764055844006828', ({v1 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('8823599194232454388', ({v1 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
(result) += (factor) * (values[i]);
codealchemist_log_type_post('8823599194232454388', ({v1 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_post('2469764055844006828', ({v1 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
}
codealchemist_log_type_post('-3953461937174762428', ({v3 : ((typeof factor) != ('undefined')) ? (factor) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2260346354826370010', ({}));
codealchemist_log_type_pre('-857060939854026304', ({}));
function BasicRest1Setup(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('8651189678011278686', ({v2 : ((typeof basic_rest_fn_1) != ('undefined')) ? (basic_rest_fn_1) : (undefined)}));
function BasicRest1(){
codealchemist_log_type_pre('2041788159885427226', ({v1 : ((typeof basic_rest_fn_1) != ('undefined')) ? (basic_rest_fn_1) : (undefined)}));
(result) = basic_rest_fn_1(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
codealchemist_log_type_post('2041788159885427226', ({v1 : ((typeof basic_rest_fn_1) != ('undefined')) ? (basic_rest_fn_1) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('8651189678011278686', ({}));
codealchemist_log_type_pre('-5010034534123933256', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicRest1TearDown(){
codealchemist_log_type_pre('1388664238555895383', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_1388664238555895383 = (result) == (550);
codealchemist_log_type_post('1388664238555895383', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_1388664238555895383;
}
codealchemist_log_type_post('-5010034534123933256', ({}));
codealchemist_log_type_pre('849873075192462994', ({}));
var length = 50;
codealchemist_log_type_post('849873075192462994', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('2285385502941492015', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
var numbers = Array.apply(null, ({length})).map(Number.call, Number);
codealchemist_log_type_post('2285385502941492015', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
codealchemist_log_type_pre('-1195379040296012303', ({v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
var strings = numbers.map(String.call, String);
codealchemist_log_type_post('-1195379040296012303', ({v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('7468722670134609159', ({}));
function ReturnArgsBabelFunction(unused){
codealchemist_log_type_pre('-7444987635282321314', ({}));
"use strict";
codealchemist_log_type_post('-7444987635282321314', ({}));
codealchemist_log_type_pre('-8171851141503767966', ({}));
for(var _len = arguments.length, args = Array(((_len) > (1)) ? ((_len) - (1)) : (0)), _key = 1;(_key) < (_len);_key++){
codealchemist_log_type_pre('-9002599080671984536', ({v1 : ((typeof _key) != ('undefined')) ? (_key) : (undefined), v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
codealchemist_log_type_pre('-385457930739615532', ({v1 : ((typeof _key) != ('undefined')) ? (_key) : (undefined), v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
(args[(_key) - (1)]) = arguments[_key];
codealchemist_log_type_post('-385457930739615532', ({v1 : ((typeof _key) != ('undefined')) ? (_key) : (undefined), v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
codealchemist_log_type_post('-9002599080671984536', ({v1 : ((typeof _key) != ('undefined')) ? (_key) : (undefined), v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
}
codealchemist_log_type_post('-8171851141503767966', ({v4 : ((typeof _key) != ('undefined')) ? (_key) : (undefined), v0 : ((typeof _len) != ('undefined')) ? (_len) : (undefined), v2 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
var temp_3444589576563574513 = args;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('7468722670134609159', ({}));
codealchemist_log_type_pre('2224219395218962695', ({v2 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
function ReturnArgsBabelSetup(){
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(result) = ReturnArgsBabelFunction(...strings);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
(result) = ReturnArgsBabelFunction(...numbers);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2224219395218962695', ({}));
codealchemist_log_type_pre('2224219395218962695', ({v2 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
function ReturnArgsBabel(){
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(result) = ReturnArgsBabelFunction(...strings);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
(result) = ReturnArgsBabelFunction(...numbers);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsBabelFunction) != ('undefined')) ? (ReturnArgsBabelFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2224219395218962695', ({}));
codealchemist_log_type_pre('-6308702898534247563', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function ReturnArgsBabelTearDown(){
codealchemist_log_type_pre('-8432371757758925158', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_8432371757758925158 = (result.indexOf(0)) === (0);
codealchemist_log_type_post('-8432371757758925158', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_8432371757758925158;
}
codealchemist_log_type_post('-6308702898534247563', ({}));
codealchemist_log_type_pre('9039168208022219906', ({}));
function ReturnArgsNativeFunction(unused, ...args){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
var temp_3444589576563574513 = args;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof args) != ('undefined')) ? (args) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('9039168208022219906', ({}));
codealchemist_log_type_pre('2224219395218962695', ({v2 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
function ReturnArgsNativeSetup(){
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(result) = ReturnArgsNativeFunction(...strings);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
(result) = ReturnArgsNativeFunction(...numbers);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2224219395218962695', ({}));
codealchemist_log_type_pre('2224219395218962695', ({v2 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
function ReturnArgsNative(){
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(result) = ReturnArgsNativeFunction(...strings);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
(result) = ReturnArgsNativeFunction(...numbers);
codealchemist_log_type_post('8598496725705716413', ({v1 : ((typeof ReturnArgsNativeFunction) != ('undefined')) ? (ReturnArgsNativeFunction) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2224219395218962695', ({}));
codealchemist_log_type_pre('-6308702898534247563', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function ReturnArgsNativeTearDown(){
codealchemist_log_type_pre('-8432371757758925158', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_8432371757758925158 = (result.indexOf(0)) === (0);
codealchemist_log_type_post('-8432371757758925158', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_8432371757758925158;
}
codealchemist_log_type_post('-6308702898534247563', ({}));
