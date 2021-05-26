load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-8371699814650572241', ({v6 : ((typeof AsyncStacksInstrumentation) != ('undefined')) ? (AsyncStacksInstrumentation) : (undefined), v4 : ((typeof DebuggerGetPossibleBreakpoints) != ('undefined')) ? (DebuggerGetPossibleBreakpoints) : (undefined), v1 : ((typeof DebuggerPaused) != ('undefined')) ? (DebuggerPaused) : (undefined), v8 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v2 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined), v7 : ((typeof SetupAsyncStacksInstrumentation) != ('undefined')) ? (SetupAsyncStacksInstrumentation) : (undefined), v5 : ((typeof SetupGetPossibleBreakpoints) != ('undefined')) ? (SetupGetPossibleBreakpoints) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
(function (){
codealchemist_log_type_pre('3615824033342389348', ({v1 : ((typeof DebuggerPaused) != ('undefined')) ? (DebuggerPaused) : (undefined), v2 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Debugger.paused', 10000, DebuggerPaused, Setup, TearDown);
codealchemist_log_type_post('3615824033342389348', ({v1 : ((typeof DebuggerPaused) != ('undefined')) ? (DebuggerPaused) : (undefined), v2 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('6652856198830925143', ({v1 : ((typeof DebuggerGetPossibleBreakpoints) != ('undefined')) ? (DebuggerGetPossibleBreakpoints) : (undefined), v2 : ((typeof SetupGetPossibleBreakpoints) != ('undefined')) ? (SetupGetPossibleBreakpoints) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Debugger.getPossibleBreakpoints', 10000, DebuggerGetPossibleBreakpoints, SetupGetPossibleBreakpoints, TearDown);
codealchemist_log_type_post('6652856198830925143', ({v1 : ((typeof DebuggerGetPossibleBreakpoints) != ('undefined')) ? (DebuggerGetPossibleBreakpoints) : (undefined), v2 : ((typeof SetupGetPossibleBreakpoints) != ('undefined')) ? (SetupGetPossibleBreakpoints) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('5802834032265967281', ({v1 : ((typeof AsyncStacksInstrumentation) != ('undefined')) ? (AsyncStacksInstrumentation) : (undefined), v2 : ((typeof SetupAsyncStacksInstrumentation) != ('undefined')) ? (SetupAsyncStacksInstrumentation) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('AsyncStacksInstrumentation', 10000, AsyncStacksInstrumentation, SetupAsyncStacksInstrumentation, TearDown);
codealchemist_log_type_post('5802834032265967281', ({v1 : ((typeof AsyncStacksInstrumentation) != ('undefined')) ? (AsyncStacksInstrumentation) : (undefined), v2 : ((typeof SetupAsyncStacksInstrumentation) != ('undefined')) ? (SetupAsyncStacksInstrumentation) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('2572729890923173081', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
function Setup(){
codealchemist_log_type_pre('8823833230059012177', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Debugger.enable');
codealchemist_log_type_post('8823833230059012177', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
codealchemist_log_type_pre('-7307056310165345751', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Runtime.evaluate', ({expression : ''}));
codealchemist_log_type_post('-7307056310165345751', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
}
codealchemist_log_type_post('2572729890923173081', ({}));
codealchemist_log_type_pre('-5223432528742033635', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
function TearDown(){
codealchemist_log_type_pre('-402436792135193018', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Debugger.disable');
codealchemist_log_type_post('-402436792135193018', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
}
codealchemist_log_type_post('-5223432528742033635', ({}));
codealchemist_log_type_pre('-6024543019099917770', ({}));
function DebuggerPaused(){
codealchemist_log_type_pre('5966673374503121995', ({}));
for(var i = 0;(i) < (10);++i){
codealchemist_log_type_pre('6240389259942826466', ({}));
debugger;
codealchemist_log_type_post('6240389259942826466', ({}));
}
codealchemist_log_type_post('5966673374503121995', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6024543019099917770', ({}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let scriptId;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
codealchemist_log_type_pre('601914787875786110', ({v7 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
function SetupGetPossibleBreakpoints(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
Setup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
codealchemist_log_type_pre('-6305944772713105117', ({}));
let expression = '';
codealchemist_log_type_post('-6305944772713105117', ({v0 : ((typeof expression) != ('undefined')) ? (expression) : (undefined)}));
codealchemist_log_type_pre('-909133839152664245', ({v1 : ((typeof expression) != ('undefined')) ? (expression) : (undefined)}));
for(let i = 0;(i) < (20);++i){
codealchemist_log_type_pre('3563969305881630215', ({v0 : ((typeof expression) != ('undefined')) ? (expression) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('9166190164692792644', ({v0 : ((typeof expression) != ('undefined')) ? (expression) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(expression) += `function foo${i}(){
        if (a) {
          return true;
        } else {
          return false;
        }
      }\n`;
codealchemist_log_type_post('9166190164692792644', ({v0 : ((typeof expression) != ('undefined')) ? (expression) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('3563969305881630215', ({v0 : ((typeof expression) != ('undefined')) ? (expression) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-909133839152664245', ({v1 : ((typeof expression) != ('undefined')) ? (expression) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
;
codealchemist_log_type_pre('-2951035456168149630', ({}));
(listener) = (function (msg){
codealchemist_log_type_pre('5713877706247593053', ({v0 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
if((msg.method) === ('Debugger.scriptParsed')){
codealchemist_log_type_pre('3477938789891400586', ({v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
codealchemist_log_type_pre('319368448555700112', ({v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined)}));
(scriptId) = msg.params.scriptId;
codealchemist_log_type_post('319368448555700112', ({v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined), v0 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
codealchemist_log_type_pre('6697378765710824163', ({}));
(listener) = null;
codealchemist_log_type_post('6697378765710824163', ({v0 : ((typeof listener) != ('undefined')) ? (listener) : (undefined)}));
codealchemist_log_type_post('3477938789891400586', ({v2 : ((typeof listener) != ('undefined')) ? (listener) : (undefined), v1 : ((typeof msg) != ('undefined')) ? (msg) : (undefined), v0 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
}
codealchemist_log_type_post('5713877706247593053', ({v2 : ((typeof listener) != ('undefined')) ? (listener) : (undefined), v0 : ((typeof msg) != ('undefined')) ? (msg) : (undefined), v1 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
});
codealchemist_log_type_post('-2951035456168149630', ({v0 : ((typeof listener) != ('undefined')) ? (listener) : (undefined)}));
codealchemist_log_type_pre('-4370740799537552037', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof expression) != ('undefined')) ? (expression) : (undefined)}));
SendMessage('Runtime.evaluate', ({expression}));
codealchemist_log_type_post('-4370740799537552037', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof expression) != ('undefined')) ? (expression) : (undefined)}));
}
codealchemist_log_type_post('601914787875786110', ({}));
codealchemist_log_type_pre('856239127453624536', ({v1 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v2 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
function DebuggerGetPossibleBreakpoints(){
codealchemist_log_type_pre('-998803258118163989', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
SendMessage('Debugger.getPossibleBreakpoints', ({start : ({lineNumber : 0, columnNumber : 0, scriptId : scriptId})}));
codealchemist_log_type_post('-998803258118163989', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof scriptId) != ('undefined')) ? (scriptId) : (undefined)}));
}
codealchemist_log_type_post('856239127453624536', ({}));
codealchemist_log_type_pre('8250840614032709273', ({v2 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined), v1 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
function SetupAsyncStacksInstrumentation(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
Setup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Setup) != ('undefined')) ? (Setup) : (undefined)}));
codealchemist_log_type_pre('3917926871894661396', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
SendMessage('Debugger.setAsyncCallStackDepth', ({maxDepth : 1024}));
codealchemist_log_type_post('3917926871894661396', ({v0 : ((typeof SendMessage) != ('undefined')) ? (SendMessage) : (undefined)}));
}
codealchemist_log_type_post('8250840614032709273', ({}));
codealchemist_log_type_pre('7046539104581469629', ({}));
function AsyncStacksInstrumentation(){
codealchemist_log_type_pre('5779643083102675067', ({}));
var p = Promise.resolve();
codealchemist_log_type_post('5779643083102675067', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-7188696908300329988', ({}));
var nopCallback = (()=>undefined);
codealchemist_log_type_post('-7188696908300329988', ({v0 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined)}));
codealchemist_log_type_pre('1685436347889488454', ({}));
var done = false;
codealchemist_log_type_post('1685436347889488454', ({v0 : ((typeof done) != ('undefined')) ? (done) : (undefined)}));
codealchemist_log_type_pre('-8713591825388426504', ({v2 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
for(let i = 0;(i) < (1000);++i){
codealchemist_log_type_pre('5998110517776426802', ({v1 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('-8941875311360250518', ({v1 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(p) = p.then(nopCallback);
codealchemist_log_type_post('-8941875311360250518', ({v1 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_post('5998110517776426802', ({v1 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
}
codealchemist_log_type_post('-8713591825388426504', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof nopCallback) != ('undefined')) ? (nopCallback) : (undefined), v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('4676264354118719667', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
(p) = p.then((()=>(done) = true));
codealchemist_log_type_post('4676264354118719667', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('5376096951344627153', ({v0 : ((typeof done) != ('undefined')) ? (done) : (undefined)}));
while(! done){
codealchemist_log_type_pre('-7577906835347277920', ({}));
%PerformMicrotaskCheckpoint();
codealchemist_log_type_post('-7577906835347277920', ({}));
}
codealchemist_log_type_post('5376096951344627153', ({v0 : ((typeof done) != ('undefined')) ? (done) : (undefined)}));
}
codealchemist_log_type_post('7046539104581469629', ({}));
})();
codealchemist_log_type_post('-8371699814650572241', ({}));
