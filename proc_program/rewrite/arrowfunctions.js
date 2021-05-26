load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('8456274998850774220', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("ArrowFunctionShort", [], []);
codealchemist_log_type_post('8456274998850774220', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('7427727129117700048', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("ArrowFunctionLong", [], []);
codealchemist_log_type_post('7427727129117700048', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4202180028158983126', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("CommaSepExpressionListShort", [], []);
codealchemist_log_type_post('4202180028158983126', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8265566644295253567', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("CommaSepExpressionListLong", [], []);
codealchemist_log_type_post('-8265566644295253567', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2369790274159562221', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("CommaSepExpressionListLate", [], []);
codealchemist_log_type_post('2369790274159562221', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3397291135818633178', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite("FakeArrowFunction", [], []);
codealchemist_log_type_post('-3397291135818633178', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1444584612949047192', ({}));
function ArrowFunctionShortSetup(){
codealchemist_log_type_pre('-251267425787673755', ({}));
(code) = ("let a;\n") + ("a = (a,b) => { return a+b; }\n".repeat(50));
codealchemist_log_type_post('-251267425787673755', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('-1444584612949047192', ({}));
codealchemist_log_type_pre('2818573770933954851', ({}));
function ArrowFunctionLongSetup(){
codealchemist_log_type_pre('-5472633048113235243', ({}));
(code) = ("let a;\n") + ("a = (a,b,c,d,e,f,g,h,i,j) => { return a+b; }\n".repeat(50));
codealchemist_log_type_post('-5472633048113235243', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('2818573770933954851', ({}));
codealchemist_log_type_pre('2955216318541076963', ({}));
function CommaSepExpressionListShortSetup(){
codealchemist_log_type_pre('3526271184713216560', ({}));
(code) = ("let a;\n") + ("a = (a,1)\n".repeat(50));
codealchemist_log_type_post('3526271184713216560', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('2955216318541076963', ({}));
codealchemist_log_type_pre('3921441709110146816', ({}));
function CommaSepExpressionListLongSetup(){
codealchemist_log_type_pre('-4060999908142845806', ({}));
(code) = ("let a; let b; let c;\n") + ("a = (a,2,3,4,5,b,c,1,7,1)\n".repeat(50));
codealchemist_log_type_post('-4060999908142845806', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('3921441709110146816', ({}));
codealchemist_log_type_pre('-6019659934124170155', ({}));
function CommaSepExpressionListLateSetup(){
codealchemist_log_type_pre('5570737337313704577', ({}));
(code) = ("let a; let b; let c; let d; let e; let f; let g; let h; let i;\n") + ("a = (a,b,c,d,e,f,g,h,i,1)\n".repeat(50));
codealchemist_log_type_post('5570737337313704577', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('-6019659934124170155', ({}));
codealchemist_log_type_pre('2344103885180492315', ({}));
function FakeArrowFunctionSetup(){
codealchemist_log_type_pre('230604441591142547', ({}));
(code) = ("let a; let b; let c; let d; let e; let f; let g; let h; let i; let j;\n") + ("a = (a,b,c,d,e,f,g,h,i,j)\n".repeat(50));
codealchemist_log_type_post('230604441591142547', ({v0 : ((typeof code) != ('undefined')) ? (code) : (undefined)}));
}
codealchemist_log_type_post('2344103885180492315', ({}));
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
