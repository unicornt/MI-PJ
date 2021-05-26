load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4944063527772195748', ({v4 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
function createSuiteWithWarmup(name, count, fn){
codealchemist_log_type_pre('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
new BenchmarkSuite(name, [], []);
codealchemist_log_type_post('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
}
codealchemist_log_type_post('-4944063527772195748', ({}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const inputs = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof inputs) != ('undefined')) ? (inputs) : (undefined)}));
codealchemist_log_type_pre('-7050675009827593081', ({}));
const first = 'I';
codealchemist_log_type_post('-7050675009827593081', ({v0 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
codealchemist_log_type_pre('-5797400261766087785', ({v4 : ((typeof inputs) != ('undefined')) ? (inputs) : (undefined)}));
function helper(fn){
codealchemist_log_type_pre('8720562409487186565', ({}));
let sum = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-5410931385478992823', ({v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v1 : ((typeof inputs) != ('undefined')) ? (inputs) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(const input of inputs){
codealchemist_log_type_pre('6680243401019984200', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('2748935387288744460', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += fn(input);
codealchemist_log_type_post('2748935387288744460', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('6680243401019984200', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-5410931385478992823', ({v3 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof input) != ('undefined')) ? (input) : (undefined), v1 : ((typeof inputs) != ('undefined')) ? (inputs) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-5797400261766087785', ({}));
codealchemist_log_type_pre('2208729757199872698', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
function startsWith(string){
codealchemist_log_type_pre('-1786415535728072761', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
var temp_1786415535728072761 = string.startsWith(first);
codealchemist_log_type_post('-1786415535728072761', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
return temp_1786415535728072761;
}
codealchemist_log_type_post('2208729757199872698', ({}));
codealchemist_log_type_pre('3529804244402025916', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
function startsIndex(string){
codealchemist_log_type_pre('-7004412017868701697', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
var temp_7004412017868701697 = (string[0]) === (first);
codealchemist_log_type_post('-7004412017868701697', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
return temp_7004412017868701697;
}
codealchemist_log_type_post('3529804244402025916', ({}));
codealchemist_log_type_pre('-2610756398823903444', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
function endsWith(string){
codealchemist_log_type_pre('-7032744944631038832', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
var temp_7032744944631038832 = string.endsWith(first);
codealchemist_log_type_post('-7032744944631038832', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
return temp_7032744944631038832;
}
codealchemist_log_type_post('-2610756398823903444', ({}));
codealchemist_log_type_pre('9170978573514250974', ({v2 : ((typeof first) != ('undefined')) ? (first) : (undefined)}));
function endsIndex(string){
codealchemist_log_type_pre('-565903528388983499', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
var temp_565903528388983499 = (string[(string.length) - (1)]) === (first);
codealchemist_log_type_post('-565903528388983499', ({v1 : ((typeof first) != ('undefined')) ? (first) : (undefined), v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
return temp_565903528388983499;
}
codealchemist_log_type_post('9170978573514250974', ({}));
codealchemist_log_type_pre('-6943756884124957447', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined), v2 : ((typeof startsWith) != ('undefined')) ? (startsWith) : (undefined)}));
createSuiteWithWarmup('startsWith', 1, (()=>helper(startsWith)));
codealchemist_log_type_post('-6943756884124957447', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-7618063159993617840', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined), v2 : ((typeof startsIndex) != ('undefined')) ? (startsIndex) : (undefined)}));
createSuiteWithWarmup('startsIndex', 1, (()=>helper(startsIndex)));
codealchemist_log_type_post('-7618063159993617840', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('2102352637083569699', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v2 : ((typeof endsWith) != ('undefined')) ? (endsWith) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('endsWith', 1, (()=>helper(endsWith)));
codealchemist_log_type_post('2102352637083569699', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
codealchemist_log_type_pre('-8851296803740567500', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v2 : ((typeof endsIndex) != ('undefined')) ? (endsIndex) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
createSuiteWithWarmup('endsIndex', 1, (()=>helper(endsIndex)));
codealchemist_log_type_post('-8851296803740567500', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined)}));
