load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
load('sort-base.js');
codealchemist_log_type_pre('1929318241575163864', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
function SortAsc(){
codealchemist_log_type_pre('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
array_to_sort.sort(cmp_smaller);
codealchemist_log_type_post('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
}
codealchemist_log_type_post('1929318241575163864', ({}));
codealchemist_log_type_pre('-1651660957948016783', ({v5 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
function Random(length){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array_to_sort) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
codealchemist_log_type_pre('2118792618021585787', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('-6462641325856440419', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-3094215124008537873', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
array_to_sort.push(Math.floor((Math.random()) * (length)));
codealchemist_log_type_post('-3094215124008537873', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-6462641325856440419', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('2118792618021585787', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
AssertPackedSmiElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
}
codealchemist_log_type_post('-1651660957948016783', ({}));
codealchemist_log_type_pre('-8625446657359391823', ({v4 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
function Sorted(length){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array_to_sort) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
codealchemist_log_type_pre('3252595849238346677', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('4536863424409027421', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
array_to_sort.push(i);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('3252595849238346677', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
AssertPackedSmiElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
}
codealchemist_log_type_post('-8625446657359391823', ({}));
codealchemist_log_type_pre('-931879293228456743', ({v4 : ((typeof Random) != ('undefined')) ? (Random) : (undefined), v3 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof Sorted) != ('undefined')) ? (Sorted) : (undefined), v2 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
function CreateSortSuitesForLength(length){
codealchemist_log_type_pre('-3688432003121332502', ({v3 : ((typeof Random) != ('undefined')) ? (Random) : (undefined), v2 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
createSortSuite(('Random') + (length), 1000, SortAsc, (()=>Random(length)));
codealchemist_log_type_post('-3688432003121332502', ({v2 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-2383888270395476206', ({v2 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof Sorted) != ('undefined')) ? (Sorted) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
createSortSuite(('Sorted') + (length), 1000, SortAsc, (()=>Sorted(length)));
codealchemist_log_type_post('-2383888270395476206', ({v2 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('-931879293228456743', ({}));
codealchemist_log_type_pre('-298899520701256504', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
CreateSortSuitesForLength(10);
codealchemist_log_type_post('-298899520701256504', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
codealchemist_log_type_pre('-2012488231776933808', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
CreateSortSuitesForLength(100);
codealchemist_log_type_post('-2012488231776933808', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
codealchemist_log_type_pre('5936724900451096172', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
CreateSortSuitesForLength(1000);
codealchemist_log_type_post('5936724900451096172', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
codealchemist_log_type_pre('6519324508262188351', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
CreateSortSuitesForLength(10000);
codealchemist_log_type_post('6519324508262188351', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
codealchemist_log_type_pre('5983800381168271779', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
CreateSortSuitesForLength(100000);
codealchemist_log_type_post('5983800381168271779', ({v0 : ((typeof CreateSortSuitesForLength) != ('undefined')) ? (CreateSortSuitesForLength) : (undefined)}));
