load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1644720385928499807', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LoadConstantFromPrototype', [], []);
codealchemist_log_type_post('1644720385928499807', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-857060939854026304', ({}));
function Foo(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
;
codealchemist_log_type_pre('6058480139031907719', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
(Foo.prototype.bar) = ({});
codealchemist_log_type_post('6058480139031907719', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
codealchemist_log_type_pre('8619376876626110966', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
(Foo.prototype.covfefe) = (function (){
});
codealchemist_log_type_post('8619376876626110966', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
codealchemist_log_type_pre('-2860568151624541128', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
(Foo.prototype.baz) = 1;
codealchemist_log_type_post('-2860568151624541128', ({v0 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
codealchemist_log_type_pre('-444443194402936095', ({v2 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
function LoadConstantFromPrototype(){
codealchemist_log_type_pre('-1169083202276753835', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined)}));
let foo = new Foo();
codealchemist_log_type_post('-1169083202276753835', ({v1 : ((typeof Foo) != ('undefined')) ? (Foo) : (undefined), v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_pre('-3538133559777627690', ({v1 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
for(let i = 0;(i) < (1000);++i){
codealchemist_log_type_pre('6080164676391638843', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_pre('-7289950812838798444', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
foo.bar;
codealchemist_log_type_post('-7289950812838798444', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_pre('5049564587916256986', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
foo.covfefe;
codealchemist_log_type_post('5049564587916256986', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_pre('679613199636076139', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
foo.baz;
codealchemist_log_type_post('679613199636076139', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
codealchemist_log_type_post('6080164676391638843', ({v0 : ((typeof foo) != ('undefined')) ? (foo) : (undefined)}));
}
codealchemist_log_type_post('-3538133559777627690', ({v1 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-444443194402936095', ({}));
