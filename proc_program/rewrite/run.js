load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
load('../base.js');
load((arguments[0]) + ('.js'));
codealchemist_log_type_pre('-3888903574222718072', ({}));
var success = true;
codealchemist_log_type_post('-3888903574222718072', ({v0 : ((typeof success) != ('undefined')) ? (success) : (undefined)}));
codealchemist_log_type_pre('7747543798980777082', ({}));
function PrintResult(name, result){
codealchemist_log_type_pre('8425514915685103801', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
print(((name) + ('-BytecodeHandler(Score): ')) + (result));
codealchemist_log_type_post('8425514915685103801', ({v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7747543798980777082', ({}));
codealchemist_log_type_pre('8243486671932151620', ({}));
function PrintStep(name){
}
codealchemist_log_type_post('8243486671932151620', ({}));
codealchemist_log_type_pre('-3809483966262188939', ({v3 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined)}));
function PrintError(name, error){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v2 : ((typeof error) != ('undefined')) ? (error) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
PrintResult(name, error);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v2 : ((typeof error) != ('undefined')) ? (error) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
codealchemist_log_type_pre('-8817652104908720767', ({}));
(success) = false;
codealchemist_log_type_post('-8817652104908720767', ({v0 : ((typeof success) != ('undefined')) ? (success) : (undefined)}));
}
codealchemist_log_type_post('-3809483966262188939', ({}));
codealchemist_log_type_pre('-3517760555843473700', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
(BenchmarkSuite.config.doWarmup) = undefined;
codealchemist_log_type_post('-3517760555843473700', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('6844126392340125655', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
(BenchmarkSuite.config.doDeterministic) = undefined;
codealchemist_log_type_post('6844126392340125655', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8133718860480318562', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v2 : ((typeof PrintError) != ('undefined')) ? (PrintError) : (undefined), v1 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v3 : ((typeof PrintStep) != ('undefined')) ? (PrintStep) : (undefined)}));
BenchmarkSuite.RunSuites(({NotifyResult : PrintResult, NotifyError : PrintError, NotifyStep : PrintStep}));
codealchemist_log_type_post('-8133718860480318562', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v2 : ((typeof PrintError) != ('undefined')) ? (PrintError) : (undefined), v1 : ((typeof PrintResult) != ('undefined')) ? (PrintResult) : (undefined), v3 : ((typeof PrintStep) != ('undefined')) ? (PrintStep) : (undefined)}));
