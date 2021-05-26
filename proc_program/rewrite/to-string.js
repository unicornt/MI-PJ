load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
(()=>{
function make_tostring(){
return new Function("result = array.toString();");
}
codealchemist_log_type_pre('-3903599028304756927', ({v2 : ((typeof SmiToStringSetup) != ('undefined')) ? (SmiToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
createSuite('SmiToString', 1000, make_tostring(), SmiToStringSetup);
codealchemist_log_type_post('-3903599028304756927', ({v2 : ((typeof SmiToStringSetup) != ('undefined')) ? (SmiToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
codealchemist_log_type_pre('8934190502012936587', ({v2 : ((typeof StringToStringSetup) != ('undefined')) ? (StringToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
createSuite('StringToString', 1000, make_tostring(), StringToStringSetup);
codealchemist_log_type_post('8934190502012936587', ({v2 : ((typeof StringToStringSetup) != ('undefined')) ? (StringToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
codealchemist_log_type_pre('79227027669022769', ({v2 : ((typeof SparseSmiToStringSetup) != ('undefined')) ? (SparseSmiToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
createSuite('SparseSmiToString', 1000, make_tostring(), SparseSmiToStringSetup);
codealchemist_log_type_post('79227027669022769', ({v2 : ((typeof SparseSmiToStringSetup) != ('undefined')) ? (SparseSmiToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
codealchemist_log_type_pre('-5831755856686142101', ({v2 : ((typeof SparseStringToStringSetup) != ('undefined')) ? (SparseStringToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
createSuite('SparseStringToString', 1000, make_tostring(), SparseStringToStringSetup);
codealchemist_log_type_post('-5831755856686142101', ({v2 : ((typeof SparseStringToStringSetup) != ('undefined')) ? (SparseStringToStringSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_tostring) != ('undefined')) ? (make_tostring) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var array;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-5934158437519036897', ({}));
var array_size = 1000;
codealchemist_log_type_post('-5934158437519036897', ({v0 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
codealchemist_log_type_pre('-2236083842120249701', ({v4 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
function SmiToStringSetup(){
codealchemist_log_type_pre('-1375834312596001249', ({}));
(array) = new Array();
codealchemist_log_type_post('-1375834312596001249', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-8290809011746639463', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
for(var i = 0;(i) < (array_size);++i){
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-8290809011746639463', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-2236083842120249701', ({}));
codealchemist_log_type_pre('-2526923759251067596', ({v4 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
function StringToStringSetup(){
codealchemist_log_type_pre('-1375834312596001249', ({}));
(array) = new Array();
codealchemist_log_type_post('-1375834312596001249', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-6444808389032598523', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
for(var i = 0;(i) < (array_size);++i){
codealchemist_log_type_pre('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = `Item no. ${i}`;
codealchemist_log_type_post('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6444808389032598523', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-2526923759251067596', ({}));
codealchemist_log_type_pre('795182056424104003', ({v1 : ((typeof SmiToStringSetup) != ('undefined')) ? (SmiToStringSetup) : (undefined), v2 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function SparseSmiToStringSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SmiToStringSetup) != ('undefined')) ? (SmiToStringSetup) : (undefined)}));
SmiToStringSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SmiToStringSetup) != ('undefined')) ? (SmiToStringSetup) : (undefined)}));
codealchemist_log_type_pre('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array.length) = (array.length) * (2);
codealchemist_log_type_post('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('795182056424104003', ({}));
codealchemist_log_type_pre('795182056424104003', ({v1 : ((typeof StringToStringSetup) != ('undefined')) ? (StringToStringSetup) : (undefined), v2 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function SparseStringToStringSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof StringToStringSetup) != ('undefined')) ? (StringToStringSetup) : (undefined)}));
StringToStringSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof StringToStringSetup) != ('undefined')) ? (StringToStringSetup) : (undefined)}));
codealchemist_log_type_pre('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array.length) = (array.length) * (2);
codealchemist_log_type_post('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('795182056424104003', ({}));
})();
