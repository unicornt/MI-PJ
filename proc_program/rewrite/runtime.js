load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-8680278996630214976', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v2 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
(function (){
codealchemist_log_type_pre('5959297517914971513', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Runtime.evaluate(String16Cstor)', [], []);
codealchemist_log_type_post('5959297517914971513', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8847882157391929651', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
function Setup(){
codealchemist_log_type_pre('-7307056310165345751', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Runtime.evaluate', ({expression : ''}));
codealchemist_log_type_post('-7307056310165345751', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
}
codealchemist_log_type_post('8847882157391929651', ({}));
codealchemist_log_type_pre('-857060939854026304', ({}));
function TearDown(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('-9048748694895956037', ({v2 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
function EvaluateTest(){
codealchemist_log_type_pre('5595352570007217005', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
for(var i = 0;(i) < (10);++i){
codealchemist_log_type_pre('-5082757017422878746', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
codealchemist_log_type_pre('2332986272755350040', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Runtime.evaluate', ({expression : '({})', returnByValue : true}));
codealchemist_log_type_post('2332986272755350040', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
codealchemist_log_type_post('-5082757017422878746', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
}
codealchemist_log_type_post('5595352570007217005', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-9048748694895956037', ({}));
})();
codealchemist_log_type_post('-8680278996630214976', ({}));
