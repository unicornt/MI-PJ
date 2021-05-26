load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3250621741998459555', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringRepeat', [], []);
codealchemist_log_type_post('3250621741998459555', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('3479357649631370991', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringStartsWith', [], []);
codealchemist_log_type_post('3479357649631370991', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1929306026840343876', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringEndsWith', [], []);
codealchemist_log_type_post('-1929306026840343876', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('588546891717950534', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringIncludes', [], []);
codealchemist_log_type_post('588546891717950534', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2804137050419446145', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringFromCodePoint', [], []);
codealchemist_log_type_post('-2804137050419446145', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-4760309663470879223', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAt', [], []);
codealchemist_log_type_post('-4760309663470879223', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('6135650171690411539', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAtSum', [], []);
codealchemist_log_type_post('6135650171690411539', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3989009486331743772', ({}));
var stringRepeatSource = "abc";
codealchemist_log_type_post('-3989009486331743772', ({v0 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
codealchemist_log_type_pre('90596579065089490', ({}));
function RepeatSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('90596579065089490', ({}));
codealchemist_log_type_pre('2536468702317810764', ({v2 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
function Repeat(){
codealchemist_log_type_pre('752191066746217592', ({v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
(result) = stringRepeatSource.repeat(500);
codealchemist_log_type_post('752191066746217592', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
}
codealchemist_log_type_post('2536468702317810764', ({}));
codealchemist_log_type_pre('-435775078390568516', ({v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
function RepeatTearDown(){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var expected = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('2001676002086306298', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
for(var i = 0;(i) < (1000);i++){
codealchemist_log_type_pre('-1070538409340644513', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
(expected) += stringRepeatSource;
codealchemist_log_type_post('383496466578906810', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
codealchemist_log_type_post('-1070538409340644513', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
}
codealchemist_log_type_post('2001676002086306298', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof stringRepeatSource) != ('undefined')) ? (stringRepeatSource) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('-435775078390568516', ({}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var str;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var substr;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
codealchemist_log_type_pre('1705815147882087016', ({}));
function WithSetup(){
codealchemist_log_type_pre('5522290525266514228', ({}));
(str) = "abc".repeat(500);
codealchemist_log_type_post('5522290525266514228', ({v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
codealchemist_log_type_pre('-1102809768161577674', ({}));
(substr) = "abc".repeat(200);
codealchemist_log_type_post('-1102809768161577674', ({v0 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('1705815147882087016', ({}));
codealchemist_log_type_pre('4021023515095967168', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function WithTearDown(){
codealchemist_log_type_pre('-4148929545702940233', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_4148929545702940233 = ! ! result;
codealchemist_log_type_post('-4148929545702940233', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_4148929545702940233;
}
codealchemist_log_type_post('4021023515095967168', ({}));
codealchemist_log_type_pre('-6527718085544449785', ({v2 : ((typeof str) != ('undefined')) ? (str) : (undefined), v3 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
function StartsWith(){
codealchemist_log_type_pre('-8218978587865214868', ({v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
(result) = str.startsWith(substr);
codealchemist_log_type_post('-8218978587865214868', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
}
codealchemist_log_type_post('-6527718085544449785', ({}));
codealchemist_log_type_pre('5691925641687525539', ({v2 : ((typeof str) != ('undefined')) ? (str) : (undefined), v3 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
function EndsWith(){
codealchemist_log_type_pre('154948990272664890', ({v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
(result) = str.endsWith(substr);
codealchemist_log_type_post('154948990272664890', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
}
codealchemist_log_type_post('5691925641687525539', ({}));
codealchemist_log_type_pre('3089878702158835300', ({}));
function IncludesSetup(){
codealchemist_log_type_pre('-8561337162558066846', ({}));
(str) = (("def".repeat(100)) + ("abc".repeat(100))) + ("qqq".repeat(100));
codealchemist_log_type_post('-8561337162558066846', ({v0 : ((typeof str) != ('undefined')) ? (str) : (undefined)}));
codealchemist_log_type_pre('9200577190635278529', ({}));
(substr) = "abc".repeat(100);
codealchemist_log_type_post('9200577190635278529', ({v0 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
}
codealchemist_log_type_post('3089878702158835300', ({}));
codealchemist_log_type_pre('7217328060612331120', ({v2 : ((typeof str) != ('undefined')) ? (str) : (undefined), v3 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
function Includes(){
codealchemist_log_type_pre('5564110992424926525', ({v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
(result) = str.includes(substr);
codealchemist_log_type_post('5564110992424926525', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof str) != ('undefined')) ? (str) : (undefined), v2 : ((typeof substr) != ('undefined')) ? (substr) : (undefined)}));
}
codealchemist_log_type_post('7217328060612331120', ({}));
codealchemist_log_type_pre('3135190079996432994', ({}));
var MAX_CODE_POINT = 0xFFFFF;
codealchemist_log_type_post('3135190079996432994', ({v0 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
codealchemist_log_type_pre('-1570063083217209043', ({}));
const K = 1024;
codealchemist_log_type_post('-1570063083217209043', ({v0 : ((typeof K) != ('undefined')) ? (K) : (undefined)}));
codealchemist_log_type_pre('7992995608327882373', ({v4 : ((typeof K) != ('undefined')) ? (K) : (undefined), v3 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
function FromCodePointSetup(){
codealchemist_log_type_pre('-1119089323875944151', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
(result) = new Array(((MAX_CODE_POINT) + (1)) / (K));
codealchemist_log_type_post('-1119089323875944151', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7992995608327882373', ({}));
codealchemist_log_type_pre('-8260190133257560190', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function FromCodePoint(){
codealchemist_log_type_pre('-5410508975897042198', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) <= (MAX_CODE_POINT);(i) += K){
codealchemist_log_type_pre('-763840453727590064', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('6935466078027956595', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result[i]) = String.fromCodePoint(i);
codealchemist_log_type_post('6935466078027956595', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-763840453727590064', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-5410508975897042198', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-8260190133257560190', ({}));
codealchemist_log_type_pre('2226728972148104113', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function FromCodePointTearDown(){
codealchemist_log_type_pre('-3964509985062739766', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) <= (MAX_CODE_POINT);(i) += K){
codealchemist_log_type_pre('-4617351419216426399', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-5550163398421798872', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
if((i) !== (result[i].codePointAt(0))){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-5550163398421798872', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-4617351419216426399', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3964509985062739766', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('2226728972148104113', ({}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var allCodePoints;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined)}));
codealchemist_log_type_pre('-3475763530247437132', ({v4 : ((typeof K) != ('undefined')) ? (K) : (undefined), v3 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
function CodePointAtSetup(){
codealchemist_log_type_pre('-1119089323875944151', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
(allCodePoints) = new Array(((MAX_CODE_POINT) + (1)) / (K));
codealchemist_log_type_post('-1119089323875944151', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined)}));
codealchemist_log_type_pre('2409120980909363611', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined)}));
for(var i = 0;(i) <= (MAX_CODE_POINT);(i) += K){
codealchemist_log_type_pre('-4381048565327744985', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-960551938396560081', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(allCodePoints) = String.fromCodePoint(i);
codealchemist_log_type_post('-960551938396560081', ({v0 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-4381048565327744985', ({v0 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('2409120980909363611', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v3 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3475763530247437132', ({}));
codealchemist_log_type_pre('-2158243017373359731', ({v4 : ((typeof K) != ('undefined')) ? (K) : (undefined), v3 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v5 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined)}));
function CodePointAt(){
codealchemist_log_type_pre('-5972112927478329196', ({}));
(result) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('5208283931918546923', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v4 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) <= (MAX_CODE_POINT);(i) += K){
codealchemist_log_type_pre('-903026743133403689', ({v1 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-8293022451830167142', ({v1 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += allCodePoints.codePointAt(i);
codealchemist_log_type_post('-8293022451830167142', ({v1 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-903026743133403689', ({v1 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('5208283931918546923', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v4 : ((typeof allCodePoints) != ('undefined')) ? (allCodePoints) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-2158243017373359731', ({}));
codealchemist_log_type_pre('883769147489764571', ({v3 : ((typeof K) != ('undefined')) ? (K) : (undefined), v2 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function CodePointAtTearDown(){
codealchemist_log_type_pre('5381338882354820813', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_5381338882354820813 = (result) === ((((MAX_CODE_POINT) / (K)) * (((MAX_CODE_POINT) / (K)) + (1))) / (2));
codealchemist_log_type_post('5381338882354820813', ({v2 : ((typeof K) != ('undefined')) ? (K) : (undefined), v1 : ((typeof MAX_CODE_POINT) != ('undefined')) ? (MAX_CODE_POINT) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_5381338882354820813;
}
codealchemist_log_type_post('883769147489764571', ({}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var payload;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
codealchemist_log_type_pre('-5291172500085661743', ({}));
function CodePointAtSumSetup(){
codealchemist_log_type_pre('-1393293190050149547', ({}));
(payload) = "abcdefghijklmnopqrstuvwxyz";
codealchemist_log_type_post('-1393293190050149547', ({v0 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
codealchemist_log_type_pre('-5160985855368522411', ({v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
for(var j = 0;(j) < (16);++j){
codealchemist_log_type_pre('4772026049931333758', ({v0 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
(payload) += payload;
codealchemist_log_type_post('4772026049931333758', ({v0 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
}
codealchemist_log_type_post('-5160985855368522411', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
}
codealchemist_log_type_post('-5291172500085661743', ({}));
codealchemist_log_type_pre('-6416074174883030114', ({v3 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
function CodePointAtSum(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var c = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
codealchemist_log_type_pre('3343451797169988243', ({v2 : ((typeof c) != ('undefined')) ? (c) : (undefined), v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
for((j) = (payload.length) - (1);(j) >= (0);--j){
codealchemist_log_type_pre('6345569310323841723', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
(c) += payload.charCodeAt(j);
codealchemist_log_type_post('6345569310323841723', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
}
codealchemist_log_type_post('3343451797169988243', ({v2 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof payload) != ('undefined')) ? (payload) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_3444589576563574513 = c;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-6416074174883030114', ({}));
