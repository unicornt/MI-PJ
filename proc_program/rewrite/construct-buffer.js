load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4052020719083533852', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ConstructWithBuffer', [], []);
codealchemist_log_type_post('-4052020719083533852', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('1413847990271630441', ({}));
var buffer = new ArrayBuffer(64);
codealchemist_log_type_post('1413847990271630441', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
codealchemist_log_type_pre('7876547255508203412', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
function constructor(){
codealchemist_log_type_pre('7653063661367291825', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
new Int32Array(buffer);
codealchemist_log_type_post('7653063661367291825', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
}
codealchemist_log_type_post('7876547255508203412', ({}));
