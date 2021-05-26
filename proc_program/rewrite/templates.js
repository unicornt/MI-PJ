load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4798822952844006956', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Untagged', [], []);
codealchemist_log_type_post('4798822952844006956', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3666137092272767262', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LargeUntagged', [], []);
codealchemist_log_type_post('-3666137092272767262', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('3474404008119313780', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Tagged', [], []);
codealchemist_log_type_post('3474404008119313780', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-4982978190633592899', ({}));
var SUBJECT = 'Bob';
codealchemist_log_type_post('-4982978190633592899', ({v0 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined)}));
codealchemist_log_type_pre('-6770019211615401247', ({}));
var TARGET = 'Mary';
codealchemist_log_type_post('-6770019211615401247', ({v0 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
codealchemist_log_type_pre('-693836019880359457', ({}));
var OBJECT = 'apple';
codealchemist_log_type_post('-693836019880359457', ({v0 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined)}));
codealchemist_log_type_pre('90596579065089490', ({}));
function UntaggedSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('90596579065089490', ({}));
codealchemist_log_type_pre('3433623010372487518', ({v4 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v2 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v3 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
function Untagged(){
codealchemist_log_type_pre('3619197657420997672', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
(result) = `${SUBJECT} gives ${TARGET} an ${OBJECT}.`;
codealchemist_log_type_post('3619197657420997672', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3433623010372487518', ({}));
codealchemist_log_type_pre('8735798457178237482', ({v4 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v2 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v3 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v5 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function UntaggedTearDown(){
codealchemist_log_type_pre('-1071815476701699620', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
var expected = (((((('') + (SUBJECT)) + (' gives ')) + (TARGET)) + (' an ')) + (OBJECT)) + ('.');
codealchemist_log_type_post('-1071815476701699620', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('8735798457178237482', ({}));
codealchemist_log_type_pre('90596579065089490', ({}));
function UntaggedLargeSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('90596579065089490', ({}));
codealchemist_log_type_pre('-8560231070437052407', ({}));
function UntaggedLarge(){
codealchemist_log_type_pre('-4591813070601852110', ({}));
(result) = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
 aliquam, elit euismod vestibulum ${0}lacinia, arcu odio sagittis mauris, id
 blandit dolor felis pretium nisl. Maecenas porttitor, nunc ut accumsan mollis,
 arcu metus rutrum arcu, ${1}ut varius dolor lorem nec risus. Integer convallis
 tristique ante, non pretium ante suscipit at. Sed egestas massa enim, convallis
 fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi accumsan
 quam nec erat viverra iaculis. ${2}Donec a scelerisque cras amet.`;
codealchemist_log_type_post('-4591813070601852110', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-8560231070437052407', ({}));
codealchemist_log_type_pre('-3452614868647871645', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function UntaggedLargeTearDown(){
codealchemist_log_type_pre('-4795737862409834967', ({}));
var expected = ((((((((((((("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ") + ("Vivamus\n aliquam, elit euismod vestibulum ")) + (0)) + ("lacinia, arcu odio")) + (" sagittis mauris, id\n blandit dolor felis pretium nisl. Maecenas ")) + ("porttitor, nunc ut accumsan mollis,\n arcu metus rutrum arcu, ")) + (1)) + ("ut varius dolor lorem nec risus. Integer convallis\n tristique ante, ")) + ("non pretium ante suscipit at. Sed egestas massa enim, convallis\n ")) + ("fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi")) + (" accumsan\n quam nec erat viverra iaculis. ")) + (2)) + ("Donec a ")) + ("scelerisque cras amet.");
codealchemist_log_type_post('-4795737862409834967', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('-3452614868647871645', ({}));
codealchemist_log_type_pre('90596579065089490', ({}));
function TaggedRawSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('90596579065089490', ({}));
codealchemist_log_type_pre('8616438608933521200', ({v5 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v3 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v4 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
function TaggedRaw(){
codealchemist_log_type_pre('-680408754322217851', ({v4 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v2 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v3 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
(result) = String.raw `${SUBJECT} gives ${TARGET} an ${OBJECT} \ud83c\udf4f.`;
codealchemist_log_type_post('-680408754322217851', ({v4 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v2 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v3 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('8616438608933521200', ({}));
codealchemist_log_type_pre('-6465797903238888814', ({v4 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v2 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v3 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v5 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function TaggedRawTearDown(){
codealchemist_log_type_pre('8050300308509484375', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined)}));
var expected = (((((('') + (SUBJECT)) + (' gives ')) + (TARGET)) + (' an ')) + (OBJECT)) + (' \\ud83c\\udf4f.');
codealchemist_log_type_post('8050300308509484375', ({v3 : ((typeof OBJECT) != ('undefined')) ? (OBJECT) : (undefined), v1 : ((typeof SUBJECT) != ('undefined')) ? (SUBJECT) : (undefined), v2 : ((typeof TARGET) != ('undefined')) ? (TARGET) : (undefined), v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
codealchemist_log_type_pre('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6009424892220294655 = (result) === (expected);
codealchemist_log_type_post('-6009424892220294655', ({v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6009424892220294655;
}
codealchemist_log_type_post('-6465797903238888814', ({}));
