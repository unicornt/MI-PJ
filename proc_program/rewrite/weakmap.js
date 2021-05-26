load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-6452332213299399372', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var MapBenchmark = new BenchmarkSuite('WeakMap', [], []);
codealchemist_log_type_post('-6452332213299399372', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof MapBenchmark) != ('undefined')) ? (MapBenchmark) : (undefined)}));
codealchemist_log_type_pre('6577665901832911526', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var MapBenchmark = new BenchmarkSuite('WeakMapSetGet-Large', [], []);
codealchemist_log_type_post('6577665901832911526', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof MapBenchmark) != ('undefined')) ? (MapBenchmark) : (undefined)}));
codealchemist_log_type_pre('4876046775902602433', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var MapBenchmark = new BenchmarkSuite('WeakMapSet-Huge', [], []);
codealchemist_log_type_post('4876046775902602433', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof MapBenchmark) != ('undefined')) ? (MapBenchmark) : (undefined)}));
codealchemist_log_type_pre('7483792098108129413', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var MapBenchmark = new BenchmarkSuite('WeakMap-Constructor', [], []);
codealchemist_log_type_post('7483792098108129413', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof MapBenchmark) != ('undefined')) ? (MapBenchmark) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var wm;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('3068941475682466775', ({v1 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
function WeakMapSetupBase(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
SetupObjectKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
codealchemist_log_type_pre('-7627000267798118482', ({}));
(wm) = new WeakMap();
codealchemist_log_type_post('-7627000267798118482', ({v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('3068941475682466775', ({}));
codealchemist_log_type_pre('3334504485160664187', ({v2 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v1 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
function WeakMapSetupBaseLarge(){
codealchemist_log_type_pre('6845494894292256091', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
SetupObjectKeys((2) * (LargeN));
codealchemist_log_type_post('6845494894292256091', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
codealchemist_log_type_pre('-7627000267798118482', ({}));
(wm) = new WeakMap();
codealchemist_log_type_post('-7627000267798118482', ({v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('3334504485160664187', ({}));
codealchemist_log_type_pre('-3031649570852991105', ({v2 : ((typeof WeakMapSet) != ('undefined')) ? (WeakMapSet) : (undefined), v1 : ((typeof WeakMapSetupBase) != ('undefined')) ? (WeakMapSetupBase) : (undefined)}));
function WeakMapSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof WeakMapSetupBase) != ('undefined')) ? (WeakMapSetupBase) : (undefined)}));
WeakMapSetupBase();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof WeakMapSetupBase) != ('undefined')) ? (WeakMapSetupBase) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof WeakMapSet) != ('undefined')) ? (WeakMapSet) : (undefined)}));
WeakMapSet();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof WeakMapSet) != ('undefined')) ? (WeakMapSet) : (undefined)}));
}
codealchemist_log_type_post('-3031649570852991105', ({}));
codealchemist_log_type_pre('-7723396004823776748', ({}));
function WeakMapTearDown(){
codealchemist_log_type_pre('6697378765710824163', ({}));
(wm) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-7723396004823776748', ({}));
codealchemist_log_type_pre('-9053352534701965911', ({v3 : ((typeof keyValuePairs) != ('undefined')) ? (keyValuePairs) : (undefined)}));
function WeakMapConstructor(){
codealchemist_log_type_pre('-4468789114725926094', ({v2 : ((typeof keyValuePairs) != ('undefined')) ? (keyValuePairs) : (undefined)}));
(wm) = new WeakMap(keyValuePairs);
codealchemist_log_type_post('-4468789114725926094', ({v2 : ((typeof keyValuePairs) != ('undefined')) ? (keyValuePairs) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-9053352534701965911', ({}));
codealchemist_log_type_pre('-4229919021685378864', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapSet(){
codealchemist_log_type_pre('3297947490887323298', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('3312503392475210475', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('4504637899025918397', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
wm.set(keys[i], i);
codealchemist_log_type_post('4504637899025918397', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('3312503392475210475', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('3297947490887323298', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-4229919021685378864', ({}));
codealchemist_log_type_pre('-3686419166265436543', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapHas(){
codealchemist_log_type_pre('-621433012088521822', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('-8857762378008280186', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-2316910496361811858', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if(! wm.has(keys[i])){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('-2316910496361811858', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('-8857762378008280186', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-621433012088521822', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('519929105421021164', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = N;(i) < ((2) * (N));i++){
codealchemist_log_type_pre('2604784878593788424', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('2065783575243209488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if(wm.has(keys[i])){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('2065783575243209488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('2604784878593788424', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('519929105421021164', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-3686419166265436543', ({}));
codealchemist_log_type_pre('6771703311562253718', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapGet(){
codealchemist_log_type_pre('4288943873909616939', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('6146228780015946531', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-7285598849047714159', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if((wm.get(keys[i])) !== (i)){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('-7285598849047714159', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('6146228780015946531', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('4288943873909616939', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-3393095882365325686', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = N;(i) < ((2) * (N));i++){
codealchemist_log_type_pre('-1799568933708405805', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-414896698807460311', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if((wm.get(keys[i])) !== (undefined)){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('-414896698807460311', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('-1799568933708405805', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-3393095882365325686', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('6771703311562253718', ({}));
codealchemist_log_type_pre('7080795309524355395', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapDelete(){
codealchemist_log_type_pre('-1045222980481924519', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (N);i++){
codealchemist_log_type_pre('2532352819362737821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-1608961698552069488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
wm.delete(keys[i]);
codealchemist_log_type_post('-1608961698552069488', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('2532352819362737821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-1045222980481924519', ({v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('7080795309524355395', ({}));
codealchemist_log_type_pre('6141596869432890445', ({v2 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v6 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapSetGetLarge(){
codealchemist_log_type_pre('-3595109813749303353', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (LargeN);i++){
codealchemist_log_type_pre('-3954812644939301862', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('2736475710634920949', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
wm.set(keys[(i) * (2)], i);
codealchemist_log_type_post('2736475710634920949', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('-3954812644939301862', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-3595109813749303353', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-484128986809908382', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = 0;(i) < (LargeN);i++){
codealchemist_log_type_pre('8957114502782548687', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('9171184130087439012', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if((wm.get(keys[(i) * (2)])) !== (i)){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('9171184130087439012', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('8957114502782548687', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-484128986809908382', ({v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('1972210399112536213', ({v2 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(var i = N;(i) < ((2) * (LargeN));i++){
codealchemist_log_type_pre('5409093211974512904', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-1112900264194800041', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
if((wm.get(keys[((i) * (2)) + (1)])) !== (undefined)){
codealchemist_log_type_pre('5802199338371819523', ({}));
codealchemist_log_type_pre('3997529895621314748', ({}));
var temp_3997529895621314748 = new Error();
codealchemist_log_type_post('3997529895621314748', ({}));
throw temp_3997529895621314748;
codealchemist_log_type_post('5802199338371819523', ({}));
}
codealchemist_log_type_post('-1112900264194800041', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('5409093211974512904', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('1972210399112536213', ({v2 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v1 : ((typeof N) != ('undefined')) ? (N) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('6141596869432890445', ({}));
codealchemist_log_type_pre('148479248240233499', ({v4 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v5 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
function WeakMapSetHuge(){
codealchemist_log_type_pre('8420256613159809603', ({}));
function Foo(i){
codealchemist_log_type_pre('1746915283032246437', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(this.x) = i;
codealchemist_log_type_post('1746915283032246437', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8420256613159809603', ({}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let obj;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-989030640986289277', ({v3 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v4 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
for(let i = 0;(i) < (LargeN);i++){
codealchemist_log_type_pre('-1554675509880221562', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_pre('-485940338078892142', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(obj) = new Foo(i);
codealchemist_log_type_post('-485940338078892142', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('7273282188042027048', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
wm.set(obj, 1);
codealchemist_log_type_post('7273282188042027048', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
codealchemist_log_type_post('-1554675509880221562', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v3 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('-989030640986289277', ({v3 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v1 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v4 : ((typeof wm) != ('undefined')) ? (wm) : (undefined)}));
}
codealchemist_log_type_post('148479248240233499', ({}));
