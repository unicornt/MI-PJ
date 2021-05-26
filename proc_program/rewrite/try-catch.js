load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('6137654393321208879', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Try-Catch', [], []);
codealchemist_log_type_post('6137654393321208879', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var a;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var b;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var c;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
codealchemist_log_type_pre('7773240063253625375', ({}));
function OnSuccessSetup(){
codealchemist_log_type_pre('-1828068506636376728', ({}));
(a) = 4;
codealchemist_log_type_post('-1828068506636376728', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('4592367980711847821', ({}));
(b) = 6;
codealchemist_log_type_post('4592367980711847821', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5972112927478329196', ({}));
(c) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7773240063253625375', ({}));
codealchemist_log_type_pre('-5627536607883416013', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
function OnSuccess(){
codealchemist_log_type_pre('3484761082669972706', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
try{
codealchemist_log_type_pre('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
(c) = (a) + (b);
codealchemist_log_type_post('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}catch(e){
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
c++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('3484761082669972706', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('-5627536607883416013', ({}));
codealchemist_log_type_pre('-967034144015516258', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
function OnSuccessTearDown(){
codealchemist_log_type_pre('-132228394639506639', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_132228394639506639 = (c) === (10);
codealchemist_log_type_post('-132228394639506639', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_132228394639506639;
}
codealchemist_log_type_post('-967034144015516258', ({}));
codealchemist_log_type_pre('7773240063253625375', ({}));
function OnExceptionSetup(){
codealchemist_log_type_pre('-1828068506636376728', ({}));
(a) = 4;
codealchemist_log_type_post('-1828068506636376728', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('4592367980711847821', ({}));
(b) = 6;
codealchemist_log_type_post('4592367980711847821', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5972112927478329196', ({}));
(c) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7773240063253625375', ({}));
codealchemist_log_type_pre('6957660017751153381', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v4 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
function OnException(){
codealchemist_log_type_pre('7301662537649883441', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
try{
codealchemist_log_type_pre('-4752860328677047300', ({}));
var temp_4752860328677047300 = 'Test exception';
codealchemist_log_type_post('-4752860328677047300', ({}));
throw temp_4752860328677047300;
}catch(e){
codealchemist_log_type_pre('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
(c) = (a) + (b);
codealchemist_log_type_post('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7301662537649883441', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('6957660017751153381', ({}));
codealchemist_log_type_pre('-967034144015516258', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
function OnExceptionTearDown(){
codealchemist_log_type_pre('-132228394639506639', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_132228394639506639 = (c) === (10);
codealchemist_log_type_post('-132228394639506639', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_132228394639506639;
}
codealchemist_log_type_post('-967034144015516258', ({}));
codealchemist_log_type_pre('7773240063253625375', ({}));
function OnSuccessFinallyOnlySetup(){
codealchemist_log_type_pre('-1828068506636376728', ({}));
(a) = 4;
codealchemist_log_type_post('-1828068506636376728', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('4592367980711847821', ({}));
(b) = 6;
codealchemist_log_type_post('4592367980711847821', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5972112927478329196', ({}));
(c) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7773240063253625375', ({}));
codealchemist_log_type_pre('-4127205129529580287', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
function OnSuccessFinallyOnly(){
codealchemist_log_type_pre('7145974650526491471', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
try{
codealchemist_log_type_pre('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
(c) = (a) + (b);
codealchemist_log_type_post('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}finally{
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
c++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7145974650526491471', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('-4127205129529580287', ({}));
codealchemist_log_type_pre('-5608078005269239933', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
function OnSuccessFinallyOnlyTearDown(){
codealchemist_log_type_pre('-2276428087916069008', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_2276428087916069008 = (c) === (11);
codealchemist_log_type_post('-2276428087916069008', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_2276428087916069008;
}
codealchemist_log_type_post('-5608078005269239933', ({}));
codealchemist_log_type_pre('7773240063253625375', ({}));
function WithFinallyOnExceptionSetup(){
codealchemist_log_type_pre('-1828068506636376728', ({}));
(a) = 4;
codealchemist_log_type_post('-1828068506636376728', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('4592367980711847821', ({}));
(b) = 6;
codealchemist_log_type_post('4592367980711847821', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-5972112927478329196', ({}));
(c) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('7773240063253625375', ({}));
codealchemist_log_type_pre('-1331886352848656707', ({v3 : ((typeof a) != ('undefined')) ? (a) : (undefined), v4 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
function WithFinallyOnException(){
codealchemist_log_type_pre('6179512570201557809', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
try{
codealchemist_log_type_pre('-4752860328677047300', ({}));
var temp_4752860328677047300 = 'Test exception';
codealchemist_log_type_post('-4752860328677047300', ({}));
throw temp_4752860328677047300;
}catch(e){
codealchemist_log_type_pre('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
(c) = (a) + (b);
codealchemist_log_type_post('-8864677387131388162', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}finally{
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
c++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('6179512570201557809', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined), v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
}
codealchemist_log_type_post('-1331886352848656707', ({}));
codealchemist_log_type_pre('-5608078005269239933', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
function WithFinallyOnExceptionTearDown(){
codealchemist_log_type_pre('-2276428087916069008', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_2276428087916069008 = (c) === (11);
codealchemist_log_type_post('-2276428087916069008', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_2276428087916069008;
}
codealchemist_log_type_post('-5608078005269239933', ({}));
