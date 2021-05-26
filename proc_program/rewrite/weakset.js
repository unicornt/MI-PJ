load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-8166708145277774911', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var SetBenchmark = new BenchmarkSuite('WeakSet', [], []);
codealchemist_log_type_post('-8166708145277774911', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof SetBenchmark) != ('undefined')) ? (SetBenchmark) : (undefined)}));
codealchemist_log_type_pre('8326873700713052678', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var SetBenchmark = new BenchmarkSuite('WeakSet-Constructor', [], []);
codealchemist_log_type_post('8326873700713052678', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof SetBenchmark) != ('undefined')) ? (SetBenchmark) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var ws;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('-3833718712383729214', ({v1 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
function WeakSetSetupBase(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
SetupObjectKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
codealchemist_log_type_pre('-7301110843908518723', ({}));
(ws) = new WeakSet();
codealchemist_log_type_post('-7301110843908518723', ({v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-3833718712383729214', ({}));
codealchemist_log_type_pre('-3031649570852991105', ({v2 : ((typeof WeakSetAdd) != ('undefined')) ? (WeakSetAdd) : (undefined), v1 : ((typeof WeakSetSetupBase) != ('undefined')) ? (WeakSetSetupBase) : (undefined)}));
function WeakSetSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof WeakSetSetupBase) != ('undefined')) ? (WeakSetSetupBase) : (undefined)}));
WeakSetSetupBase();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof WeakSetSetupBase) != ('undefined')) ? (WeakSetSetupBase) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof WeakSetAdd) != ('undefined')) ? (WeakSetAdd) : (undefined)}));
WeakSetAdd();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof WeakSetAdd) != ('undefined')) ? (WeakSetAdd) : (undefined)}));
}
codealchemist_log_type_post('-3031649570852991105', ({}));
codealchemist_log_type_pre('-7723396004823776748', ({}));
function WeakSetTearDown(){
codealchemist_log_type_pre('6697378765710824163', ({}));
(ws) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-7723396004823776748', ({}));
codealchemist_log_type_pre('-827360268232982362', ({v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
function WeakSetConstructor(){
codealchemist_log_type_pre('2282345313954420746', ({v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(ws) = new WeakSet(keys);
codealchemist_log_type_post('2282345313954420746', ({v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-827360268232982362', ({}));
codealchemist_log_type_pre('2608821058034479862', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
function WeakSetAdd(){
codealchemist_log_type_pre('-6774453464734841176', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('-794502139592021613', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('1994443337461016342', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
ws.add(keys[i]);
codealchemist_log_type_post('1994443337461016342', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_post('-794502139592021613', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-6774453464734841176', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('2608821058034479862', ({}));
codealchemist_log_type_pre('-3686419166265436543', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
function WeakSetHas(){
codealchemist_log_type_pre('-621433012088521822', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('-8857762378008280186', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('-2316910496361811858', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
if(! ws.has(keys[i])){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('-2316910496361811858', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_post('-8857762378008280186', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-621433012088521822', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('519929105421021164', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
for(var i = N;(i) < ((2) * (N));i++){
codealchemist_log_type_pre('2604784878593788424', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('2065783575243209488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
if(ws.has(keys[i])){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('2065783575243209488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_post('2604784878593788424', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('519929105421021164', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-3686419166265436543', ({}));
codealchemist_log_type_pre('7080795309524355395', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
function WeakSetDelete(){
codealchemist_log_type_pre('-1045222980481924519', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('2532352819362737821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_pre('-1608961698552069488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
ws.delete(keys[i]);
codealchemist_log_type_post('-1608961698552069488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
codealchemist_log_type_post('2532352819362737821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('-1045222980481924519', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof ws) != ('undefined')) ? (ws) : (undefined)}));
}
codealchemist_log_type_post('7080795309524355395', ({}));
