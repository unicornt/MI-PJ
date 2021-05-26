load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3154502323954110614', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("SingleLineString", [], []);
codealchemist_log_type_post('3154502323954110614', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8799119707357304664', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("SingleLineStrings", [], []);
codealchemist_log_type_post('8799119707357304664', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8614409911327616146', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("MultiLineString", [], []);
codealchemist_log_type_post('-8614409911327616146', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4628521685983353459', ({}));
function SingleLineStringSetup(){
codealchemist_log_type_pre('723985113909659891', ({}));
(code) = (("\"") + ("This is a string".repeat(600))) + ("\"");
codealchemist_log_type_post('723985113909659891', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('4628521685983353459', ({}));
codealchemist_log_type_pre('2047431003623768799', ({}));
function SingleLineStringsSetup(){
codealchemist_log_type_pre('5221042332047464038', ({}));
(code) = "\"This is a string\"\n".repeat(600);
codealchemist_log_type_post('5221042332047464038', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('2047431003623768799', ({}));
codealchemist_log_type_pre('2738708807679174419', ({}));
function MultiLineStringSetup(){
codealchemist_log_type_pre('3436093707062859283', ({}));
(code) = (("\"") + ("This is a string \\\n".repeat(600))) + ("\"");
codealchemist_log_type_post('3436093707062859283', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('2738708807679174419', ({}));
function Run(){
codealchemist_log_type_pre('6405272979064618646', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
if((code) == (undefined)){
codealchemist_log_type_pre('-9137722639407598620', ({}));
codealchemist_log_type_pre('-1443506718077738978', ({}));
var temp_1443506718077738978 = new Error("No test data");
codealchemist_log_type_post('-1443506718077738978', ({}));
throw temp_1443506718077738978;
codealchemist_log_type_post('-9137722639407598620', ({}));
}
codealchemist_log_type_post('6405272979064618646', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
eval(code);
}
