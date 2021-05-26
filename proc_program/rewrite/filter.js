load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1309628965926824831', ({v20 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v17 : ((typeof OptFastFilter) != ('undefined')) ? (OptFastFilter) : (undefined), v10 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined), v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v7 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('-4733923792901426601', ({v4 : ((typeof array) != ('undefined')) ? (array) : (undefined), v7 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
function NaiveFilter(){
codealchemist_log_type_pre('7731577856744860187', ({}));
let index = - 1;
codealchemist_log_type_post('7731577856744860187', ({v0 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
codealchemist_log_type_pre('8720562409487186565', ({}));
let resIndex = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined)}));
codealchemist_log_type_pre('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
const length = ((array) == (null)) ? (0) : (array.length);
codealchemist_log_type_post('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const result = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6581067827876039620', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v6 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v5 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
while((++index) < (length)){
codealchemist_log_type_pre('842141076826373803', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v5 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
const value = array[index];
codealchemist_log_type_post('4947307678015975283', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-418720574224374351', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v5 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(func(value, index, array)){
codealchemist_log_type_pre('5275319701822157837', ({v1 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-560300859350447434', ({v1 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(result[resIndex++]) = value;
codealchemist_log_type_post('-560300859350447434', ({v1 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('5275319701822157837', ({v1 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-418720574224374351', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v5 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('842141076826373803', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v5 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-6581067827876039620', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v6 : ((typeof resIndex) != ('undefined')) ? (resIndex) : (undefined), v5 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-4733923792901426601', ({}));
codealchemist_log_type_pre('-2918867811197771430', ({v2 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined), v4 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
function NaiveFilterSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
NaiveFilter();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
NaiveFilter();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
NaiveFilter();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
codealchemist_log_type_pre('-3509726068323738519', ({}));
(array) = new Array(10);
codealchemist_log_type_post('-3509726068323738519', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array[0]) = 'hello';
codealchemist_log_type_post('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
NaiveFilter();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof NaiveFilter) != ('undefined')) ? (NaiveFilter) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
SmiSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
codealchemist_log_type_pre('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
delete array[1];
codealchemist_log_type_post('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('-2918867811197771430', ({}));
codealchemist_log_type_pre('8675098603006748889', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastFilter(multiple){
codealchemist_log_type_pre('821491631335815537', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.filter(((v, i, a)=>(multiple) === (3)));
codealchemist_log_type_post('821491631335815537', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('8675098603006748889', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastFilter) != ('undefined')) ? (OptFastFilter) : (undefined)}));
%NeverOptimizeFunction(OptFastFilter);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastFilter) != ('undefined')) ? (OptFastFilter) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastFilter) != ('undefined')) ? (RunOptFastFilter) : (undefined)}));
function OptFastFilter(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastFilter) != ('undefined')) ? (RunOptFastFilter) : (undefined)}));
RunOptFastFilter(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastFilter) != ('undefined')) ? (RunOptFastFilter) : (undefined)}));
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
codealchemist_log_type_pre('8800362661971780811', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableFilter(){
codealchemist_log_type_pre('-2123545279135663717', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.filter(func, side_effect(array));
codealchemist_log_type_post('-2123545279135663717', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('8800362661971780811', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('1309628965926824831', ({}));
