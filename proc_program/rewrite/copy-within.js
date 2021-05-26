load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
(()=>{
codealchemist_log_type_pre('-7249826775171989363', ({}));
const kArraySize = 1000;
codealchemist_log_type_post('-7249826775171989363', ({v0 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-265561419310299347', ({v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
const kQuarterSize = (kArraySize) / (4);
codealchemist_log_type_post('-265561419310299347', ({v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v0 : ((typeof kQuarterSize) != ('undefined')) ? (kQuarterSize) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let array = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
function CopyWithin(){
return new Function('array.copyWithin(0, kQuarterSize * 2, kQuarterSize * 3);');
}
codealchemist_log_type_pre('6437367029348613380', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SmiCopyWithinSetup) != ('undefined')) ? (SmiCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('SmiCopyWithin', 1000, CopyWithin, SmiCopyWithinSetup);
codealchemist_log_type_post('6437367029348613380', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SmiCopyWithinSetup) != ('undefined')) ? (SmiCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('1010432115963324260', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof StringCopyWithinSetup) != ('undefined')) ? (StringCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('StringCopyWithin', 1000, CopyWithin, StringCopyWithinSetup);
codealchemist_log_type_post('1010432115963324260', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof StringCopyWithinSetup) != ('undefined')) ? (StringCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-3731662261393028422', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SparseSmiCopyWithinSetup) != ('undefined')) ? (SparseSmiCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('SparseSmiCopyWithin', 1000, CopyWithin, SparseSmiCopyWithinSetup);
codealchemist_log_type_post('-3731662261393028422', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SparseSmiCopyWithinSetup) != ('undefined')) ? (SparseSmiCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('8408155991800135859', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SparseStringCopyWithinSetup) != ('undefined')) ? (SparseStringCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('SparseStringCopyWithin', 1000, CopyWithin, SparseStringCopyWithinSetup);
codealchemist_log_type_post('8408155991800135859', ({v1 : ((typeof CopyWithin) != ('undefined')) ? (CopyWithin) : (undefined), v2 : ((typeof SparseStringCopyWithinSetup) != ('undefined')) ? (SparseStringCopyWithinSetup) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('5448045987694146277', ({v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
function SmiCopyWithinSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-6473222676205335753', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
for(let i = 0;(i) < (kArraySize);++i){
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6473222676205335753', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
}
codealchemist_log_type_post('5448045987694146277', ({}));
codealchemist_log_type_pre('3435054101162523704', ({v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
function StringCopyWithinSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-7827109320439410187', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
for(let i = 0;(i) < (kArraySize);++i){
codealchemist_log_type_pre('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = `Item no. ${i}`;
codealchemist_log_type_post('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-7827109320439410187', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
}
codealchemist_log_type_post('3435054101162523704', ({}));
codealchemist_log_type_pre('-8813086246005000042', ({v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
function SparseSmiCopyWithinSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-4830687857549115847', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
for(let i = 0;(i) < (kArraySize);(i) += 10){
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-4830687857549115847', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
}
codealchemist_log_type_post('-8813086246005000042', ({}));
codealchemist_log_type_pre('-822586658813088954', ({v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
function SparseStringCopyWithinSetup(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('-2050236503670928212', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
for(let i = 0;(i) < (kArraySize);(i) += 10){
codealchemist_log_type_pre('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = `Item no. ${i}`;
codealchemist_log_type_post('-9153245413659754939', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-2050236503670928212', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
}
codealchemist_log_type_post('-822586658813088954', ({}));
})();
