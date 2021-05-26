load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('7459495894672113666', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("OneLineComment", [], []);
codealchemist_log_type_post('7459495894672113666', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2661587642650473706', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("OneLineComments", [], []);
codealchemist_log_type_post('2661587642650473706', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2986355174875894314', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("MultiLineComment", [], []);
codealchemist_log_type_post('2986355174875894314', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5859571713837379864', ({}));
function OneLineCommentSetup(){
codealchemist_log_type_pre('2216584593207508428', ({}));
(code) = ("//") + (" This is a comment... ".repeat(600));
codealchemist_log_type_post('2216584593207508428', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('-5859571713837379864', ({}));
codealchemist_log_type_pre('3621322950844973228', ({}));
function OneLineCommentsSetup(){
codealchemist_log_type_pre('916396632071633089', ({}));
(code) = "// This is a comment.\n".repeat(600);
codealchemist_log_type_post('916396632071633089', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('3621322950844973228', ({}));
codealchemist_log_type_pre('-7850104624131834546', ({}));
function MultiLineCommentSetup(){
codealchemist_log_type_pre('5974036320206132970', ({}));
(code) = (("/*") + (" This is a comment... ".repeat(600))) + ("*/");
codealchemist_log_type_post('5974036320206132970', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
codealchemist_log_type_pre('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
%FlattenString(code);
codealchemist_log_type_post('8290463967871236289', ({v1 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('-7850104624131834546', ({}));
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
