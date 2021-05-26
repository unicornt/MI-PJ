load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('5382370611886896561', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf', [], []);
codealchemist_log_type_post('5382370611886896561', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var iterable;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('-4330174839187710534', ({}));
var N = 100;
codealchemist_log_type_post('-4330174839187710534', ({v0 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('-460879813751875261', ({}));
var expected, result;
codealchemist_log_type_post('-460879813751875261', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6851018341802440622', ({v3 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
function ForOfArraySetupHelper(constructor){
codealchemist_log_type_pre('-485940338078892142', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined)}));
(iterable) = new constructor(N);
codealchemist_log_type_post('-485940338078892142', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v1 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('8384789889565077130', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v2 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
(iterable[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
}
codealchemist_log_type_post('8384789889565077130', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('977283648152843062', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
(expected) = (N) - (1);
codealchemist_log_type_post('977283648152843062', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
}
codealchemist_log_type_post('-6851018341802440622', ({}));
codealchemist_log_type_pre('-1811766169724026000', ({v1 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
function ForOfArraySetup(){
codealchemist_log_type_pre('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
ForOfArraySetupHelper(Array);
codealchemist_log_type_post('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
}
codealchemist_log_type_post('-1811766169724026000', ({}));
codealchemist_log_type_pre('1432476011751665536', ({v1 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined), v3 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
function ForOfArrayKeysSetup(){
codealchemist_log_type_pre('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
ForOfArraySetupHelper(Array);
codealchemist_log_type_post('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
codealchemist_log_type_pre('-5994033843070627177', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
(iterable) = iterable.keys();
codealchemist_log_type_post('-5994033843070627177', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
}
codealchemist_log_type_post('1432476011751665536', ({}));
codealchemist_log_type_pre('3121446557480641074', ({v1 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined), v3 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
function ForOfArrayEntriesSetup(){
codealchemist_log_type_pre('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
ForOfArraySetupHelper(Array);
codealchemist_log_type_post('-3738781180301237677', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
codealchemist_log_type_pre('8411944328424042733', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
(iterable) = iterable.entries();
codealchemist_log_type_post('8411944328424042733', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(expected) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
}
codealchemist_log_type_post('3121446557480641074', ({}));
codealchemist_log_type_pre('-7819064757295523134', ({v1 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
function ForOfUint8ArraySetup(){
codealchemist_log_type_pre('-6190947986654149027', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
ForOfArraySetupHelper(Uint8Array);
codealchemist_log_type_post('-6190947986654149027', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
}
codealchemist_log_type_post('-7819064757295523134', ({}));
codealchemist_log_type_pre('4166729592446281086', ({v1 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
function ForOfFloat64ArraySetup(){
codealchemist_log_type_pre('89830537020100687', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
ForOfArraySetupHelper(Float64Array);
codealchemist_log_type_post('89830537020100687', ({v0 : ((typeof ForOfArraySetupHelper) != ('undefined')) ? (ForOfArraySetupHelper) : (undefined)}));
}
codealchemist_log_type_post('4166729592446281086', ({}));
codealchemist_log_type_pre('4201333985939092270', ({}));
function ForOfStringSetup(){
codealchemist_log_type_pre('-410603694761772572', ({}));
(iterable) = "abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789";
codealchemist_log_type_post('-410603694761772572', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('-1084646901368042678', ({}));
(expected) = "9";
codealchemist_log_type_post('-1084646901368042678', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
}
codealchemist_log_type_post('4201333985939092270', ({}));
codealchemist_log_type_pre('-8540541110603449893', ({}));
function Equals(expected, actual){
codealchemist_log_type_pre('-2603483860753823642', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
if((expected) === (actual)){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-2603483860753823642', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-5397333177633891228', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
if((typeof expected) !== (typeof actual)){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-5397333177633891228', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6474760267513355086', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
if((typeof expected) !== ('object')){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-6474760267513355086', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('2063187320064289491', ({v4 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v3 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
for(var k of Object.keys(expected)){
codealchemist_log_type_pre('228452325984861154', ({v2 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('-8911193433439979613', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
if(! (k) in (actual)){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-8911193433439979613', ({v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('-4041571238721868834', ({v0 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v3 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
if(! Equals(expected[k], actual[k])){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-4041571238721868834', ({v0 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v3 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_post('228452325984861154', ({v2 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v1 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
}
codealchemist_log_type_post('2063187320064289491', ({v4 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v3 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('2636554748427333721', ({v2 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
for(var k of Object.keys(actual)){
codealchemist_log_type_pre('5347700740218548599', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('-8911193433439979613', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
if(! (k) in (expected)){
codealchemist_log_type_pre('2519535842393195618', ({}));
var temp_2519535842393195618 = false;
codealchemist_log_type_post('2519535842393195618', ({}));
return temp_2519535842393195618;
}
codealchemist_log_type_post('-8911193433439979613', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_post('5347700740218548599', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
}
codealchemist_log_type_post('2636554748427333721', ({v2 : ((typeof actual) != ('undefined')) ? (actual) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-8540541110603449893', ({}));
codealchemist_log_type_pre('4298635630324384848', ({v2 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v3 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function ForOfTearDown(){
codealchemist_log_type_pre('6697378765710824163', ({}));
(iterable) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
codealchemist_log_type_pre('6252256924734267070', ({v0 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
if(! Equals(expected, result)){
codealchemist_log_type_pre('4723866370091883641', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6090564236520543856', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6090564236520543856 = new Error(("Bad result: ") + (result));
codealchemist_log_type_post('-6090564236520543856', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
throw temp_6090564236520543856;
codealchemist_log_type_post('4723866370091883641', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('6252256924734267070', ({v0 : ((typeof Equals) != ('undefined')) ? (Equals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('4298635630324384848', ({}));
codealchemist_log_type_pre('4959804650166366983', ({v2 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
function ForOf(){
codealchemist_log_type_pre('6654352844117532687', ({v1 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined)}));
for(var x of iterable){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
(result) = x;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('6654352844117532687', ({v1 : ((typeof iterable) != ('undefined')) ? (iterable) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('4959804650166366983', ({}));
