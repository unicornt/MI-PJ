load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('8691997372833118635', ({v13 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v9 : ((typeof OptFastReduceRight) != ('undefined')) ? (OptFastReduceRight) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v12 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('-120385970724787964', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastReduceRight(multiple){
codealchemist_log_type_pre('6754415736474288222', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v6 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.reduceRight(((p, v, i, a)=>(p) + (multiple)));
codealchemist_log_type_post('6754415736474288222', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-120385970724787964', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastReduceRight) != ('undefined')) ? (OptFastReduceRight) : (undefined)}));
%NeverOptimizeFunction(OptFastReduceRight);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastReduceRight) != ('undefined')) ? (OptFastReduceRight) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastReduceRight) != ('undefined')) ? (RunOptFastReduceRight) : (undefined)}));
function OptFastReduceRight(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastReduceRight) != ('undefined')) ? (RunOptFastReduceRight) : (undefined)}));
RunOptFastReduceRight(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastReduceRight) != ('undefined')) ? (RunOptFastReduceRight) : (undefined)}));
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
codealchemist_log_type_pre('5560570679449019934', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableReduceRight(){
codealchemist_log_type_pre('6832520149764342977', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.reduceRight(func, side_effect(array));
codealchemist_log_type_post('6832520149764342977', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('5560570679449019934', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('8691997372833118635', ({}));
