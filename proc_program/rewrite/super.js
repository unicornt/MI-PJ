load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5872569963098562932', ({}));
'use strict';
codealchemist_log_type_post('-5872569963098562932', ({}));
codealchemist_log_type_pre('3785135512439344885', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var SuperBenchmark = new BenchmarkSuite('Super', [], []);
codealchemist_log_type_post('3785135512439344885', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof SuperBenchmark) != ('undefined')) ? (SuperBenchmark) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class Base{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof Base) != ('undefined')) ? (Base) : (undefined)}));
class Derived extends Base{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof Base) != ('undefined')) ? (Base) : (undefined)}));
codealchemist_log_type_pre('-7035604929925151279', ({v1 : ((typeof Derived) != ('undefined')) ? (Derived) : (undefined)}));
var derived = new Derived();
codealchemist_log_type_post('-7035604929925151279', ({v1 : ((typeof Derived) != ('undefined')) ? (Derived) : (undefined), v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
codealchemist_log_type_pre('7046442806264699654', ({v1 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
function SuperMethodCall(){
codealchemist_log_type_pre('2902206268364476965', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
var temp_2902206268364476965 = derived.SuperCall();
codealchemist_log_type_post('2902206268364476965', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
return temp_2902206268364476965;
}
codealchemist_log_type_post('7046442806264699654', ({}));
codealchemist_log_type_pre('-3281730298766334751', ({v1 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
function SuperGetterCall(){
codealchemist_log_type_pre('2454361855877683697', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
var temp_2454361855877683697 = derived.GetterCall();
codealchemist_log_type_post('2454361855877683697', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
return temp_2454361855877683697;
}
codealchemist_log_type_post('-3281730298766334751', ({}));
codealchemist_log_type_pre('6292958534874786349', ({v1 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
function SuperSetterCall(){
codealchemist_log_type_pre('-376145928306948254', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
var temp_376145928306948254 = derived.SetterCall();
codealchemist_log_type_post('-376145928306948254', ({v0 : ((typeof derived) != ('undefined')) ? (derived) : (undefined)}));
return temp_376145928306948254;
}
codealchemist_log_type_post('6292958534874786349', ({}));
