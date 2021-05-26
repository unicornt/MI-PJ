load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-2834054933482749207', ({v12 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v8 : ((typeof OptFastEvery) != ('undefined')) ? (OptFastEvery) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v11 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('7997663484092453855', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastEvery(multiple){
codealchemist_log_type_pre('2047047377473989214', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.every(((v, i, a)=>(multiple) === (3)));
codealchemist_log_type_post('2047047377473989214', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7997663484092453855', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastEvery) != ('undefined')) ? (OptFastEvery) : (undefined)}));
%NeverOptimizeFunction(OptFastEvery);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastEvery) != ('undefined')) ? (OptFastEvery) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastEvery) != ('undefined')) ? (RunOptFastEvery) : (undefined)}));
function OptFastEvery(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastEvery) != ('undefined')) ? (RunOptFastEvery) : (undefined)}));
RunOptFastEvery(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastEvery) != ('undefined')) ? (RunOptFastEvery) : (undefined)}));
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
codealchemist_log_type_pre('4419570136736539919', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableEvery(){
codealchemist_log_type_pre('-730538761134150145', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.every(func, side_effect(array));
codealchemist_log_type_post('-730538761134150145', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('4419570136736539919', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('-2834054933482749207', ({}));
