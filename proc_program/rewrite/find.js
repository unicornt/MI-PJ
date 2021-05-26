load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4723526594741690595', ({v20 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v8 : ((typeof OptFast) != ('undefined')) ? (OptFast) : (undefined), v19 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v12 : ((typeof func) != ('undefined')) ? (func) : (undefined), v9 : ((typeof max_index) != ('undefined')) ? (max_index) : (undefined)}));
(()=>{
codealchemist_log_type_pre('3478775991981454044', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFast(multiple){
codealchemist_log_type_pre('-5192444550557604282', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.find(((v, i, a)=>(v) === (`value ${multiple}`)));
codealchemist_log_type_post('-5192444550557604282', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3478775991981454044', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFast) != ('undefined')) ? (OptFast) : (undefined)}));
%NeverOptimizeFunction(OptFast);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFast) != ('undefined')) ? (OptFast) : (undefined)}));
codealchemist_log_type_pre('1335033636361262848', ({v1 : ((typeof RunOptFast) != ('undefined')) ? (RunOptFast) : (undefined), v2 : ((typeof max_index) != ('undefined')) ? (max_index) : (undefined)}));
function OptFast(){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof RunOptFast) != ('undefined')) ? (RunOptFast) : (undefined), v1 : ((typeof max_index) != ('undefined')) ? (max_index) : (undefined)}));
RunOptFast(max_index);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof RunOptFast) != ('undefined')) ? (RunOptFast) : (undefined), v1 : ((typeof max_index) != ('undefined')) ? (max_index) : (undefined)}));
}
codealchemist_log_type_post('1335033636361262848', ({}));
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
codealchemist_log_type_pre('8177164630263464196', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliable(){
codealchemist_log_type_pre('-5433342835883030933', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.find(func, side_effect(array));
codealchemist_log_type_post('-5433342835883030933', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('8177164630263464196', ({}));
codealchemist_log_type_pre('6748061896526637521', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
function Naive(){
codealchemist_log_type_pre('7731577856744860187', ({}));
let index = - 1;
codealchemist_log_type_post('7731577856744860187', ({v0 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
codealchemist_log_type_pre('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
const length = ((array) == (null)) ? (0) : (array.length);
codealchemist_log_type_post('-4071631467162548514', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('1007967066915836415', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof func) != ('undefined')) ? (func) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let index = 0;(index) < (length);index++){
codealchemist_log_type_pre('-4024763151182879652', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
codealchemist_log_type_pre('4947307678015975283', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined)}));
const value = array[index];
codealchemist_log_type_post('4947307678015975283', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('-6221894589969934911', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
if(func(value, index, array)){
codealchemist_log_type_pre('-5231696573930162582', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(result) = value;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
break ;
codealchemist_log_type_post('-5231696573930162582', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('-6221894589969934911', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
codealchemist_log_type_post('-4024763151182879652', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof index) != ('undefined')) ? (index) : (undefined), v4 : ((typeof result) != ('undefined')) ? (result) : (undefined), v0 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('1007967066915836415', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v4 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof index) != ('undefined')) ? (index) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v5 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}
codealchemist_log_type_post('6748061896526637521', ({}));
codealchemist_log_type_pre('-2918867811197771430', ({v2 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined), v4 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
function NaiveSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
Naive();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
Naive();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
Naive();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
codealchemist_log_type_pre('-3509726068323738519', ({}));
(array) = new Array(10);
codealchemist_log_type_post('-3509726068323738519', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array[0]) = 'hello';
codealchemist_log_type_post('-3878020039363010123', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
Naive();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof Naive) != ('undefined')) ? (Naive) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
SmiSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SmiSetup) != ('undefined')) ? (SmiSetup) : (undefined)}));
codealchemist_log_type_pre('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
delete array[1];
codealchemist_log_type_post('-4702433956869787792', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('-2918867811197771430', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('-4723526594741690595', ({}));
