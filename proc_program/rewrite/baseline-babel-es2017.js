load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-7711460619446235044', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('BaselineES2017', [], []);
codealchemist_log_type_post('-7711460619446235044', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('522902256528647057', ({}));
function _asyncToGenerator(fn){
codealchemist_log_type_pre('-3232388260198662381', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined)}));
var temp_3232388260198662381 = (function (){
codealchemist_log_type_pre('248270131637598578', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined)}));
var gen = fn.apply(this, arguments);
codealchemist_log_type_post('248270131637598578', ({v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof gen) != ('undefined')) ? (gen) : (undefined)}));
codealchemist_log_type_pre('-1805184599874033628', ({v7 : ((typeof gen) != ('undefined')) ? (gen) : (undefined)}));
var temp_1805184599874033628 = new Promise((function (resolve, reject){
codealchemist_log_type_pre('-3537428332841592624', ({v4 : ((typeof gen) != ('undefined')) ? (gen) : (undefined), v7 : ((typeof reject) != ('undefined')) ? (reject) : (undefined), v8 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined)}));
function step(key, arg){
codealchemist_log_type_pre('-6310185797492137055', ({v3 : ((typeof arg) != ('undefined')) ? (arg) : (undefined), v1 : ((typeof gen) != ('undefined')) ? (gen) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v6 : ((typeof reject) != ('undefined')) ? (reject) : (undefined)}));
try{
codealchemist_log_type_pre('8768171566085255548', ({v3 : ((typeof arg) != ('undefined')) ? (arg) : (undefined), v1 : ((typeof gen) != ('undefined')) ? (gen) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var info = gen[key](arg);
codealchemist_log_type_post('8768171566085255548', ({v3 : ((typeof arg) != ('undefined')) ? (arg) : (undefined), v1 : ((typeof gen) != ('undefined')) ? (gen) : (undefined), v0 : ((typeof info) != ('undefined')) ? (info) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('-2963241581764188941', ({v1 : ((typeof info) != ('undefined')) ? (info) : (undefined)}));
var value = info.value;
codealchemist_log_type_post('-2963241581764188941', ({v1 : ((typeof info) != ('undefined')) ? (info) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}catch(error){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof reject) != ('undefined')) ? (reject) : (undefined)}));
reject(error);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof error) != ('undefined')) ? (error) : (undefined), v0 : ((typeof reject) != ('undefined')) ? (reject) : (undefined)}));
return;
}
codealchemist_log_type_post('-6310185797492137055', ({v3 : ((typeof arg) != ('undefined')) ? (arg) : (undefined), v5 : ((typeof error) != ('undefined')) ? (error) : (undefined), v1 : ((typeof gen) != ('undefined')) ? (gen) : (undefined), v0 : ((typeof info) != ('undefined')) ? (info) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v6 : ((typeof reject) != ('undefined')) ? (reject) : (undefined), v4 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('492548938186458183', ({v0 : ((typeof info) != ('undefined')) ? (info) : (undefined), v1 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v4 : ((typeof step) != ('undefined')) ? (step) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(info.done){
codealchemist_log_type_pre('3909125431120928320', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
resolve(value);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('3909125431120928320', ({v0 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}else {
codealchemist_log_type_pre('2067984394765727260', ({v2 : ((typeof step) != ('undefined')) ? (step) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('5508708087415839054', ({v2 : ((typeof step) != ('undefined')) ? (step) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
var temp_5508708087415839054 = Promise.resolve(value).then((function (value){
codealchemist_log_type_pre('-8141958298267323649', ({v0 : ((typeof step) != ('undefined')) ? (step) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
step("next", value);
codealchemist_log_type_post('-8141958298267323649', ({v0 : ((typeof step) != ('undefined')) ? (step) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}), (function (err){
codealchemist_log_type_pre('2255328722898688795', ({v1 : ((typeof err) != ('undefined')) ? (err) : (undefined), v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
step("throw", err);
codealchemist_log_type_post('2255328722898688795', ({v1 : ((typeof err) != ('undefined')) ? (err) : (undefined), v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
}));
codealchemist_log_type_post('5508708087415839054', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
return temp_5508708087415839054;
codealchemist_log_type_post('2067984394765727260', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('492548938186458183', ({v0 : ((typeof info) != ('undefined')) ? (info) : (undefined), v1 : ((typeof resolve) != ('undefined')) ? (resolve) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-3537428332841592624', ({}));
codealchemist_log_type_pre('4762099368648941879', ({v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
var temp_4762099368648941879 = step("next");
codealchemist_log_type_post('4762099368648941879', ({v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
return temp_4762099368648941879;
}));
codealchemist_log_type_post('-1805184599874033628', ({}));
return temp_1805184599874033628;
});
codealchemist_log_type_post('-3232388260198662381', ({}));
return temp_3232388260198662381;
}
codealchemist_log_type_post('522902256528647057', ({}));
codealchemist_log_type_pre('-3120425829689395125', ({}));
var a, b, c, d, e, f, g, h, i, j, x;
codealchemist_log_type_post('-3120425829689395125', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v2 : ((typeof c) != ('undefined')) ? (c) : (undefined), v3 : ((typeof d) != ('undefined')) ? (d) : (undefined), v4 : ((typeof e) != ('undefined')) ? (e) : (undefined), v5 : ((typeof f) != ('undefined')) ? (f) : (undefined), v6 : ((typeof g) != ('undefined')) ? (g) : (undefined), v7 : ((typeof h) != ('undefined')) ? (h) : (undefined), v8 : ((typeof i) != ('undefined')) ? (i) : (undefined), v9 : ((typeof j) != ('undefined')) ? (j) : (undefined), v10 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('9156228473975834402', ({v5 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined)}));
function Setup(){
codealchemist_log_type_pre('5143729957139292452', ({}));
(x) = Promise.resolve();
codealchemist_log_type_post('5143729957139292452', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-4409899948445131018', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
(j) = (()=>{
codealchemist_log_type_pre('-1955807815966480805', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
var _ref = _asyncToGenerator((function* (){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
var temp_3444589576563574513 = x;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
return temp_3444589576563574513;
}));
codealchemist_log_type_post('-1955807815966480805', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref) != ('undefined')) ? (_ref) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref) != ('undefined')) ? (_ref) : (undefined)}));
function j(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref) != ('undefined')) ? (_ref) : (undefined)}));
var temp_3160087332156134510 = _ref.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref) != ('undefined')) ? (_ref) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
var temp_3444589576563574513 = j;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-4409899948445131018', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('236214528332830116', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
(i) = (()=>{
codealchemist_log_type_pre('-5551731739749651210', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
var _ref2 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
yield j();
codealchemist_log_type_post('8204286453062369320', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
var temp_2196234077404683449 = j();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof j) != ('undefined')) ? (j) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('-5551731739749651210', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref2) != ('undefined')) ? (_ref2) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref2) != ('undefined')) ? (_ref2) : (undefined)}));
function i(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref2) != ('undefined')) ? (_ref2) : (undefined)}));
var temp_3160087332156134510 = _ref2.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref2) != ('undefined')) ? (_ref2) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var temp_3444589576563574513 = i;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('236214528332830116', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(h) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var _ref3 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var temp_2196234077404683449 = i();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref3) != ('undefined')) ? (_ref3) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref3) != ('undefined')) ? (_ref3) : (undefined)}));
function h(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref3) != ('undefined')) ? (_ref3) : (undefined)}));
var temp_3160087332156134510 = _ref3.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref3) != ('undefined')) ? (_ref3) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
var temp_3444589576563574513 = h;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
(g) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
var _ref4 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
var temp_2196234077404683449 = h();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref4) != ('undefined')) ? (_ref4) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref4) != ('undefined')) ? (_ref4) : (undefined)}));
function g(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref4) != ('undefined')) ? (_ref4) : (undefined)}));
var temp_3160087332156134510 = _ref4.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref4) != ('undefined')) ? (_ref4) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
var temp_3444589576563574513 = g;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
(f) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
var _ref5 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
var temp_2196234077404683449 = g();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref5) != ('undefined')) ? (_ref5) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref5) != ('undefined')) ? (_ref5) : (undefined)}));
function f(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref5) != ('undefined')) ? (_ref5) : (undefined)}));
var temp_3160087332156134510 = _ref5.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref5) != ('undefined')) ? (_ref5) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
var temp_3444589576563574513 = f;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
(e) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
var _ref6 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
var temp_2196234077404683449 = f();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref6) != ('undefined')) ? (_ref6) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref6) != ('undefined')) ? (_ref6) : (undefined)}));
function e(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref6) != ('undefined')) ? (_ref6) : (undefined)}));
var temp_3160087332156134510 = _ref6.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref6) != ('undefined')) ? (_ref6) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_3444589576563574513 = e;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
(d) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var _ref7 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
var temp_2196234077404683449 = e();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof e) != ('undefined')) ? (e) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref7) != ('undefined')) ? (_ref7) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref7) != ('undefined')) ? (_ref7) : (undefined)}));
function d(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref7) != ('undefined')) ? (_ref7) : (undefined)}));
var temp_3160087332156134510 = _ref7.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref7) != ('undefined')) ? (_ref7) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
var temp_3444589576563574513 = d;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
(c) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
var _ref8 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
var temp_2196234077404683449 = d();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof d) != ('undefined')) ? (d) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref8) != ('undefined')) ? (_ref8) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref8) != ('undefined')) ? (_ref8) : (undefined)}));
function c(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref8) != ('undefined')) ? (_ref8) : (undefined)}));
var temp_3160087332156134510 = _ref8.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref8) != ('undefined')) ? (_ref8) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_3444589576563574513 = c;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
(b) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var _ref9 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
var temp_2196234077404683449 = c();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref9) != ('undefined')) ? (_ref9) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref9) != ('undefined')) ? (_ref9) : (undefined)}));
function b(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref9) != ('undefined')) ? (_ref9) : (undefined)}));
var temp_3160087332156134510 = _ref9.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref9) != ('undefined')) ? (_ref9) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_3444589576563574513 = b;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-6068189801521065343', ({v2 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v3 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
(a) = (()=>{
codealchemist_log_type_pre('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var _ref10 = _asyncToGenerator((function* (){
codealchemist_log_type_pre('2196234077404683449', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
var temp_2196234077404683449 = b();
codealchemist_log_type_post('2196234077404683449', ({v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
return temp_2196234077404683449;
}));
codealchemist_log_type_post('6044250015318665388', ({v1 : ((typeof _asyncToGenerator) != ('undefined')) ? (_asyncToGenerator) : (undefined), v0 : ((typeof _ref10) != ('undefined')) ? (_ref10) : (undefined)}));
codealchemist_log_type_pre('1219561781919625557', ({v1 : ((typeof _ref10) != ('undefined')) ? (_ref10) : (undefined)}));
function a(){
codealchemist_log_type_pre('3160087332156134510', ({v0 : ((typeof _ref10) != ('undefined')) ? (_ref10) : (undefined)}));
var temp_3160087332156134510 = _ref10.apply(this, arguments);
codealchemist_log_type_post('3160087332156134510', ({v0 : ((typeof _ref10) != ('undefined')) ? (_ref10) : (undefined)}));
return temp_3160087332156134510;
}
codealchemist_log_type_post('1219561781919625557', ({}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
var temp_3444589576563574513 = a;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
return temp_3444589576563574513;
})();
codealchemist_log_type_post('-6068189801521065343', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-7577906835347277920', ({}));
%PerformMicrotaskCheckpoint();
codealchemist_log_type_post('-7577906835347277920', ({}));
}
codealchemist_log_type_post('9156228473975834402', ({}));
codealchemist_log_type_pre('-3521289898732766750', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
function Basic(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
a();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-7577906835347277920', ({}));
%PerformMicrotaskCheckpoint();
codealchemist_log_type_post('-7577906835347277920', ({}));
}
codealchemist_log_type_post('-3521289898732766750', ({}));
