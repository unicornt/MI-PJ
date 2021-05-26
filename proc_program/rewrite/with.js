load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1454811732391837091', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('With', [], []);
codealchemist_log_type_post('-1454811732391837091', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var objectUnderTest;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var objectUnderTestExtended;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var resultStore;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
codealchemist_log_type_pre('-2921661826641395027', ({}));
var VALUE_OF_PROPERTY = 'Simply a string';
codealchemist_log_type_post('-2921661826641395027', ({v0 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
codealchemist_log_type_pre('1508296883773329158', ({}));
var SOME_OTHER_VALUE = 'Another value';
codealchemist_log_type_post('1508296883773329158', ({v0 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined)}));
codealchemist_log_type_pre('-1011323869255423827', ({v2 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
function AccessOnSameLevelSetup(){
codealchemist_log_type_pre('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
(objectUnderTest) = ({first : VALUE_OF_PROPERTY});
codealchemist_log_type_post('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
}
codealchemist_log_type_post('-1011323869255423827', ({}));
codealchemist_log_type_pre('8696752635957970850', ({v3 : ((typeof first) != ('undefined')) ? (first) : (undefined), v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
function AccessOnSameLevel(){
codealchemist_log_type_pre('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
with(objectUnderTest){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
(resultStore) = first;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('8696752635957970850', ({}));
codealchemist_log_type_pre('-1165768817114048953', ({v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v2 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
function AccessOnSameLevelTearDown(){
codealchemist_log_type_pre('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
var temp_7530456446491951490 = (objectUnderTest.first) === (resultStore);
codealchemist_log_type_post('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
return temp_7530456446491951490;
}
codealchemist_log_type_post('-1165768817114048953', ({}));
codealchemist_log_type_pre('-3841647079363175450', ({v2 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
function AccessOverPrototypeChainSetup(){
codealchemist_log_type_pre('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
(objectUnderTest) = ({first : VALUE_OF_PROPERTY});
codealchemist_log_type_post('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
codealchemist_log_type_pre('-4616702463664943559', ({v2 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
(objectUnderTestExtended) = Object.create(objectUnderTest);
codealchemist_log_type_post('-4616702463664943559', ({v2 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
codealchemist_log_type_pre('8689230704651441650', ({v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
(objectUnderTestExtended.second) = 'Another string';
codealchemist_log_type_post('8689230704651441650', ({v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
}
codealchemist_log_type_post('-3841647079363175450', ({}));
codealchemist_log_type_pre('8696752635957970850', ({v3 : ((typeof first) != ('undefined')) ? (first) : (undefined), v1 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
function AccessOverPrototypeChain(){
codealchemist_log_type_pre('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined)}));
with(objectUnderTestExtended){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
(resultStore) = first;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTestExtended) != ('undefined')) ? (objectUnderTestExtended) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('8696752635957970850', ({}));
codealchemist_log_type_pre('-1165768817114048953', ({v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v2 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
function AccessOverPrototypeChainTearDown(){
codealchemist_log_type_pre('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
var temp_7530456446491951490 = (objectUnderTest.first) === (resultStore);
codealchemist_log_type_post('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
return temp_7530456446491951490;
}
codealchemist_log_type_post('-1165768817114048953', ({}));
codealchemist_log_type_pre('-1011323869255423827', ({v2 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
function CompetingScopeSetup(){
codealchemist_log_type_pre('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
(objectUnderTest) = ({first : VALUE_OF_PROPERTY});
codealchemist_log_type_post('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
}
codealchemist_log_type_post('-1011323869255423827', ({}));
codealchemist_log_type_pre('-763117500513167661', ({v2 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
function CompetingScope(){
codealchemist_log_type_pre('-104305489387715220', ({}));
var first = 'Not correct';
codealchemist_log_type_post('-104305489387715220', ({v0 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_pre('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
with(objectUnderTest){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
(resultStore) = first;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('1566219911639524198', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
}
codealchemist_log_type_post('-763117500513167661', ({}));
codealchemist_log_type_pre('-1165768817114048953', ({v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v2 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
function CompetingScopeTearDown(){
codealchemist_log_type_pre('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
var temp_7530456446491951490 = (objectUnderTest.first) === (resultStore);
codealchemist_log_type_post('-7530456446491951490', ({v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined), v1 : ((typeof resultStore) != ('undefined')) ? (resultStore) : (undefined)}));
return temp_7530456446491951490;
}
codealchemist_log_type_post('-1165768817114048953', ({}));
codealchemist_log_type_pre('-1011323869255423827', ({v2 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
function SetOnSameLevelSetup(){
codealchemist_log_type_pre('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined)}));
(objectUnderTest) = ({first : VALUE_OF_PROPERTY});
codealchemist_log_type_post('3661603776740449587', ({v1 : ((typeof VALUE_OF_PROPERTY) != ('undefined')) ? (VALUE_OF_PROPERTY) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
}
codealchemist_log_type_post('-1011323869255423827', ({}));
codealchemist_log_type_pre('8696752635957970850', ({v3 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
function SetOnSameLevel(){
codealchemist_log_type_pre('1566219911639524198', ({v2 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
with(objectUnderTest){
codealchemist_log_type_pre('-650326583023879386', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined)}));
(first) = SOME_OTHER_VALUE;
codealchemist_log_type_post('670706250746082504', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v0 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_post('-650326583023879386', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v0 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
}
codealchemist_log_type_post('1566219911639524198', ({v2 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
}
codealchemist_log_type_post('8696752635957970850', ({}));
codealchemist_log_type_pre('-1165768817114048953', ({v2 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v1 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
function SetOnSameLevelTearDown(){
codealchemist_log_type_pre('-7530456446491951490', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
var temp_7530456446491951490 = (objectUnderTest.first) === (SOME_OTHER_VALUE);
codealchemist_log_type_post('-7530456446491951490', ({v1 : ((typeof SOME_OTHER_VALUE) != ('undefined')) ? (SOME_OTHER_VALUE) : (undefined), v0 : ((typeof objectUnderTest) != ('undefined')) ? (objectUnderTest) : (undefined)}));
return temp_7530456446491951490;
}
codealchemist_log_type_post('-1165768817114048953', ({}));
