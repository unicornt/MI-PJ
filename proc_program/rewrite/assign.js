load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-2829143238015715903', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Assign', [], []);
codealchemist_log_type_post('-2829143238015715903', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var object;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var src1;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var src2;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof src2) != ('undefined')) ? (src2) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var src3;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var obj1;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var obj2;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
codealchemist_log_type_pre('-5923335528917638804', ({}));
function BasicAssign1Setup(){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(object) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj1) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj2) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
codealchemist_log_type_pre('-8623644903129045015', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v2 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
(src1) = ({id : "6930530530", obj1 : obj1, obj2 : obj2});
codealchemist_log_type_post('-8623644903129045015', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v2 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v0 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
}
codealchemist_log_type_post('-5923335528917638804', ({}));
codealchemist_log_type_pre('1040451529939882741', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
function BasicAssign1(){
codealchemist_log_type_pre('-4450185281339364517', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
Object.assign(object, src1);
codealchemist_log_type_post('-4450185281339364517', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
}
codealchemist_log_type_post('1040451529939882741', ({}));
codealchemist_log_type_pre('-2166188269755828715', ({v3 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v4 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
function BasicAssign1TearDown(){
codealchemist_log_type_pre('4441320604130569401', ({v2 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v3 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
var temp_4441320604130569401 = (((object.id) === (src1.id)) && ((object.obj1) === (obj1))) && ((object.obj2) === (obj2));
codealchemist_log_type_post('4441320604130569401', ({v2 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v3 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
return temp_4441320604130569401;
}
codealchemist_log_type_post('-2166188269755828715', ({}));
codealchemist_log_type_pre('7350287962412842445', ({}));
function BasicAssign3Setup(){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(object) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj1) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj2) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
codealchemist_log_type_pre('664468248049068921', ({}));
(src1) = ({id : "6930530530"});
codealchemist_log_type_post('664468248049068921', ({v0 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
codealchemist_log_type_pre('6935407073009948003', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined)}));
(src2) = ({obj1 : obj1});
codealchemist_log_type_post('6935407073009948003', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v0 : ((typeof src2) != ('undefined')) ? (src2) : (undefined)}));
codealchemist_log_type_pre('7767316853599967618', ({v1 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
(src3) = ({obj2 : obj2});
codealchemist_log_type_post('7767316853599967618', ({v1 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v0 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
}
codealchemist_log_type_post('7350287962412842445', ({}));
codealchemist_log_type_pre('2028403979458775841', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v4 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v5 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
function BasicAssign3(){
codealchemist_log_type_pre('9172568440903889270', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
Object.assign(object, src1, src2, src3);
codealchemist_log_type_post('9172568440903889270', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
}
codealchemist_log_type_post('2028403979458775841', ({}));
codealchemist_log_type_pre('-2166188269755828715', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
function BasicAssign3TearDown(){
codealchemist_log_type_pre('4441320604130569401', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v2 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v3 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
var temp_4441320604130569401 = (((object.id) === (src1.id)) && ((object.obj1) === (src2))) && ((object.obj2) === (src3));
codealchemist_log_type_post('4441320604130569401', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v2 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v3 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
return temp_4441320604130569401;
}
codealchemist_log_type_post('-2166188269755828715', ({}));
codealchemist_log_type_pre('-5655199993532320134', ({}));
function BasicAssignNull3Setup(){
codealchemist_log_type_pre('-5250398761866457292', ({}));
(object) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj1) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined)}));
codealchemist_log_type_pre('-5250398761866457292', ({}));
(obj2) = ({});
codealchemist_log_type_post('-5250398761866457292', ({v0 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
codealchemist_log_type_pre('664468248049068921', ({}));
(src1) = ({id : "6930530530"});
codealchemist_log_type_post('664468248049068921', ({v0 : ((typeof src1) != ('undefined')) ? (src1) : (undefined)}));
codealchemist_log_type_pre('6697378765710824163', ({}));
(src2) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof src2) != ('undefined')) ? (src2) : (undefined)}));
codealchemist_log_type_pre('9080538738327376235', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v2 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined)}));
(src3) = ({obj1 : obj1, obj2 : obj2});
codealchemist_log_type_post('9080538738327376235', ({v1 : ((typeof obj1) != ('undefined')) ? (obj1) : (undefined), v2 : ((typeof obj2) != ('undefined')) ? (obj2) : (undefined), v0 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
}
codealchemist_log_type_post('-5655199993532320134', ({}));
codealchemist_log_type_pre('2028403979458775841', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v4 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v5 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
function BasicAssignNull3(){
codealchemist_log_type_pre('9172568440903889270', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
Object.assign(object, src1, src2, src3);
codealchemist_log_type_post('9172568440903889270', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
}
codealchemist_log_type_post('2028403979458775841', ({}));
codealchemist_log_type_pre('-2166188269755828715', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v3 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v4 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
function BasicAssignNull3TearDown(){
codealchemist_log_type_pre('4441320604130569401', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v2 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v3 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
var temp_4441320604130569401 = (((object.id) === (src1.id)) && ((object.obj1) === (src2))) && ((object.obj2) === (src3));
codealchemist_log_type_post('4441320604130569401', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof src1) != ('undefined')) ? (src1) : (undefined), v2 : ((typeof src2) != ('undefined')) ? (src2) : (undefined), v3 : ((typeof src3) != ('undefined')) ? (src3) : (undefined)}));
return temp_4441320604130569401;
}
codealchemist_log_type_post('-2166188269755828715', ({}));
