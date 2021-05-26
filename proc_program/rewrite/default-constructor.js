load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5872569963098562932', ({}));
'use strict';
codealchemist_log_type_post('-5872569963098562932', ({}));
codealchemist_log_type_pre('895156256208278294', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
var DefaultConstructorBenchmark = new BenchmarkSuite('DefaultConstructor', [], []);
codealchemist_log_type_post('895156256208278294', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof DefaultConstructorBenchmark) != ('undefined')) ? (DefaultConstructorBenchmark) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class BaseClass{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof BaseClass) != ('undefined')) ? (BaseClass) : (undefined)}));
class DerivedClass extends BaseClass{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof BaseClass) != ('undefined')) ? (BaseClass) : (undefined)}));
codealchemist_log_type_pre('7283416493947164572', ({v1 : ((typeof BaseClass) != ('undefined')) ? (BaseClass) : (undefined)}));
function NoSuperClass(){
codealchemist_log_type_pre('-7139541451157179783', ({v0 : ((typeof BaseClass) != ('undefined')) ? (BaseClass) : (undefined)}));
var temp_7139541451157179783 = new BaseClass();
codealchemist_log_type_post('-7139541451157179783', ({v0 : ((typeof BaseClass) != ('undefined')) ? (BaseClass) : (undefined)}));
return temp_7139541451157179783;
}
codealchemist_log_type_post('7283416493947164572', ({}));
codealchemist_log_type_pre('7283416493947164572', ({v1 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
function WithSuperClass(){
codealchemist_log_type_pre('-7139541451157179783', ({v0 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
var temp_7139541451157179783 = new DerivedClass();
codealchemist_log_type_post('-7139541451157179783', ({v0 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
return temp_7139541451157179783;
}
codealchemist_log_type_post('7283416493947164572', ({}));
codealchemist_log_type_pre('-1213920334401767882', ({v1 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
function WithSuperClassArguments(){
codealchemist_log_type_pre('223475883333851048', ({v0 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
var temp_223475883333851048 = new DerivedClass(0, 1, 2, 3, 4);
codealchemist_log_type_post('223475883333851048', ({v0 : ((typeof DerivedClass) != ('undefined')) ? (DerivedClass) : (undefined)}));
return temp_223475883333851048;
}
codealchemist_log_type_post('-1213920334401767882', ({}));
