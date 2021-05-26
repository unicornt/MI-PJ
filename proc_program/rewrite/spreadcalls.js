load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-7874076180159804171', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Call', [], []);
codealchemist_log_type_post('-7874076180159804171', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3276444210704681875', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('CallMethod', [], []);
codealchemist_log_type_post('-3276444210704681875', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3588548025857803682', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('CallNew', [], []);
codealchemist_log_type_post('-3588548025857803682', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var objectToSpread;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
codealchemist_log_type_pre('1452143975344000280', ({}));
function sum(){
codealchemist_log_type_pre('5773904466456012350', ({}));
var result = arguments[0];
codealchemist_log_type_post('5773904466456012350', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3010050686364189783', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 1;(i) < (arguments.length);++i){
codealchemist_log_type_pre('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += arguments[i];
codealchemist_log_type_post('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3010050686364189783', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('1452143975344000280', ({}));
codealchemist_log_type_pre('-8401116624647443044', ({}));
function CallSumSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(objectToSpread) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
codealchemist_log_type_pre('81969997547170119', ({v1 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
for(var i = 0;(i) < (100);++i){
codealchemist_log_type_pre('3938583937570855031', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
objectToSpread.push((i) + (1));
codealchemist_log_type_post('3938583937570855031', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
}
codealchemist_log_type_post('81969997547170119', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
}
codealchemist_log_type_post('-8401116624647443044', ({}));
codealchemist_log_type_pre('-8812014683647774296', ({v3 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
function CallSum(){
codealchemist_log_type_pre('8598496725705716413', ({v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined), v1 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(result) = sum(...objectToSpread);
codealchemist_log_type_post('8598496725705716413', ({v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-8812014683647774296', ({}));
codealchemist_log_type_pre('6175868189579329324', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function CallSumTearDown(){
codealchemist_log_type_pre('-8363796699599139080', ({}));
var expected = ((100) * ((100) + (1))) / (2);
codealchemist_log_type_post('-8363796699599139080', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('6175868189579329324', ({}));
codealchemist_log_type_pre('-228886159475319750', ({v1 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var O = ({sum : sum});
codealchemist_log_type_post('-228886159475319750', ({v0 : ((typeof O) != ('undefined')) ? (O) : (undefined), v1 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-8256458453222176396', ({v2 : ((typeof O) != ('undefined')) ? (O) : (undefined), v3 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
function CallMethodSum(){
codealchemist_log_type_pre('-5276308236800490636', ({v1 : ((typeof O) != ('undefined')) ? (O) : (undefined), v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
(result) = O.sum(...objectToSpread);
codealchemist_log_type_post('-5276308236800490636', ({v1 : ((typeof O) != ('undefined')) ? (O) : (undefined), v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-8256458453222176396', ({}));
codealchemist_log_type_pre('6175868189579329324', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function CallMethodSumTearDown(){
codealchemist_log_type_pre('-8363796699599139080', ({}));
var expected = ((100) * ((100) + (1))) / (2);
codealchemist_log_type_post('-8363796699599139080', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('6175868189579329324', ({}));
codealchemist_log_type_pre('-7733670060475284405', ({}));
function Sum(){
codealchemist_log_type_pre('5773904466456012350', ({}));
var result = arguments[0];
codealchemist_log_type_post('5773904466456012350', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3010050686364189783', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 1;(i) < (arguments.length);++i){
codealchemist_log_type_pre('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += arguments[i];
codealchemist_log_type_post('-2153109436353823644', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('5293205268857856153', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3010050686364189783', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-7149799585092106138', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_7149799585092106138 = (this.sum) = result;
codealchemist_log_type_post('-7149799585092106138', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_7149799585092106138;
}
codealchemist_log_type_post('-7733670060475284405', ({}));
codealchemist_log_type_pre('-1021011369794554715', ({v2 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v3 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
function CallNewSum(){
codealchemist_log_type_pre('-8892073311155301900', ({v1 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined)}));
(result) = new Sum(...objectToSpread);
codealchemist_log_type_post('-8892073311155301900', ({v1 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v2 : ((typeof objectToSpread) != ('undefined')) ? (objectToSpread) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-1021011369794554715', ({}));
codealchemist_log_type_pre('4534929852424892962', ({v3 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function CallNewSumTearDown(){
codealchemist_log_type_pre('-8363796699599139080', ({}));
var expected = ((100) * ((100) + (1))) / (2);
codealchemist_log_type_post('-8363796699599139080', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-1637478858132087831', ({v1 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_1637478858132087831 = ((result) instanceof (Sum)) && ((result.sum) === (expected));
codealchemist_log_type_post('-1637478858132087831', ({v1 : ((typeof Sum) != ('undefined')) ? (Sum) : (undefined), v2 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_1637478858132087831;
}
codealchemist_log_type_post('4534929852424892962', ({}));
