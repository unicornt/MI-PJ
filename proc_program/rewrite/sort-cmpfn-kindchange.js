load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
load('sort-base.js');
codealchemist_log_type_pre('-2430615888745566431', ({v6 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined), v4 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v5 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
function CreateCompareFn(transformfn){
codealchemist_log_type_pre('1301009908582720568', ({v5 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined), v2 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v4 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
var temp_1301009908582720568 = ((a, b)=>{
codealchemist_log_type_pre('7450463945887007870', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
++counter;
codealchemist_log_type_post('7450463945887007870', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('-845707431133328283', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v2 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
if((counter) == ((kArraySize) / (2))){
codealchemist_log_type_pre('3700030236811867080', ({v0 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
transformfn();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
codealchemist_log_type_post('3700030236811867080', ({v0 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
}
codealchemist_log_type_post('-845707431133328283', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v2 : ((typeof transformfn) != ('undefined')) ? (transformfn) : (undefined)}));
codealchemist_log_type_pre('-7428994654158484287', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
var temp_7428994654158484287 = cmp_smaller(a, b);
codealchemist_log_type_post('-7428994654158484287', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
return temp_7428994654158484287;
});
codealchemist_log_type_post('1301009908582720568', ({}));
return temp_1301009908582720568;
}
codealchemist_log_type_post('-2430615888745566431', ({}));
codealchemist_log_type_pre('-841954455164291552', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let cmp_packed_smi_to_double = CreateCompareFn((()=>array_to_sort.push(0.1)));
codealchemist_log_type_post('-841954455164291552', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v0 : ((typeof cmp_packed_smi_to_double) != ('undefined')) ? (cmp_packed_smi_to_double) : (undefined)}));
codealchemist_log_type_pre('-841954455164291552', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let cmp_holey_smi_to_double = CreateCompareFn((()=>array_to_sort.push(0.1)));
codealchemist_log_type_post('-841954455164291552', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v0 : ((typeof cmp_holey_smi_to_double) != ('undefined')) ? (cmp_holey_smi_to_double) : (undefined)}));
codealchemist_log_type_pre('-7308525051212804910', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let cmp_double_to_double = CreateCompareFn((()=>(array_to_sort.length) *= 2));
codealchemist_log_type_post('-7308525051212804910', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v0 : ((typeof cmp_double_to_double) != ('undefined')) ? (cmp_double_to_double) : (undefined)}));
codealchemist_log_type_pre('6419512941443314882', ({v3 : ((typeof AssertPackedDoubleElements) != ('undefined')) ? (AssertPackedDoubleElements) : (undefined), v2 : ((typeof CreatePackedSmiArray) != ('undefined')) ? (CreatePackedSmiArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('PackedSmiToPackedDouble', 1000, CreateSortFn([]), CreatePackedSmiArray, AssertPackedDoubleElements);
codealchemist_log_type_post('6419512941443314882', ({v3 : ((typeof AssertPackedDoubleElements) != ('undefined')) ? (AssertPackedDoubleElements) : (undefined), v2 : ((typeof CreatePackedSmiArray) != ('undefined')) ? (CreatePackedSmiArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-2869617654644669999', ({v3 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined), v2 : ((typeof CreateHoleySmiArray) != ('undefined')) ? (CreateHoleySmiArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('HoleySmiToHoleyDouble', 1000, CreateSortFn([]), CreateHoleySmiArray, AssertHoleyDoubleElements);
codealchemist_log_type_post('-2869617654644669999', ({v3 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined), v2 : ((typeof CreateHoleySmiArray) != ('undefined')) ? (CreateHoleySmiArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('7817652264823085204', ({v3 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined), v2 : ((typeof CreatePackedDoubleArray) != ('undefined')) ? (CreatePackedDoubleArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('PackedDoubleToHoleyDouble', 1000, CreateSortFn([]), CreatePackedDoubleArray, AssertHoleyDoubleElements);
codealchemist_log_type_post('7817652264823085204', ({v3 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined), v2 : ((typeof CreatePackedDoubleArray) != ('undefined')) ? (CreatePackedDoubleArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-4904746879725019236', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let cmp_packed_to_dict = CreateCompareFn((()=>(array_to_sort[%MaxSmi()]) = 42));
codealchemist_log_type_post('-4904746879725019236', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v0 : ((typeof cmp_packed_to_dict) != ('undefined')) ? (cmp_packed_to_dict) : (undefined)}));
codealchemist_log_type_pre('-4904746879725019236', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let cmp_holey_to_dict = CreateCompareFn((()=>(array_to_sort[%MaxSmi()]) = 42));
codealchemist_log_type_post('-4904746879725019236', ({v1 : ((typeof CreateCompareFn) != ('undefined')) ? (CreateCompareFn) : (undefined), v0 : ((typeof cmp_holey_to_dict) != ('undefined')) ? (cmp_holey_to_dict) : (undefined)}));
codealchemist_log_type_pre('-7759756947241599386', ({v3 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined), v2 : ((typeof CreatePackedObjectArray) != ('undefined')) ? (CreatePackedObjectArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('PackedElementToDictionary', 1000, CreateSortFn([]), CreatePackedObjectArray, AssertDictionaryElements);
codealchemist_log_type_post('-7759756947241599386', ({v3 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined), v2 : ((typeof CreatePackedObjectArray) != ('undefined')) ? (CreatePackedObjectArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('927477803799645507', ({v3 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined), v2 : ((typeof CreateHoleyObjectArray) != ('undefined')) ? (CreateHoleyObjectArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('HoleyElementToDictionary', 1000, CreateSortFn([]), CreateHoleyObjectArray, AssertDictionaryElements);
codealchemist_log_type_post('927477803799645507', ({v3 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined), v2 : ((typeof CreateHoleyObjectArray) != ('undefined')) ? (CreateHoleyObjectArray) : (undefined), v1 : ((typeof CreateSortFn) != ('undefined')) ? (CreateSortFn) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
