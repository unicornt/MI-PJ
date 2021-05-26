load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('5786407395368966844', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Closures', [], []);
codealchemist_log_type_post('5786407395368966844', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('7433448774839625595', ({}));
var fs = ({readFile : (function (filename, cb){
codealchemist_log_type_pre('7280553324479575239', ({v0 : ((typeof cb) != ('undefined')) ? (cb) : (undefined)}));
cb(null, ({length : 12}));
codealchemist_log_type_post('7280553324479575239', ({v0 : ((typeof cb) != ('undefined')) ? (cb) : (undefined)}));
})});
codealchemist_log_type_post('7433448774839625595', ({v0 : ((typeof fs) != ('undefined')) ? (fs) : (undefined)}));
codealchemist_log_type_pre('-8685990377302551855', ({v3 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v2 : ((typeof fs) != ('undefined')) ? (fs) : (undefined)}));
function printLength(filename){
codealchemist_log_type_pre('-6249165084139713406', ({v1 : ((typeof filename) != ('undefined')) ? (filename) : (undefined), v2 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v0 : ((typeof fs) != ('undefined')) ? (fs) : (undefined)}));
fs.readFile(filename, foo);
codealchemist_log_type_post('-6249165084139713406', ({v1 : ((typeof filename) != ('undefined')) ? (filename) : (undefined), v2 : ((typeof foo) != ('undefined')) ? (foo) : (undefined), v0 : ((typeof fs) != ('undefined')) ? (fs) : (undefined)}));
codealchemist_log_type_pre('-5563983541000035423', ({}));
function foo(err, buf){
codealchemist_log_type_pre('2571547276019180193', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
if(err){
return;
}
codealchemist_log_type_post('2571547276019180193', ({v0 : ((typeof err) != ('undefined')) ? (err) : (undefined)}));
codealchemist_log_type_pre('-749178364564892408', ({v1 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
for(var j = 0;(j) < (1000);j++){
codealchemist_log_type_pre('7784159054385703713', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
codealchemist_log_type_pre('8084987896958945965', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
buf.length++;
codealchemist_log_type_post('8084987896958945965', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
codealchemist_log_type_post('7784159054385703713', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
}
codealchemist_log_type_post('-749178364564892408', ({v1 : ((typeof buf) != ('undefined')) ? (buf) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('5880956909106927160', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
var temp_5880956909106927160 = buf.length;
codealchemist_log_type_post('5880956909106927160', ({v0 : ((typeof buf) != ('undefined')) ? (buf) : (undefined)}));
return temp_5880956909106927160;
}
codealchemist_log_type_post('-5563983541000035423', ({}));
}
codealchemist_log_type_post('-8685990377302551855', ({}));
codealchemist_log_type_pre('-857060939854026304', ({}));
function ShortLivingClosuresSetup(){
}
codealchemist_log_type_post('-857060939854026304', ({}));
codealchemist_log_type_pre('3837121080400277926', ({v2 : ((typeof printLength) != ('undefined')) ? (printLength) : (undefined)}));
function ShortLivingClosures(){
codealchemist_log_type_pre('-5109629626734106084', ({v1 : ((typeof printLength) != ('undefined')) ? (printLength) : (undefined)}));
(result) = printLength('foo_bar.js');
codealchemist_log_type_post('-5109629626734106084', ({v1 : ((typeof printLength) != ('undefined')) ? (printLength) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3837121080400277926', ({}));
codealchemist_log_type_pre('1808771884721762968', ({v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
function ShortLivingClosuresTearDown(){
codealchemist_log_type_pre('-6087795697979510621', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_6087795697979510621 = (result) == (1012);
codealchemist_log_type_post('-6087795697979510621', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_6087795697979510621;
}
codealchemist_log_type_post('1808771884721762968', ({}));
