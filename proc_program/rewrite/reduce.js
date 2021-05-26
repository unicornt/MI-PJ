load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('8427151241575392396', ({v13 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v9 : ((typeof OptFastReduce) != ('undefined')) ? (OptFastReduce) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v12 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('-2787130323377006522', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastReduce(multiple){
codealchemist_log_type_pre('-26097703389356919', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v6 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.reduce(((p, v, i, a)=>(p) + (multiple)));
codealchemist_log_type_post('-26097703389356919', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-2787130323377006522', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastReduce) != ('undefined')) ? (OptFastReduce) : (undefined)}));
%NeverOptimizeFunction(OptFastReduce);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastReduce) != ('undefined')) ? (OptFastReduce) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastReduce) != ('undefined')) ? (RunOptFastReduce) : (undefined)}));
function OptFastReduce(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastReduce) != ('undefined')) ? (RunOptFastReduce) : (undefined)}));
RunOptFastReduce(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastReduce) != ('undefined')) ? (RunOptFastReduce) : (undefined)}));
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
codealchemist_log_type_pre('-619643933140699343', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableReduce(){
codealchemist_log_type_pre('950531620583803171', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.reduce(func, side_effect(array));
codealchemist_log_type_post('950531620583803171', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('-619643933140699343', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('8427151241575392396', ({}));
