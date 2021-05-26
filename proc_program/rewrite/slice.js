load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-7249826775171989363', ({}));
const kArraySize = 1000;
codealchemist_log_type_post('-7249826775171989363', ({v0 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
(()=>{
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const A = new Array(kArraySize);
codealchemist_log_type_post('7245165126927635417', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
for(let i = 0;(i) < (A.length);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(A[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
assert(%HasSmiElements(A), "A should have SMI elements for this test");
codealchemist_log_type_pre('-7985746613775093172', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice0(){
codealchemist_log_type_pre('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_107041273734776983 = A.slice(0);
codealchemist_log_type_post('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_107041273734776983;
}
codealchemist_log_type_post('-7985746613775093172', ({}));
codealchemist_log_type_pre('1739151683019873003', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice500(){
codealchemist_log_type_pre('2816624468969289110', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_2816624468969289110 = A.slice(500);
codealchemist_log_type_post('2816624468969289110', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_2816624468969289110;
}
codealchemist_log_type_post('1739151683019873003', ({}));
codealchemist_log_type_pre('-3349877512851429756', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice500_999(){
codealchemist_log_type_pre('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7353608152240366021 = A.slice(500, 999);
codealchemist_log_type_post('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7353608152240366021;
}
codealchemist_log_type_post('-3349877512851429756', ({}));
codealchemist_log_type_pre('-6140188798811310561', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySliceN500(){
codealchemist_log_type_pre('-6761590169384242042', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_6761590169384242042 = A.slice(- 500);
codealchemist_log_type_post('-6761590169384242042', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_6761590169384242042;
}
codealchemist_log_type_post('-6140188798811310561', ({}));
codealchemist_log_type_pre('989952559100230937', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_700(){
codealchemist_log_type_pre('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_9064126863460554564 = A.slice(200, 700);
codealchemist_log_type_post('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_9064126863460554564;
}
codealchemist_log_type_post('989952559100230937', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_N300(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice4_1(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('-4098034283261920707', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
createSuiteWithWarmup("Array.slice(0)", 1, testArraySlice0);
codealchemist_log_type_post('-4098034283261920707', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
codealchemist_log_type_pre('6802246933023364647', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500) != ('undefined')) ? (testArraySlice500) : (undefined)}));
createSuiteWithWarmup("Array.slice(500)", 1, testArraySlice500);
codealchemist_log_type_post('6802246933023364647', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500) != ('undefined')) ? (testArraySlice500) : (undefined)}));
codealchemist_log_type_pre('-1536569992360318602', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
createSuiteWithWarmup("Array.slice(500,999)", 1, testArraySlice500_999);
codealchemist_log_type_post('-1536569992360318602', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
codealchemist_log_type_pre('-751344222557745518', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySliceN500) != ('undefined')) ? (testArraySliceN500) : (undefined)}));
createSuiteWithWarmup("Array.slice(-500)", 1, testArraySliceN500);
codealchemist_log_type_post('-751344222557745518', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySliceN500) != ('undefined')) ? (testArraySliceN500) : (undefined)}));
codealchemist_log_type_pre('429042446243703884', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,700)", 1, testArraySlice200_700);
codealchemist_log_type_post('429042446243703884', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
codealchemist_log_type_pre('-5193772971084430751', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,-300)", 1, testArraySlice200_N300);
codealchemist_log_type_post('-5193772971084430751', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
codealchemist_log_type_pre('2035053554482745399', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
createSuiteWithWarmup("Array.slice(4,1)", 1, testArraySlice4_1);
codealchemist_log_type_post('2035053554482745399', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
})();
(()=>{
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const A = new Array(kArraySize);
codealchemist_log_type_post('7245165126927635417', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
for(let i = 0;(i) < (A.length);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(A[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('4327423882860273248', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
(A[100000]) = 255;
codealchemist_log_type_post('4327423882860273248', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
assert(%HasDictionaryElements(A), "A should be in dictionary mode for this test");
codealchemist_log_type_pre('-7985746613775093172', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice0(){
codealchemist_log_type_pre('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_107041273734776983 = A.slice(0);
codealchemist_log_type_post('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_107041273734776983;
}
codealchemist_log_type_post('-7985746613775093172', ({}));
codealchemist_log_type_pre('-3349877512851429756', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice500_999(){
codealchemist_log_type_pre('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7353608152240366021 = A.slice(500, 999);
codealchemist_log_type_post('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7353608152240366021;
}
codealchemist_log_type_post('-3349877512851429756', ({}));
codealchemist_log_type_pre('989952559100230937', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_700(){
codealchemist_log_type_pre('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_9064126863460554564 = A.slice(200, 700);
codealchemist_log_type_post('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_9064126863460554564;
}
codealchemist_log_type_post('989952559100230937', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_N300(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice4_1(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('1794810678194863587', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
createSuiteWithWarmup("Array.slice(0)-dict", 1, testArraySlice0);
codealchemist_log_type_post('1794810678194863587', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
codealchemist_log_type_pre('3848323361469325239', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
createSuiteWithWarmup("Array.slice(500,999)-dict", 1, testArraySlice500_999);
codealchemist_log_type_post('3848323361469325239', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
codealchemist_log_type_pre('-5004196414044108781', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,700)-dict", 1, testArraySlice200_700);
codealchemist_log_type_post('-5004196414044108781', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
codealchemist_log_type_pre('-9034116373349391144', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,-300)-dict", 1, testArraySlice200_N300);
codealchemist_log_type_post('-9034116373349391144', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
codealchemist_log_type_pre('-4127907789587249202', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
createSuiteWithWarmup("Array.slice(4,1)-dict", 1, testArraySlice4_1);
codealchemist_log_type_post('-4127907789587249202', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
})();
(()=>{
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const A = new Array(kArraySize);
codealchemist_log_type_post('7245165126927635417', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-6682170438876688722', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
for(let i = 0;(i) < (A.length);i++){
codealchemist_log_type_pre('-6350598173817856218', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('5547620957006831934', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(A[i]) = (i) + (0.5);
codealchemist_log_type_post('5547620957006831934', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-6350598173817856218', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6682170438876688722', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
assert(%HasDoubleElements(A), "A should have double elements for this test");
codealchemist_log_type_pre('-7985746613775093172', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice0(){
codealchemist_log_type_pre('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_107041273734776983 = A.slice(0);
codealchemist_log_type_post('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_107041273734776983;
}
codealchemist_log_type_post('-7985746613775093172', ({}));
codealchemist_log_type_pre('-3349877512851429756', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice500_999(){
codealchemist_log_type_pre('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7353608152240366021 = A.slice(500, 999);
codealchemist_log_type_post('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7353608152240366021;
}
codealchemist_log_type_post('-3349877512851429756', ({}));
codealchemist_log_type_pre('989952559100230937', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_700(){
codealchemist_log_type_pre('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_9064126863460554564 = A.slice(200, 700);
codealchemist_log_type_post('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_9064126863460554564;
}
codealchemist_log_type_post('989952559100230937', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_N300(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice4_1(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('-6103651106495833587', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
createSuiteWithWarmup("Array.slice(0)-double", 1, testArraySlice0);
codealchemist_log_type_post('-6103651106495833587', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
codealchemist_log_type_pre('516796793134617111', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
createSuiteWithWarmup("Array.slice(500,999)-double", 1, testArraySlice500_999);
codealchemist_log_type_post('516796793134617111', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
codealchemist_log_type_pre('-4673150301394413889', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,700)-double", 1, testArraySlice200_700);
codealchemist_log_type_post('-4673150301394413889', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
codealchemist_log_type_pre('-2272059719865422109', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,-300)-double", 1, testArraySlice200_N300);
codealchemist_log_type_post('-2272059719865422109', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
codealchemist_log_type_pre('-1743176811887370331', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
createSuiteWithWarmup("Array.slice(4,1)-double", 1, testArraySlice4_1);
codealchemist_log_type_post('-1743176811887370331', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
})();
(()=>{
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const A = new Array(kArraySize);
codealchemist_log_type_post('7245165126927635417', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-5836767988345452359', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
for(let i = 0;(i) < (A.length);i++){
codealchemist_log_type_pre('7831565275132356928', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('3791092573431412642', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(A[i]) = new Object();
codealchemist_log_type_post('3791092573431412642', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('7831565275132356928', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-5836767988345452359', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
assert(%HasObjectElements(A), "A should have object elements for this test");
codealchemist_log_type_pre('-7985746613775093172', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice0(){
codealchemist_log_type_pre('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_107041273734776983 = A.slice(0);
codealchemist_log_type_post('107041273734776983', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_107041273734776983;
}
codealchemist_log_type_post('-7985746613775093172', ({}));
codealchemist_log_type_pre('-3349877512851429756', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice500_999(){
codealchemist_log_type_pre('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7353608152240366021 = A.slice(500, 999);
codealchemist_log_type_post('7353608152240366021', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7353608152240366021;
}
codealchemist_log_type_post('-3349877512851429756', ({}));
codealchemist_log_type_pre('989952559100230937', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_700(){
codealchemist_log_type_pre('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_9064126863460554564 = A.slice(200, 700);
codealchemist_log_type_post('9064126863460554564', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_9064126863460554564;
}
codealchemist_log_type_post('989952559100230937', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice200_N300(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('7244413114784535977', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
function testArraySlice4_1(){
codealchemist_log_type_pre('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
var temp_7099649490458816431 = A.slice(200, - 300);
codealchemist_log_type_post('-7099649490458816431', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
return temp_7099649490458816431;
}
codealchemist_log_type_post('7244413114784535977', ({}));
codealchemist_log_type_pre('-2481411860917689176', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
createSuiteWithWarmup("Array.slice(0)-object", 1, testArraySlice0);
codealchemist_log_type_post('-2481411860917689176', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
codealchemist_log_type_pre('-7232147482445357819', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
createSuiteWithWarmup("Array.slice(500,999)-object", 1, testArraySlice500_999);
codealchemist_log_type_post('-7232147482445357819', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
codealchemist_log_type_pre('-5631345209091995871', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,700)-object", 1, testArraySlice200_700);
codealchemist_log_type_post('-5631345209091995871', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
codealchemist_log_type_pre('-35436709527641925', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,-300)-object", 1, testArraySlice200_N300);
codealchemist_log_type_post('-35436709527641925', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
codealchemist_log_type_pre('-4878521747275949609', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
createSuiteWithWarmup("Array.slice(4,1)-object", 1, testArraySlice4_1);
codealchemist_log_type_post('-4878521747275949609', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
})();
(()=>{
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const A = new Array(kArraySize);
codealchemist_log_type_post('7245165126927635417', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined)}));
for(let i = 0;(i) < (A.length);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(A[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof A) != ('undefined')) ? (A) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-5244119080633540939', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
assert(%HasSmiElements(A), "A should have SMI elements for this test");
codealchemist_log_type_pre('-964963668777278771', ({}));
let arguments_array;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
codealchemist_log_type_pre('-4211092318066753715', ({}));
function sloppy_aliased(a){
codealchemist_log_type_pre('-5595327000582349167', ({}));
(arguments_array) = arguments;
codealchemist_log_type_post('-5595327000582349167', ({v0 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
}
codealchemist_log_type_post('-4211092318066753715', ({}));
codealchemist_log_type_pre('-7116980939018596457', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof sloppy_aliased) != ('undefined')) ? (sloppy_aliased) : (undefined)}));
sloppy_aliased.apply(null, A);
codealchemist_log_type_post('-7116980939018596457', ({v1 : ((typeof A) != ('undefined')) ? (A) : (undefined), v0 : ((typeof sloppy_aliased) != ('undefined')) ? (sloppy_aliased) : (undefined)}));
assert(%HasSloppyArgumentsElements(arguments_array), "arguments_array should have sloppy arguments elements for this test");
codealchemist_log_type_pre('-807552643085912536', ({v2 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
function testArraySlice0(){
codealchemist_log_type_pre('586825002884681519', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
var temp_586825002884681519 = Array.prototype.slice.call(arguments_array, 0);
codealchemist_log_type_post('586825002884681519', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
return temp_586825002884681519;
}
codealchemist_log_type_post('-807552643085912536', ({}));
codealchemist_log_type_pre('4939000649641017164', ({v2 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
function testArraySlice500_999(){
codealchemist_log_type_pre('8772972961051750509', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
var temp_8772972961051750509 = Array.prototype.slice.call(arguments_array, 500, 999);
codealchemist_log_type_post('8772972961051750509', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
return temp_8772972961051750509;
}
codealchemist_log_type_post('4939000649641017164', ({}));
codealchemist_log_type_pre('4442563537515250614', ({v2 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
function testArraySlice200_700(){
codealchemist_log_type_pre('5530057247920529800', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
var temp_5530057247920529800 = Array.prototype.slice.call(arguments_array, 200, 700);
codealchemist_log_type_post('5530057247920529800', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
return temp_5530057247920529800;
}
codealchemist_log_type_post('4442563537515250614', ({}));
codealchemist_log_type_pre('-5313990387950710674', ({v2 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
function testArraySlice200_N300(){
codealchemist_log_type_pre('-139438012801777526', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
var temp_139438012801777526 = Array.prototype.slice.call(arguments_array, 200, - 300);
codealchemist_log_type_post('-139438012801777526', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
return temp_139438012801777526;
}
codealchemist_log_type_post('-5313990387950710674', ({}));
codealchemist_log_type_pre('-5313990387950710674', ({v2 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
function testArraySlice4_1(){
codealchemist_log_type_pre('-139438012801777526', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
var temp_139438012801777526 = Array.prototype.slice.call(arguments_array, 200, - 300);
codealchemist_log_type_post('-139438012801777526', ({v1 : ((typeof arguments_array) != ('undefined')) ? (arguments_array) : (undefined)}));
return temp_139438012801777526;
}
codealchemist_log_type_post('-5313990387950710674', ({}));
codealchemist_log_type_pre('-3274144905451922174', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
createSuiteWithWarmup("Array.slice(0)-sloppy-args", 1, testArraySlice0);
codealchemist_log_type_post('-3274144905451922174', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice0) != ('undefined')) ? (testArraySlice0) : (undefined)}));
codealchemist_log_type_pre('4616819946370222792', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
createSuiteWithWarmup("Array.slice(500,999)-sloppy-args", 1, testArraySlice500_999);
codealchemist_log_type_post('4616819946370222792', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice500_999) != ('undefined')) ? (testArraySlice500_999) : (undefined)}));
codealchemist_log_type_pre('82931909421424115', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,700)-sloppy-args", 1, testArraySlice200_700);
codealchemist_log_type_post('82931909421424115', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_700) != ('undefined')) ? (testArraySlice200_700) : (undefined)}));
codealchemist_log_type_pre('8723819062322889614', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
createSuiteWithWarmup("Array.slice(200,-300)-sloppy-args", 1, testArraySlice200_N300);
codealchemist_log_type_post('8723819062322889614', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice200_N300) != ('undefined')) ? (testArraySlice200_N300) : (undefined)}));
codealchemist_log_type_pre('3999077775659991543', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
createSuiteWithWarmup("Array.slice(4,1)-sloppy-args", 1, testArraySlice4_1);
codealchemist_log_type_post('3999077775659991543', ({v0 : ((typeof createSuiteWithWarmup) != ('undefined')) ? (createSuiteWithWarmup) : (undefined), v1 : ((typeof testArraySlice4_1) != ('undefined')) ? (testArraySlice4_1) : (undefined)}));
})();
