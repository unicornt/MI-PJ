load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1950908462037621646', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ShortSubjectEmptySeparator', [], []);
codealchemist_log_type_post('-1950908462037621646', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1280217269643908666', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LongSubjectEmptySeparator', [], []);
codealchemist_log_type_post('-1280217269643908666', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2082398425020127554', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ShortTwoBytesSubjectEmptySeparator', [], []);
codealchemist_log_type_post('-2082398425020127554', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8541087933762726728', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LongTwoBytesSubjectEmptySeparator', [], []);
codealchemist_log_type_post('8541087933762726728', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-1815577992939561002', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ShortSubject', [], []);
codealchemist_log_type_post('-1815577992939561002', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('9179049407421315707', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LongSubject', [], []);
codealchemist_log_type_post('9179049407421315707', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('8510099818826623844', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ShortTwoBytesSubject', [], []);
codealchemist_log_type_post('8510099818826623844', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2059376977241994767', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('LongTwoBytesSubject', [], []);
codealchemist_log_type_post('2059376977241994767', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3646402714721842643', ({}));
const shortString = "ababaabcdeaaaaaab";
codealchemist_log_type_post('-3646402714721842643', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
codealchemist_log_type_pre('-9025693370368256188', ({}));
const shortTwoBytesString = "\u0429\u0428\u0428\u0429\u0429\u0429\u0428\u0429\u0429";
codealchemist_log_type_post('-9025693370368256188', ({v0 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
codealchemist_log_type_pre('1089112813106023878', ({}));
const longString = new Array(0x500).fill("abcde").join('');
codealchemist_log_type_post('1089112813106023878', ({v0 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
codealchemist_log_type_pre('7393951477930531447', ({}));
const longTwoBytesString = new Array(0x500).fill("\u0427\u0428\u0429\u0430").join('');
codealchemist_log_type_post('7393951477930531447', ({v0 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
codealchemist_log_type_pre('9043360985324909502', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function ShortSubjectEmptySeparator(){
codealchemist_log_type_pre('-3089264715635796390', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
shortString.split('');
codealchemist_log_type_post('-3089264715635796390', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
}
codealchemist_log_type_post('9043360985324909502', ({}));
codealchemist_log_type_pre('9043360985324909502', ({v1 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
function LongSubjectEmptySeparator(){
codealchemist_log_type_pre('-3089264715635796390', ({v0 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
longString.split('');
codealchemist_log_type_post('-3089264715635796390', ({v0 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
}
codealchemist_log_type_post('9043360985324909502', ({}));
codealchemist_log_type_pre('9043360985324909502', ({v1 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
function ShortTwoBytesSubjectEmptySeparator(){
codealchemist_log_type_pre('-3089264715635796390', ({v0 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
shortTwoBytesString.split('');
codealchemist_log_type_post('-3089264715635796390', ({v0 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
}
codealchemist_log_type_post('9043360985324909502', ({}));
codealchemist_log_type_pre('9043360985324909502', ({v1 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
function LongTwoBytesSubjectEmptySeparator(){
codealchemist_log_type_pre('-3089264715635796390', ({v0 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
longTwoBytesString.split('');
codealchemist_log_type_post('-3089264715635796390', ({v0 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
}
codealchemist_log_type_post('9043360985324909502', ({}));
codealchemist_log_type_pre('-2994234453333795011', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function ShortSubject(){
codealchemist_log_type_pre('-1404119919432776001', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
shortString.split('a');
codealchemist_log_type_post('-1404119919432776001', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
}
codealchemist_log_type_post('-2994234453333795011', ({}));
codealchemist_log_type_pre('-2994234453333795011', ({v1 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
function LongSubject(){
codealchemist_log_type_pre('-1404119919432776001', ({v0 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
longString.split('a');
codealchemist_log_type_post('-1404119919432776001', ({v0 : ((typeof longString) != ('undefined')) ? (longString) : (undefined)}));
}
codealchemist_log_type_post('-2994234453333795011', ({}));
codealchemist_log_type_pre('3187334217076917185', ({v1 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
function ShortTwoBytesSubject(){
codealchemist_log_type_pre('8827288013261386815', ({v0 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
shortTwoBytesString.split('\u0428');
codealchemist_log_type_post('8827288013261386815', ({v0 : ((typeof shortTwoBytesString) != ('undefined')) ? (shortTwoBytesString) : (undefined)}));
}
codealchemist_log_type_post('3187334217076917185', ({}));
codealchemist_log_type_pre('3187334217076917185', ({v1 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
function LongTwoBytesSubject(){
codealchemist_log_type_pre('8827288013261386815', ({v0 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
longTwoBytesString.split('\u0428');
codealchemist_log_type_post('8827288013261386815', ({v0 : ((typeof longTwoBytesString) != ('undefined')) ? (longTwoBytesString) : (undefined)}));
}
codealchemist_log_type_post('3187334217076917185', ({}));
