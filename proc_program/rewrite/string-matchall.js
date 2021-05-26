load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('8690409922325098721', ({v17 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
(()=>{
codealchemist_log_type_pre('4410767066787743636', ({}));
function Internalize(s){
codealchemist_log_type_pre('6958424921375202045', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
var temp_6958424921375202045 = Object.keys(({[s] : 0}))[0];
codealchemist_log_type_post('6958424921375202045', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
return temp_6958424921375202045;
}
codealchemist_log_type_post('4410767066787743636', ({}));
codealchemist_log_type_pre('-3259562781673762473', ({v1 : ((typeof Internalize) != ('undefined')) ? (Internalize) : (undefined)}));
const string = Internalize('a'.repeat(100));
codealchemist_log_type_post('-3259562781673762473', ({v1 : ((typeof Internalize) != ('undefined')) ? (Internalize) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let pattern;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let result;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-224991651450959086', ({}));
const setupString = (()=>(pattern) = '.');
codealchemist_log_type_post('-224991651450959086', ({v0 : ((typeof setupString) != ('undefined')) ? (setupString) : (undefined)}));
codealchemist_log_type_pre('-7966098206520885350', ({}));
const setupRegExp = (()=>(pattern) = /./g);
codealchemist_log_type_post('-7966098206520885350', ({v0 : ((typeof setupRegExp) != ('undefined')) ? (setupRegExp) : (undefined)}));
codealchemist_log_type_pre('-7322988536016407660', ({}));
const setupZeroWidth = (()=>(pattern) = /(?:)/g);
codealchemist_log_type_post('-7322988536016407660', ({v0 : ((typeof setupZeroWidth) != ('undefined')) ? (setupZeroWidth) : (undefined)}));
codealchemist_log_type_pre('7473368417884659290', ({}));
const setupZeroWidthUnicode = (()=>(pattern) = /(?:)/gu);
codealchemist_log_type_post('7473368417884659290', ({v0 : ((typeof setupZeroWidthUnicode) != ('undefined')) ? (setupZeroWidthUnicode) : (undefined)}));
codealchemist_log_type_pre('4331232549846536448', ({v3 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function benchIteratorCreation(){
codealchemist_log_type_pre('-2177781597645204257', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
(result) = string.matchAll(pattern);
codealchemist_log_type_post('-2177781597645204257', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('4331232549846536448', ({}));
codealchemist_log_type_pre('2184606083763383504', ({v3 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function benchBuiltin(){
codealchemist_log_type_pre('-6641831457878168969', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(const match of string.matchAll(pattern)){
codealchemist_log_type_pre('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
codealchemist_log_type_pre('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
(result) = match[0];
codealchemist_log_type_post('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6641831457878168969', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined), v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('2184606083763383504', ({}));
codealchemist_log_type_pre('2075403858456358232', ({v3 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v5 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function benchManualString(){
codealchemist_log_type_pre('3391426260739533358', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined)}));
let regexp = new RegExp(pattern, 'g');
codealchemist_log_type_post('3391426260739533358', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v0 : ((typeof regexp) != ('undefined')) ? (regexp) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let match;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
codealchemist_log_type_pre('7265605107101717455', ({v1 : ((typeof regexp) != ('undefined')) ? (regexp) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
while(((match) = regexp.exec(string)) !== (null)){
codealchemist_log_type_pre('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
codealchemist_log_type_pre('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
(result) = match[0];
codealchemist_log_type_post('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7265605107101717455', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined), v1 : ((typeof regexp) != ('undefined')) ? (regexp) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('2075403858456358232', ({}));
codealchemist_log_type_pre('-4214427580285657111', ({v2 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function benchManualRegExp(){
codealchemist_log_type_pre('-964963668777278771', ({}));
let match;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
codealchemist_log_type_pre('7265605107101717455', ({v1 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
while(((match) = pattern.exec(string)) !== (null)){
codealchemist_log_type_pre('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
codealchemist_log_type_pre('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined)}));
(result) = match[0];
codealchemist_log_type_post('8898869015273912573', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-3745879481486990212', ({v1 : ((typeof match) != ('undefined')) ? (match) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7265605107101717455', ({v0 : ((typeof match) != ('undefined')) ? (match) : (undefined), v1 : ((typeof pattern) != ('undefined')) ? (pattern) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-4214427580285657111', ({}));
codealchemist_log_type_pre('5223550474239111242', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinRegExpIteratorCreation', [], []);
codealchemist_log_type_post('5223550474239111242', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('7075604887602774771', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinStringIteratorCreation', [], []);
codealchemist_log_type_post('7075604887602774771', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('5204253798778111433', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinString', [], []);
codealchemist_log_type_post('5204253798778111433', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8095954865119242702', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllManualString', [], []);
codealchemist_log_type_post('8095954865119242702', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('5094599371344753', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinRegExp', [], []);
codealchemist_log_type_post('5094599371344753', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2514187087608107229', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllManualRegExp', [], []);
codealchemist_log_type_post('-2514187087608107229', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7815521617412079204', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinZeroWidth', [], []);
codealchemist_log_type_post('-7815521617412079204', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5369314875105652624', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringMatchAllBuiltinZeroWidthUnicode', [], []);
codealchemist_log_type_post('-5369314875105652624', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
})();
codealchemist_log_type_post('8690409922325098721', ({}));
