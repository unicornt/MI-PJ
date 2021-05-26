load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1214295017268451556', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Values', [], []);
codealchemist_log_type_post('1214295017268451556', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var object;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var expected;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var symbol1;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof symbol1) != ('undefined')) ? (symbol1) : (undefined)}));
codealchemist_log_type_pre('-1321990285780093986', ({v3 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
function Basic(){
codealchemist_log_type_pre('5778691147779493168', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = Object.values(object);
codealchemist_log_type_post('5778691147779493168', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-1321990285780093986', ({}));
codealchemist_log_type_pre('3067771290710039518', ({}));
function BasicSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-801096415329225030', ({}));
(symbol1) = Symbol('test');
codealchemist_log_type_post('-801096415329225030', ({v0 : ((typeof symbol1) != ('undefined')) ? (symbol1) : (undefined)}));
codealchemist_log_type_pre('-7493965529908590730', ({}));
(object) = ({a : 10});
codealchemist_log_type_post('-7493965529908590730', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('2116370127428945229', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(object[26.0]) = 'third';
codealchemist_log_type_post('2116370127428945229', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('3485399747140071051', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(object.b) = 72;
codealchemist_log_type_post('3485399747140071051', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-4731426307370384972', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof symbol1) != ('undefined')) ? (symbol1) : (undefined)}));
(object[symbol1]) = 'TEST';
codealchemist_log_type_post('-4731426307370384972', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof symbol1) != ('undefined')) ? (symbol1) : (undefined)}));
codealchemist_log_type_pre('6266701916899924719', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
Object.defineProperty(object, 'not-enumerable', ({enumerable : false, value : 'nope', writable : true, configurable : true}));
codealchemist_log_type_post('6266701916899924719', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
}
codealchemist_log_type_post('3067771290710039518', ({}));
codealchemist_log_type_pre('1433536784258060666', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicTearDown(){
codealchemist_log_type_pre('-2158986016052043000', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_2158986016052043000 = ((((result.length) === (3)) && ((result[0]) === (10))) && ((result[1]) === ('third'))) && ((result[2]) === (72));
codealchemist_log_type_post('-2158986016052043000', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_2158986016052043000;
}
codealchemist_log_type_post('1433536784258060666', ({}));
codealchemist_log_type_pre('-7209642649047164293', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ValuesMegamorphic', [], []);
codealchemist_log_type_post('-7209642649047164293', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4340986299856179700', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicMegamorphic(){
codealchemist_log_type_pre('2099739385395154639', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) < (object.length);++i){
codealchemist_log_type_pre('-4006886842458843601', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('2524336203961304844', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result[i]) = Object.values(object[i]);
codealchemist_log_type_post('2524336203961304844', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-4006886842458843601', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2099739385395154639', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('4340986299856179700', ({}));
codealchemist_log_type_pre('-7035385438293145062', ({}));
function BasicMegamorphicSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(object) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(expected) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(result) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-4659324775772732453', ({v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var i = 0;(i) < (1000);i++){
codealchemist_log_type_pre('-2575373181256349626', ({v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-2256249072298133429', ({}));
var obj = ({});
codealchemist_log_type_post('-2256249072298133429', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var exp = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined)}));
codealchemist_log_type_pre('6920256068703718780', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
for(var j = 0;(j) < (10);j++){
codealchemist_log_type_pre('6345864336665296317', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('2706643498486054532', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj[((('key-') + (i)) + ('-')) + (j)]) = ((('property-') + (i)) + ('-')) + (j);
codealchemist_log_type_post('2706643498486054532', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('5543092826281753034', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
(exp[j]) = ((('property-') + (i)) + ('-')) + (j);
codealchemist_log_type_post('5543092826281753034', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('6345864336665296317', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}
codealchemist_log_type_post('6920256068703718780', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(object[i]) = obj;
codealchemist_log_type_post('7989980307258027978', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(expected[i]) = exp;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-2575373181256349626', ({v1 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
}
codealchemist_log_type_post('-4659324775772732453', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
}
codealchemist_log_type_post('-7035385438293145062', ({}));
codealchemist_log_type_pre('-4422223139783976647', ({v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicMegamorphicTearDown(){
codealchemist_log_type_pre('-3041614534608650491', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
if((JSON.stringify(expected)) !== (JSON.stringify(result))){
codealchemist_log_type_pre('-500344363595056698', ({}));
codealchemist_log_type_pre('-6572411308691607969', ({}));
var temp_6572411308691607969 = new Error("FAILURE");
codealchemist_log_type_post('-6572411308691607969', ({}));
throw temp_6572411308691607969;
codealchemist_log_type_post('-500344363595056698', ({}));
}
codealchemist_log_type_post('-3041614534608650491', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3566000873689212562', ({}));
(object) = (result) = (expected) = undefined;
codealchemist_log_type_post('-3566000873689212562', ({v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-4422223139783976647', ({}));
