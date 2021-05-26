load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('1926025986833952219', ({v3 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
function benchy(fn, name){
codealchemist_log_type_pre('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
new BenchmarkSuite(name, [], []);
codealchemist_log_type_post('1025555206307318033', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined)}));
}
codealchemist_log_type_post('1926025986833952219', ({}));
codealchemist_log_type_pre('-5824599324110294391', ({v4 : ((typeof farraylse) != ('undefined')) ? (farraylse) : (undefined)}));
function forLoop(array, searchValue){
codealchemist_log_type_pre('8372302301696028951', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
for(let i = 0;(i) < (array.length);++i){
codealchemist_log_type_pre('-3818897775464709840', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
codealchemist_log_type_pre('6412243031857189617', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
if((array[i]) === (searchValue)){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('6412243031857189617', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
codealchemist_log_type_post('-3818897775464709840', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
}
codealchemist_log_type_post('8372302301696028951', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof farraylse) != ('undefined')) ? (farraylse) : (undefined)}));
var temp_3444589576563574513 = farraylse;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof farraylse) != ('undefined')) ? (farraylse) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-5824599324110294391', ({}));
codealchemist_log_type_pre('8671016009819229095', ({}));
function indexOf(array, searchValue){
codealchemist_log_type_pre('3701175689832356925', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
var temp_3701175689832356925 = (array.indexOf(searchValue)) !== (- 1);
codealchemist_log_type_post('3701175689832356925', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
return temp_3701175689832356925;
}
codealchemist_log_type_post('8671016009819229095', ({}));
codealchemist_log_type_pre('8478979636240243947', ({}));
function includes(array, searchValue){
codealchemist_log_type_pre('1615060155821330975', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
var temp_1615060155821330975 = array.includes(searchValue);
codealchemist_log_type_post('1615060155821330975', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof searchValue) != ('undefined')) ? (searchValue) : (undefined)}));
return temp_1615060155821330975;
}
codealchemist_log_type_post('8478979636240243947', ({}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const PACKED = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined)}));
codealchemist_log_type_pre('2021959107957566868', ({v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined)}));
const HOLEY = new Array(PACKED.length);
codealchemist_log_type_post('2021959107957566868', ({v0 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined)}));
codealchemist_log_type_pre('-6561176097542217235', ({v2 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v1 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined)}));
for(let i = 0;(i) < (PACKED.length);++i){
codealchemist_log_type_pre('-6222424937319300393', ({v0 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(HOLEY[i]) = PACKED[i];
codealchemist_log_type_post('-6222424937319300393', ({v0 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6561176097542217235', ({v2 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v1 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-3168861494442578040', ({v5 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v4 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined)}));
function helper(fn){
codealchemist_log_type_pre('-4146275557251139437', ({}));
const SEARCH_VALUE = 15;
codealchemist_log_type_post('-4146275557251139437', ({v0 : ((typeof SEARCH_VALUE) != ('undefined')) ? (SEARCH_VALUE) : (undefined)}));
codealchemist_log_type_pre('-1379449941243988581', ({v4 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined), v3 : ((typeof SEARCH_VALUE) != ('undefined')) ? (SEARCH_VALUE) : (undefined), v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined)}));
const result = (fn(PACKED, SEARCH_VALUE)) && (fn(HOLEY, SEARCH_VALUE));
codealchemist_log_type_post('-1379449941243988581', ({v4 : ((typeof HOLEY) != ('undefined')) ? (HOLEY) : (undefined), v2 : ((typeof PACKED) != ('undefined')) ? (PACKED) : (undefined), v3 : ((typeof SEARCH_VALUE) != ('undefined')) ? (SEARCH_VALUE) : (undefined), v1 : ((typeof fn) != ('undefined')) ? (fn) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-3168861494442578040', ({}));
codealchemist_log_type_pre('8956419888939685013', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined), v2 : ((typeof forLoop) != ('undefined')) ? (forLoop) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined)}));
benchy((()=>helper(forLoop)), 'for loop');
codealchemist_log_type_post('8956419888939685013', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined)}));
codealchemist_log_type_pre('-4433202326411895907', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined), v2 : ((typeof indexOf) != ('undefined')) ? (indexOf) : (undefined)}));
benchy((()=>helper(indexOf)), 'Array#indexOf');
codealchemist_log_type_post('-4433202326411895907', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined)}));
codealchemist_log_type_pre('-4090571477299283179', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined), v1 : ((typeof helper) != ('undefined')) ? (helper) : (undefined), v2 : ((typeof includes) != ('undefined')) ? (includes) : (undefined)}));
benchy((()=>helper(includes)), 'Array#includes');
codealchemist_log_type_post('-4090571477299283179', ({v0 : ((typeof benchy) != ('undefined')) ? (benchy) : (undefined)}));
