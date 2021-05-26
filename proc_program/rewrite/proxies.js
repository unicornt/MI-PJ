load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4262605793662658673', ({v3 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
function newBenchmark(name, handlers){
codealchemist_log_type_pre('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
new BenchmarkSuite(name, [], []);
codealchemist_log_type_post('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
}
codealchemist_log_type_post('-4262605793662658673', ({}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-8638173231064382783', ({}));
var foo = (()=>{
});
codealchemist_log_type_post('-8638173231064382783', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_pre('9007935250670403290', ({v3 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("ProxyConstructorWithArrowFunc", ({setup : (function (){
}), run : (function (){
codealchemist_log_type_pre('7331414069898719431', ({v2 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
var proxy = new Proxy(foo, ({}));
codealchemist_log_type_post('7331414069898719431', ({v2 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v0 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
(result) = proxy;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4847182551412375830 = (typeof result) == ('function');
codealchemist_log_type_post('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4847182551412375830;
})}));
codealchemist_log_type_post('9007935250670403290', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class Class{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
;
codealchemist_log_type_pre('8705992091109475107', ({v3 : ((typeof Class) != ('undefined')) ? (Class) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("ProxyConstructorWithClass", ({setup : (function (){
}), run : (function (){
codealchemist_log_type_pre('7331414069898719431', ({v2 : ((typeof Class) != ('undefined')) ? (Class) : (undefined)}));
var proxy = new Proxy(Class, ({}));
codealchemist_log_type_post('7331414069898719431', ({v2 : ((typeof Class) != ('undefined')) ? (Class) : (undefined), v0 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
(result) = proxy;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4847182551412375830 = (typeof result) == ('function');
codealchemist_log_type_post('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4847182551412375830;
})}));
codealchemist_log_type_post('8705992091109475107', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('138859219684313502', ({}));
let obj = ({});
codealchemist_log_type_post('138859219684313502', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-2617301251403552979', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("ProxyConstructorWithObject", ({setup : (function (){
}), run : (function (){
codealchemist_log_type_pre('7331414069898719431', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var proxy = new Proxy(obj, ({}));
codealchemist_log_type_post('7331414069898719431', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
(result) = proxy;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4847182551412375830 = (typeof result) == ('function');
codealchemist_log_type_post('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4847182551412375830;
})}));
codealchemist_log_type_post('-2617301251403552979', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('971929485312465848', ({}));
var p = new Proxy(({}), ({}));
codealchemist_log_type_post('971929485312465848', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('3688747636294686110', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("ProxyConstructorWithProxy", ({setup : (function (){
}), run : (function (){
codealchemist_log_type_pre('7331414069898719431', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
var proxy = new Proxy(p, ({}));
codealchemist_log_type_post('7331414069898719431', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined)}));
(result) = proxy;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof proxy) != ('undefined')) ? (proxy) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4847182551412375830 = (typeof result) == ('function');
codealchemist_log_type_post('4847182551412375830', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4847182551412375830;
})}));
codealchemist_log_type_post('3688747636294686110', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('892750881970568261', ({}));
const SOME_NUMBER = 42;
codealchemist_log_type_post('892750881970568261', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
codealchemist_log_type_pre('-8562979020829553011', ({}));
const SOME_OTHER_NUMBER = 1337;
codealchemist_log_type_post('-8562979020829553011', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
codealchemist_log_type_pre('-7249826775171989363', ({}));
const ITERATIONS = 1000;
codealchemist_log_type_post('-7249826775171989363', ({v0 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined)}));
codealchemist_log_type_pre('2722185172787335460', ({v6 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v7 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("CallProxyWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('419657025281859619', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
const target = (()=>{
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
return temp_3444589576563574513;
});
codealchemist_log_type_post('419657025281859619', ({v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
(p) = new Proxy(target, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-8831120756802605680', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('-8831120756802605680', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('2722185172787335460', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-4090489265951088553', ({v9 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v10 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("CallProxyWithTrap", ({setup : (function (){
codealchemist_log_type_pre('419657025281859619', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
const target = (()=>{
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
return temp_3444589576563574513;
});
codealchemist_log_type_post('419657025281859619', ({v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8489036736890852080', ({v5 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
(p) = new Proxy(target, ({apply : (function (target, thisArg, argumentsList){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_OTHER_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
return temp_3444589576563574513;
})}));
codealchemist_log_type_post('8489036736890852080', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-8831120756802605680', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
p();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('-8831120756802605680', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-4090489265951088553', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var instance;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class MyClass{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
;
codealchemist_log_type_pre('-246506462476907430', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v6 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("ConstructProxyWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined)}));
(p) = new Proxy(MyClass, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('6282562704859435591', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-2928392222165818513', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('7424484538518133115', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(instance) = new p();
codealchemist_log_type_post('7424484538518133115', ({v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('-2928392222165818513', ({v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('6282562704859435591', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('6106503679792027301', ({v1 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined)}));
var temp_6106503679792027301 = (instance) instanceof (MyClass);
codealchemist_log_type_post('6106503679792027301', ({v1 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined)}));
return temp_6106503679792027301;
})}));
codealchemist_log_type_post('-246506462476907430', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-7867229729436428003', ({v9 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v10 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("ConstructProxyWithTrap", ({setup : (function (){
codealchemist_log_type_pre('-488828966767815135', ({v6 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined)}));
(p) = new Proxy(Object, ({construct : (function (target, argumentsList, newTarget){
codealchemist_log_type_pre('-7139541451157179783', ({v0 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined)}));
var temp_7139541451157179783 = new MyClass();
codealchemist_log_type_post('-7139541451157179783', ({v0 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined)}));
return temp_7139541451157179783;
})}));
codealchemist_log_type_post('-488828966767815135', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('6282562704859435591', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-2928392222165818513', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('7424484538518133115', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(instance) = new p();
codealchemist_log_type_post('7424484538518133115', ({v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('-2928392222165818513', ({v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('6282562704859435591', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof instance) != ('undefined')) ? (instance) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('6106503679792027301', ({v1 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined)}));
var temp_6106503679792027301 = (instance) instanceof (MyClass);
codealchemist_log_type_post('6106503679792027301', ({v1 : ((typeof MyClass) != ('undefined')) ? (MyClass) : (undefined), v0 : ((typeof instance) != ('undefined')) ? (instance) : (undefined)}));
return temp_6106503679792027301;
})}));
codealchemist_log_type_post('-7867229729436428003', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('5647669148512413611', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
(obj) = ({prop : SOME_NUMBER});
codealchemist_log_type_post('5647669148512413611', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let value;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-1630080257973543885', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetStringWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('2289655628330274766', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-2395982990152655771', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1359532581761318875', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = p.prop;
codealchemist_log_type_post('-1359532581761318875', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-2395982990152655771', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('2289655628330274766', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-1630080257973543885', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('7395953810724781337', ({v9 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v10 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetStringWithTrap", ({setup : (function (){
codealchemist_log_type_pre('8511481482760632834', ({v6 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({get : (function (target, propertyKey, receiver){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_OTHER_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
return temp_3444589576563574513;
})}));
codealchemist_log_type_post('8511481482760632834', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('2289655628330274766', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-2395982990152655771', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1359532581761318875', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = p.prop;
codealchemist_log_type_post('-1359532581761318875', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-2395982990152655771', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('2289655628330274766', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('7395953810724781337', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(obj) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-2585740773656650622', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetIndexWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-4067346479356495493', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-3745879481486990212', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('8898869015273912573', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = p[0];
codealchemist_log_type_post('8898869015273912573', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-3745879481486990212', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-4067346479356495493', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-2585740773656650622', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('4941896496266757032', ({v9 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v10 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetIndexWithTrap", ({setup : (function (){
codealchemist_log_type_pre('8511481482760632834', ({v6 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({get : (function (target, propertyKey, receiver){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_OTHER_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
return temp_3444589576563574513;
})}));
codealchemist_log_type_post('8511481482760632834', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-4067346479356495493', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-3745879481486990212', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('8898869015273912573', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = p[0];
codealchemist_log_type_post('8898869015273912573', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-3745879481486990212', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-4067346479356495493', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('4941896496266757032', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-6241795182582149760', ({}));
var symbol = Symbol();
codealchemist_log_type_post('-6241795182582149760', ({v0 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(obj[symbol]) = SOME_NUMBER;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('4374996479934408975', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v8 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v7 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetSymbolWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('3986167620073812694', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v4 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-813411116869186889', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(value) = p[symbol];
codealchemist_log_type_post('4856296336223464786', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-813411116869186889', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('3986167620073812694', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v4 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('4374996479934408975', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('4444528010779700334', ({v9 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v11 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v10 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("GetSymbolWithTrap", ({setup : (function (){
codealchemist_log_type_pre('8511481482760632834', ({v6 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({get : (function (target, propertyKey, receiver){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_OTHER_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined)}));
return temp_3444589576563574513;
})}));
codealchemist_log_type_post('8511481482760632834', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('3986167620073812694', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v4 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-813411116869186889', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(value) = p[symbol];
codealchemist_log_type_post('4856296336223464786', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-813411116869186889', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('3986167620073812694', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v4 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('4444528010779700334', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8437792587086441713', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("HasStringWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('7122984821873450237', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-4404194618009534488', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1928600884303063267', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = ('prop') in (p);
codealchemist_log_type_post('-1928600884303063267', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-4404194618009534488', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('7122984821873450237', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('-8437792587086441713', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-8739677562847023696', ({v7 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v8 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("HasStringWithTrap", ({setup : (function (){
codealchemist_log_type_pre('7338535697968288536', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({has : (function (target, propertyKey){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('7338535697968288536', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('7122984821873450237', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-4404194618009534488', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1928600884303063267', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = ('prop') in (p);
codealchemist_log_type_post('-1928600884303063267', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-4404194618009534488', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('7122984821873450237', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('-8739677562847023696', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(obj[symbol]) = SOME_NUMBER;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('8364335582587584112', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v7 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("HasSymbolWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-8164548129593042825', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-8238826263742641900', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('-183468810050934789', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(value) = (symbol) in (p);
codealchemist_log_type_post('-183468810050934789', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-8238826263742641900', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-8164548129593042825', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('8364335582587584112', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('2539175312004051714', ({v7 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v9 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v8 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("HasSymbolWithTrap", ({setup : (function (){
codealchemist_log_type_pre('7338535697968288536', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({has : (function (target, propertyKey){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('7338535697968288536', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-8164548129593042825', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-8238826263742641900', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('-183468810050934789', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(value) = (symbol) in (p);
codealchemist_log_type_post('-183468810050934789', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-8238826263742641900', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-8164548129593042825', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('2539175312004051714', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('569412963134452269', ({}));
(obj) = ({prop : undefined});
codealchemist_log_type_post('569412963134452269', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
(value) = SOME_NUMBER;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-8827493839138237294', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetStringWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-196533256135797732', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-3534642279110707911', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-8073878096475948504', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p.prop) = value;
codealchemist_log_type_post('-8073878096475948504', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-3534642279110707911', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-196533256135797732', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-8827493839138237294', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-3136018614293056029', ({v10 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v8 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetStringWithTrap", ({setup : (function (){
codealchemist_log_type_pre('6840962167935218708', ({v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({set : (function (target, propertyKey, value, receiver){
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
(target[propertyKey]) = SOME_OTHER_NUMBER;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('6840962167935218708', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-196533256135797732', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-3534642279110707911', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-8073878096475948504', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p.prop) = value;
codealchemist_log_type_post('-8073878096475948504', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-3534642279110707911', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-196533256135797732', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-3136018614293056029', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(obj) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
(value) = SOME_NUMBER;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-7905004462131306263', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v7 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetIndexWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-1981982828452085797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-1653991222438684161', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('8454969885383718739', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p[0]) = value;
codealchemist_log_type_post('8454969885383718739', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-1653991222438684161', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1981982828452085797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-7905004462131306263', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-2413983678398910383', ({v10 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v8 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetIndexWithTrap", ({setup : (function (){
codealchemist_log_type_pre('6840962167935218708', ({v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({set : (function (target, propertyKey, value, receiver){
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
(target[propertyKey]) = SOME_OTHER_NUMBER;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('6840962167935218708', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-1981982828452085797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-1653991222438684161', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('8454969885383718739', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p[0]) = value;
codealchemist_log_type_post('8454969885383718739', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-1653991222438684161', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1981982828452085797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-2413983678398910383', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-1335297392040991748', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
(obj[symbol]) = undefined;
codealchemist_log_type_post('-1335297392040991748', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
(value) = SOME_NUMBER;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-7482325167416929884', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v8 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v7 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetSymbolWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-1655880639400278822', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v4 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-4444457702807847793', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p[symbol]) = value;
codealchemist_log_type_post('7989980307258027978', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-4444457702807847793', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1655880639400278822', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v4 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('-7482325167416929884', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('2189747633025402496', ({v10 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v8 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v11 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("SetSymbolWithTrap", ({setup : (function (){
codealchemist_log_type_pre('6840962167935218708', ({v7 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({set : (function (target, propertyKey, value, receiver){
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
(target[propertyKey]) = SOME_OTHER_NUMBER;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v1 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v0 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('6840962167935218708', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-1655880639400278822', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v4 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('-4444457702807847793', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(p[symbol]) = value;
codealchemist_log_type_post('7989980307258027978', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-4444457702807847793', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined), v1 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-1655880639400278822', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v3 : ((typeof symbol) != ('undefined')) ? (symbol) : (undefined), v4 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_6009424892220294655 = (value) === (SOME_OTHER_NUMBER);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof SOME_OTHER_NUMBER) != ('undefined')) ? (SOME_OTHER_NUMBER) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_6009424892220294655;
})}));
codealchemist_log_type_post('2189747633025402496', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-2256249072298133429', ({}));
var obj20prop = ({});
codealchemist_log_type_post('-2256249072298133429', ({v0 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var measured;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof measured) != ('undefined')) ? (measured) : (undefined)}));
codealchemist_log_type_pre('-8357405156695096741', ({v3 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v10 : ((typeof measured) != ('undefined')) ? (measured) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v2 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v12 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
newBenchmark("HasInIdiom", ({setup : (function (){
codealchemist_log_type_pre('5483540927406935982', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v1 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
for(var i = 0;(i) < (20);++i){
codealchemist_log_type_pre('-7861025075382909896', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
codealchemist_log_type_pre('3858529975198374551', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
(obj20prop[('prop') + (i)]) = SOME_NUMBER;
codealchemist_log_type_post('3858529975198374551', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
codealchemist_log_type_post('-7861025075382909896', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
}
codealchemist_log_type_post('5483540927406935982', ({v2 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
codealchemist_log_type_pre('1926970581914106394', ({v6 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v2 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined)}));
(p) = new Proxy(obj20prop, ({has : (function (target, propertyKey){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}), get : (function (target, propertyKey, receiver){
codealchemist_log_type_pre('-774299136150840759', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v4 : ((typeof receiver) != ('undefined')) ? (receiver) : (undefined), v3 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
if(((typeof propertyKey) == ('string')) && (propertyKey.match('prop'))){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
var temp_3444589576563574513 = SOME_NUMBER;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined)}));
return temp_3444589576563574513;
}else {
codealchemist_log_type_pre('-6346691346828984885', ({v2 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v3 : ((typeof receiver) != ('undefined')) ? (receiver) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
var temp_6346691346828984885 = Reflect.get(target, propertyKey, receiver);
codealchemist_log_type_post('-6346691346828984885', ({v2 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v3 : ((typeof receiver) != ('undefined')) ? (receiver) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
return temp_6346691346828984885;
}
codealchemist_log_type_post('-774299136150840759', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof propertyKey) != ('undefined')) ? (propertyKey) : (undefined), v4 : ((typeof receiver) != ('undefined')) ? (receiver) : (undefined), v3 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
})}));
codealchemist_log_type_post('1926970581914106394', ({v2 : ((typeof obj20prop) != ('undefined')) ? (obj20prop) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-8459772245174188999', ({}));
(measured) = (function measured(o){
codealchemist_log_type_pre('8887107388399914408', ({}));
var result = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-9212091286176804086', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var x in o){
codealchemist_log_type_pre('-6206466040274648176', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('3902662735287823874', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
if(Object.prototype.hasOwnProperty(o, x)){
codealchemist_log_type_pre('6728460908967492541', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
var v = o[x];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v0 : ((typeof v) != ('undefined')) ? (v) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
(result) += v;
codealchemist_log_type_post('383496466578906810', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
codealchemist_log_type_post('6728460908967492541', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof v) != ('undefined')) ? (v) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('3902662735287823874', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof v) != ('undefined')) ? (v) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-6206466040274648176', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof v) != ('undefined')) ? (v) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-9212091286176804086', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof v) != ('undefined')) ? (v) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
});
codealchemist_log_type_post('-8459772245174188999', ({v0 : ((typeof measured) != ('undefined')) ? (measured) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('2177625467307643668', ({v1 : ((typeof measured) != ('undefined')) ? (measured) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(result) = measured(p);
codealchemist_log_type_post('2177625467307643668', ({v1 : ((typeof measured) != ('undefined')) ? (measured) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}), teardown : (function (){
codealchemist_log_type_pre('4190697485365987123', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4190697485365987123 = (result) === ((20) * (SOME_NUMBER));
codealchemist_log_type_post('4190697485365987123', ({v1 : ((typeof SOME_NUMBER) != ('undefined')) ? (SOME_NUMBER) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4190697485365987123;
})}));
codealchemist_log_type_post('-8357405156695096741', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(value) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-2826868979645127008', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v6 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("IsExtensibleWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('7112645568431219369', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3471642652300700190', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('2797328900929510642', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.isExtensible(p);
codealchemist_log_type_post('2797328900929510642', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3471642652300700190', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('7112645568431219369', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('-2826868979645127008', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(value) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('6867173487569438893', ({v6 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v7 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
newBenchmark("IsExtensibleWithTrap", ({setup : (function (){
codealchemist_log_type_pre('-8090734992099011922', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({isExtensible : (function (target){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('-8090734992099011922', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('7112645568431219369', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3471642652300700190', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('2797328900929510642', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.isExtensible(p);
codealchemist_log_type_post('2797328900929510642', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3471642652300700190', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('7112645568431219369', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
codealchemist_log_type_pre('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_4784225265335014328 = (value) === (true);
codealchemist_log_type_post('4784225265335014328', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_4784225265335014328;
})}));
codealchemist_log_type_post('6867173487569438893', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(value) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('1074864441012796374', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("PreventExtensionsWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('3871929424089053740', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3292335165711810428', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-2521863898750481854', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.preventExtensions(p);
codealchemist_log_type_post('-2521863898750481854', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3292335165711810428', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('3871929424089053740', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('1074864441012796374', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(value) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-6517123049076765932', ({v7 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v3 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("PreventExtensionsWithTrap", ({setup : (function (){
codealchemist_log_type_pre('5697529583277348236', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({preventExtensions : (function (target){
codealchemist_log_type_pre('2837704553787279574', ({v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
Object.preventExtensions(target);
codealchemist_log_type_post('2837704553787279574', ({v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('5697529583277348236', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('3871929424089053740', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('3292335165711810428', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-2521863898750481854', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.preventExtensions(p);
codealchemist_log_type_post('-2521863898750481854', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3292335165711810428', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('3871929424089053740', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('-6517123049076765932', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-9078225575606820489', ({v4 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("GetPrototypeOfWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('7104249484260400735', ({}));
(p) = new Proxy(({}), ({}));
codealchemist_log_type_post('7104249484260400735', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-9039780659601427797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('1301971895903477273', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('834287360247178600', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.getPrototypeOf(p);
codealchemist_log_type_post('834287360247178600', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('1301971895903477273', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-9039780659601427797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('-9078225575606820489', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('2034466925628598767', ({v6 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("GetPrototypeOfWithTrap", ({setup : (function (){
codealchemist_log_type_pre('5389091263403883029', ({}));
(p) = new Proxy(({}), ({getPrototypeOf : (function (target){
codealchemist_log_type_pre('-7358311334922814559', ({}));
var temp_7358311334922814559 = Array.prototype;
codealchemist_log_type_post('-7358311334922814559', ({}));
return temp_7358311334922814559;
})}));
codealchemist_log_type_post('5389091263403883029', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('-9039780659601427797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('1301971895903477273', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('834287360247178600', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.getPrototypeOf(p);
codealchemist_log_type_post('834287360247178600', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('1301971895903477273', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-9039780659601427797', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('2034466925628598767', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-700862749943516125', ({v5 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("SetPrototypeOfWithoutTrap", ({setup : (function (){
codealchemist_log_type_pre('-8835286613584584626', ({}));
var obj = ({x : 1});
codealchemist_log_type_post('-8835286613584584626', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-4124780309167313388', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj.__proto__) = ({});
codealchemist_log_type_post('-4124780309167313388', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({}));
codealchemist_log_type_post('-4171269370160760720', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('78445878531359063', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('2345894228219594670', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1553743595550002780', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.setPrototypeOf(p, []);
codealchemist_log_type_post('-1553743595550002780', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('2345894228219594670', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('78445878531359063', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('-700862749943516125', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
codealchemist_log_type_pre('-6291838323279656873', ({v8 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined), v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
newBenchmark("SetPrototypeOfWithTrap", ({setup : (function (){
codealchemist_log_type_pre('-8835286613584584626', ({}));
var obj = ({x : 1});
codealchemist_log_type_post('-8835286613584584626', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-4124780309167313388', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj.__proto__) = ({});
codealchemist_log_type_post('-4124780309167313388', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-5955286897302964732', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(p) = new Proxy(obj, ({setPrototypeOf : (function (target, proto){
codealchemist_log_type_pre('-1097986158589465373', ({v2 : ((typeof proto) != ('undefined')) ? (proto) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
Object.setPrototypeOf(target, proto);
codealchemist_log_type_post('-1097986158589465373', ({v2 : ((typeof proto) != ('undefined')) ? (proto) : (undefined), v1 : ((typeof target) != ('undefined')) ? (target) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
})}));
codealchemist_log_type_post('-5955286897302964732', ({v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}), run : (function (){
codealchemist_log_type_pre('78445878531359063', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(var i = 0;(i) < (ITERATIONS);i++){
codealchemist_log_type_pre('2345894228219594670', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-1553743595550002780', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(value) = Object.setPrototypeOf(p, []);
codealchemist_log_type_post('-1553743595550002780', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('2345894228219594670', ({v2 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('78445878531359063', ({v1 : ((typeof ITERATIONS) != ('undefined')) ? (ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof p) != ('undefined')) ? (p) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_3444589576563574513 = value;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_3444589576563574513;
}), teardown : (function (){
})}));
codealchemist_log_type_post('-6291838323279656873', ({v0 : ((typeof newBenchmark) != ('undefined')) ? (newBenchmark) : (undefined)}));
