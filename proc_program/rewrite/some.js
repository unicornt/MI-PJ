load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-2536917877197775312', ({v12 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined), v8 : ((typeof OptFastSome) != ('undefined')) ? (OptFastSome) : (undefined), v3 : ((typeof array) != ('undefined')) ? (array) : (undefined), v11 : ((typeof func) != ('undefined')) ? (func) : (undefined)}));
(()=>{
codealchemist_log_type_pre('2537846120304196359', ({v3 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function RunOptFastSome(multiple){
codealchemist_log_type_pre('-7533220293737087522', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v5 : ((typeof multiple) != ('undefined')) ? (multiple) : (undefined)}));
(result) = array.some(((v, i, a)=>(multiple) !== (3)));
codealchemist_log_type_post('-7533220293737087522', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('2537846120304196359', ({}));
codealchemist_log_type_pre('-4144375167697826940', ({v1 : ((typeof OptFastSome) != ('undefined')) ? (OptFastSome) : (undefined)}));
%NeverOptimizeFunction(OptFastSome);
codealchemist_log_type_post('-4144375167697826940', ({v1 : ((typeof OptFastSome) != ('undefined')) ? (OptFastSome) : (undefined)}));
codealchemist_log_type_pre('-3987458632548678936', ({v1 : ((typeof RunOptFastSome) != ('undefined')) ? (RunOptFastSome) : (undefined)}));
function OptFastSome(){
codealchemist_log_type_pre('5347588582312948475', ({v0 : ((typeof RunOptFastSome) != ('undefined')) ? (RunOptFastSome) : (undefined)}));
RunOptFastSome(3);
codealchemist_log_type_post('5347588582312948475', ({v0 : ((typeof RunOptFastSome) != ('undefined')) ? (RunOptFastSome) : (undefined)}));
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
codealchemist_log_type_pre('-4352033799104310662', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v3 : ((typeof func) != ('undefined')) ? (func) : (undefined), v4 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
function OptUnreliableSome(){
codealchemist_log_type_pre('-3400853760499312350', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
(result) = array.some(func, side_effect(array));
codealchemist_log_type_post('-3400853760499312350', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof func) != ('undefined')) ? (func) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof side_effect) != ('undefined')) ? (side_effect) : (undefined)}));
}
codealchemist_log_type_post('-4352033799104310662', ({}));
codealchemist_log_type_pre('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
DefineHigherOrderTests([]);
codealchemist_log_type_post('-706258829059118294', ({v0 : ((typeof DefineHigherOrderTests) != ('undefined')) ? (DefineHigherOrderTests) : (undefined)}));
})();
codealchemist_log_type_post('-2536917877197775312', ({}));
