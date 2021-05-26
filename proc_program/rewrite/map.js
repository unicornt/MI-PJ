load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1992866516068559264', ({v18 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v15 : ((typeof OptFastMap) != ('undefined')) ? (OptFastMap) : (undefined), v8 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v6 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('2149432426334242504', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v6 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
function NaiveMap(){
codealchemist_log_type_pre('7731577856744860187', ({}));
let index = - 1;
codealchemist_log_type_post('7731577856744860187', ({v0 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
codealchemist_log_type_pre('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
const length = ((array) == (null)) ? (0) : (array.length);
codealchemist_log_type_post('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('7245165126927635417', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
const result = new Array(length);
codealchemist_log_type_post('7245165126927635417', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('773172026100085447', ({v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
while((++index) < (length)){
codealchemist_log_type_pre('3572990475114559515', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v1 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('7404212538041186772', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v1 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result[index]) = func(array[index], index, array);
codealchemist_log_type_post('7404212538041186772', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v1 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('3572990475114559515', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v1 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('773172026100085447', ({v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('2149432426334242504', ({}));
codealchemist_log_type_pre('-2918867811197771430', ({v2 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined), v4 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
function NaiveMapSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
NaiveMap();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
NaiveMap();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
NaiveMap();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
codealchemist_log_type_pre('-3509726068323738519', ({}));
(array) = new Array(10);
codealchemist_log_type_post('-3509726068323738519', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array[0]) = 'hello';
codealchemist_log_type_post('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
NaiveMap();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveMap) != ('undefined')) ? (NaiveMap) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
SmiSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
codealchemist_log_type_pre('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
delete array[1];
codealchemist_log_type_post('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('-2918867811197771430', ({}));
codealchemist_log_type_pre('1884262620268515837', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastMap(multiple){
codealchemist_log_type_pre('1394825399189483084', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.map(((v, i, a)=>((v) + (' ')) + (multiple)));
codealchemist_log_type_post('1394825399189483084', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('1884262620268515837', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastMap) != ('undefined')) ? (OptFastMap) : (undefined)}));
%NeverOptimizeFunction(OptFastMap);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastMap) != ('undefined')) ? (OptFastMap) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastMap) != ('undefined')) ? (RunOptFastMap) : (undefined)}));
function OptFastMap(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastMap) != ('undefined')) ? (RunOptFastMap) : (undefined)}));
RunOptFastMap(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastMap) != ('undefined')) ? (RunOptFastMap) : (undefined)}));
}
codealchemist_log_type_post('-3987458632548678936', ({}));
codealchemist_log_type_pre('-669827548547540183', ({}));
function side_effect(a){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
var temp_3444589576563574513 = a;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-669827548547540183', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
%NeverOptimizeFunction(side_effect);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
codealchemist_log_type_pre('3183850921393879164', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableMap(){
codealchemist_log_type_pre('-737951735327216969', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.map(func, side_effect(array));
codealchemist_log_type_post('-737951735327216969', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('3183850921393879164', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('-1992866516068559264', ({}));
