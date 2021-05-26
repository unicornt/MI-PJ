load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('6718878187456051862', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('SetFromSameType', [], []);
codealchemist_log_type_post('6718878187456051862', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let src = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof src) != ('undefined')) ? (src) : (undefined)}));
codealchemist_log_type_pre('-6435251739679083024', ({v2 : ((typeof src) != ('undefined')) ? (src) : (undefined)}));
let typed_src = new Float32Array(src);
codealchemist_log_type_post('-6435251739679083024', ({v2 : ((typeof src) != ('undefined')) ? (src) : (undefined), v0 : ((typeof typed_src) != ('undefined')) ? (typed_src) : (undefined)}));
codealchemist_log_type_pre('1966352194729018816', ({}));
let typed_dest = new Float32Array(16);
codealchemist_log_type_post('1966352194729018816', ({v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
codealchemist_log_type_pre('-4381067235138182467', ({v1 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v2 : ((typeof typed_src) != ('undefined')) ? (typed_src) : (undefined)}));
function SetFromSameType(){
codealchemist_log_type_pre('-7304970736717944545', ({v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof typed_src) != ('undefined')) ? (typed_src) : (undefined)}));
typed_dest.set(typed_src);
codealchemist_log_type_post('-7304970736717944545', ({v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof typed_src) != ('undefined')) ? (typed_src) : (undefined)}));
}
codealchemist_log_type_post('-4381067235138182467', ({}));
