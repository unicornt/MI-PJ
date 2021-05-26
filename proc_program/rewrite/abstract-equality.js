load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-6254088878912117047', ({}));
const TEST_ITERATIONS = 100000;
codealchemist_log_type_post('-6254088878912117047', ({v0 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined)}));
codealchemist_log_type_pre('-4471766250476156164', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Prevent-Inline-Dummy', [], []);
codealchemist_log_type_post('-4471766250476156164', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8701684915104775834', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Equal-SmiNumber', [], []);
codealchemist_log_type_post('8701684915104775834', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5218696393634211366', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Equal-SmiOddball', [], []);
codealchemist_log_type_post('-5218696393634211366', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('3941649616769670479', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Equal-NumberOddball', [], []);
codealchemist_log_type_post('3941649616769670479', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8705093599571093801', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Equal-OddballOddball', [], []);
codealchemist_log_type_post('-8705093599571093801', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let smis = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let numbers = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let oddballs = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined)}));
codealchemist_log_type_pre('-7435223416939023378', ({v2 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v5 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v3 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
function SetUp(){
codealchemist_log_type_pre('-4681259428160487233', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v4 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v2 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
for(let i = 0;(i) < ((TEST_ITERATIONS) + (1));++i){
codealchemist_log_type_pre('2029061358003090628', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_pre('6471079297422409751', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
(smis[i]) = (((i) % (2)) == (0)) ? (42) : (- 42);
codealchemist_log_type_post('6471079297422409751', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_pre('-3743151415129543909', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
(numbers[i]) = (((i) % (2)) == (0)) ? (42.3) : (- 42.3);
codealchemist_log_type_post('-3743151415129543909', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
codealchemist_log_type_pre('1859482512578394345', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined)}));
(oddballs[i]) = ((i) % (2)) == (0);
codealchemist_log_type_post('1859482512578394345', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined)}));
codealchemist_log_type_post('2029061358003090628', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v3 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
}
codealchemist_log_type_post('-4681259428160487233', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v4 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v2 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
}
codealchemist_log_type_post('-7435223416939023378', ({}));
codealchemist_log_type_pre('351480458627289033', ({v3 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
function TestEqualSmiNumber(){
codealchemist_log_type_pre('-3128929569146884140', ({}));
let result = false;
codealchemist_log_type_post('-3128929569146884140', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('5717177442055511011', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(let i = 0;(i) < (TEST_ITERATIONS);++i){
codealchemist_log_type_pre('5955945440929179052', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('8103642542106468073', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) = (result) || ((11) == (numbers[i]));
codealchemist_log_type_post('8103642542106468073', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('5955945440929179052', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('5717177442055511011', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('351480458627289033', ({}));
codealchemist_log_type_pre('-5157231055934959721', ({v3 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v4 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
function TestEqualSmiOddball(){
codealchemist_log_type_pre('-3128929569146884140', ({}));
let result = false;
codealchemist_log_type_post('-3128929569146884140', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('7450415547633145490', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
for(let i = 1;(i) < (TEST_ITERATIONS);++i){
codealchemist_log_type_pre('-7339265115210114348', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_pre('-6979955660097571021', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
(result) = (result) || ((smis[i]) == (false));
codealchemist_log_type_post('-6979955660097571021', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_post('-7339265115210114348', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
}
codealchemist_log_type_post('7450415547633145490', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof smis) != ('undefined')) ? (smis) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-5157231055934959721', ({}));
codealchemist_log_type_pre('-5157231055934959721', ({v3 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v4 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined)}));
function TestEqualNumberOddball(){
codealchemist_log_type_pre('-3128929569146884140', ({}));
let result = false;
codealchemist_log_type_post('-3128929569146884140', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('7450415547633145490', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(let i = 1;(i) < (TEST_ITERATIONS);++i){
codealchemist_log_type_pre('-7339265115210114348', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6979955660097571021', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) = (result) || ((numbers[i]) == (false));
codealchemist_log_type_post('-6979955660097571021', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-7339265115210114348', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7450415547633145490', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof numbers) != ('undefined')) ? (numbers) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-5157231055934959721', ({}));
codealchemist_log_type_pre('-7750458816695684538', ({v3 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v4 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined)}));
function TestEqualOddballOddball(){
codealchemist_log_type_pre('-3128929569146884140', ({}));
let result = false;
codealchemist_log_type_post('-3128929569146884140', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-4039522257315508137', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v3 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(let i = 0;(i) < (TEST_ITERATIONS);++i){
codealchemist_log_type_pre('-234621820910098994', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('524030346426812221', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) = (result) || ((oddballs[i]) == (oddballs[(i) + (1)]));
codealchemist_log_type_post('524030346426812221', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-234621820910098994', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-4039522257315508137', ({v1 : ((typeof TEST_ITERATIONS) != ('undefined')) ? (TEST_ITERATIONS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof oddballs) != ('undefined')) ? (oddballs) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-7750458816695684538', ({}));
