load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5838983900550517001', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Entries', [], []);
codealchemist_log_type_post('-5838983900550517001', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
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
codealchemist_log_type_pre('-8738669900741274615', ({v3 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
function Basic(){
codealchemist_log_type_pre('-3778178783443102626', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = Object.entries(object);
codealchemist_log_type_post('-3778178783443102626', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-8738669900741274615', ({}));
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
codealchemist_log_type_pre('-3826562665984371562', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicTearDown(){
codealchemist_log_type_pre('-2072178661489572144', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) = result.map(((entry)=>`[${[]}]`));
codealchemist_log_type_post('-2072178661489572144', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('500403815030937670', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_500403815030937670 = ((result.length) === (3)) && ((result.join(', ')) === ('[a, 10], [26.0, third], [b, 72]'));
codealchemist_log_type_post('500403815030937670', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_500403815030937670;
}
codealchemist_log_type_post('-3826562665984371562', ({}));
codealchemist_log_type_pre('5064253867895951726', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('EntriesMegamorphic', [], []);
codealchemist_log_type_post('5064253867895951726', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5663366873472934669', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function BasicMegamorphic(){
codealchemist_log_type_pre('-5945359553526347314', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) < (object.length);++i){
codealchemist_log_type_pre('-1813910250583555985', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1262111398674000348', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result[i]) = Object.entries(object[i]);
codealchemist_log_type_post('1262111398674000348', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-1813910250583555985', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-5945359553526347314', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-5663366873472934669', ({}));
codealchemist_log_type_pre('8585739574831523264', ({}));
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
codealchemist_log_type_pre('-2026969411272220606', ({v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var i = 0;(i) < (1000);i++){
codealchemist_log_type_pre('-6118338496622123521', ({v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-2256249072298133429', ({}));
var obj = ({});
codealchemist_log_type_post('-2256249072298133429', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var exp = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined)}));
codealchemist_log_type_pre('-3878157719031870859', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
for(var j = 0;(j) < (10);j++){
codealchemist_log_type_pre('5579930919095104886', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('2706643498486054532', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj[((('key-') + (i)) + ('-')) + (j)]) = ((('property-') + (i)) + ('-')) + (j);
codealchemist_log_type_post('2706643498486054532', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-6479154577706513087', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
(exp[j]) = [];
codealchemist_log_type_post('-6479154577706513087', ({v0 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_post('5579930919095104886', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}
codealchemist_log_type_post('-3878157719031870859', ({v3 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(object[i]) = obj;
codealchemist_log_type_post('7989980307258027978', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('7989980307258027978', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(expected[i]) = exp;
codealchemist_log_type_post('7989980307258027978', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-6118338496622123521', ({v1 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
}
codealchemist_log_type_post('-2026969411272220606', ({v2 : ((typeof exp) != ('undefined')) ? (exp) : (undefined), v5 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
}
codealchemist_log_type_post('8585739574831523264', ({}));
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
