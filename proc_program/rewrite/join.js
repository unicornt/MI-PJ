load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
(()=>{
codealchemist_log_type_pre('-7265530382583183660', ({}));
var array;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-5934158437519036897', ({}));
var array_size = 1000;
codealchemist_log_type_post('-5934158437519036897', ({v0 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
function make_join(){
return new Function('result = array.join();');
}
codealchemist_log_type_pre('-9095701821258653771', ({v2 : ((typeof SmiJoinSetup) != ('undefined')) ? (SmiJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
createSuite('SmiJoin', 1000, make_join(), SmiJoinSetup);
codealchemist_log_type_post('-9095701821258653771', ({v2 : ((typeof SmiJoinSetup) != ('undefined')) ? (SmiJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
codealchemist_log_type_pre('-2486731456375711487', ({v2 : ((typeof StringJoinSetup) != ('undefined')) ? (StringJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
createSuite('StringJoin', 1000, make_join(), StringJoinSetup);
codealchemist_log_type_post('-2486731456375711487', ({v2 : ((typeof StringJoinSetup) != ('undefined')) ? (StringJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
codealchemist_log_type_pre('5667966996098154211', ({v2 : ((typeof SparseSmiJoinSetup) != ('undefined')) ? (SparseSmiJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
createSuite('SparseSmiJoin', 1000, make_join(), SparseSmiJoinSetup);
codealchemist_log_type_post('5667966996098154211', ({v2 : ((typeof SparseSmiJoinSetup) != ('undefined')) ? (SparseSmiJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
codealchemist_log_type_pre('5945004074090215434', ({v2 : ((typeof SparseStringJoinSetup) != ('undefined')) ? (SparseStringJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
createSuite('SparseStringJoin', 1000, make_join(), SparseStringJoinSetup);
codealchemist_log_type_post('5945004074090215434', ({v2 : ((typeof SparseStringJoinSetup) != ('undefined')) ? (SparseStringJoinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof make_join) != ('undefined')) ? (make_join) : (undefined)}));
codealchemist_log_type_pre('-2236083842120249701', ({v4 : ((typeof array_size) != ('undefined')) ? (array_size) : (undefined)}));
function SmiJoinSetup(){
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
function StringJoinSetup(){
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
codealchemist_log_type_pre('795182056424104003', ({v1 : ((typeof SmiJoinSetup) != ('undefined')) ? (SmiJoinSetup) : (undefined), v2 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function SparseSmiJoinSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SmiJoinSetup) != ('undefined')) ? (SmiJoinSetup) : (undefined)}));
SmiJoinSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SmiJoinSetup) != ('undefined')) ? (SmiJoinSetup) : (undefined)}));
codealchemist_log_type_pre('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array.length) = (array.length) * (2);
codealchemist_log_type_post('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('795182056424104003', ({}));
codealchemist_log_type_pre('795182056424104003', ({v1 : ((typeof StringJoinSetup) != ('undefined')) ? (StringJoinSetup) : (undefined), v2 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function SparseStringJoinSetup(){
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof StringJoinSetup) != ('undefined')) ? (StringJoinSetup) : (undefined)}));
StringJoinSetup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof StringJoinSetup) != ('undefined')) ? (StringJoinSetup) : (undefined)}));
codealchemist_log_type_pre('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
(array.length) = (array.length) * (2);
codealchemist_log_type_post('-2631778018510957378', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
}
codealchemist_log_type_post('795182056424104003', ({}));
})();
