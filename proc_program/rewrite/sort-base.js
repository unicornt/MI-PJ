load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-7053536292795572241', ({}));
const kArraySize = 4000;
codealchemist_log_type_post('-7053536292795572241', ({v0 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let template_array = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('-359701234031607984', ({v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
for(let i = 0;(i) < (kArraySize);++i){
codealchemist_log_type_pre('-2591951138041001237', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v0 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('-3543675436719145019', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v0 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(template_array[i]) = Math.floor((Math.random()) * (kArraySize));
codealchemist_log_type_post('-3543675436719145019', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v0 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_post('-2591951138041001237', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v0 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
}
codealchemist_log_type_post('-359701234031607984', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let array_to_sort = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
function AssertPackedSmiElements(){
assert((%HasFastPackedElements(array_to_sort)) && (%HasSmiElements(array_to_sort)), "Element kind is not PACKED_SMI_ELEMENTS");
}
function AssertPackedDoubleElements(){
assert((%HasFastPackedElements(array_to_sort)) && (%HasDoubleElements(array_to_sort)), "Element kind is not PACKED_DOUBLE_ELEMENTS");
}
function AssertPackedObjectElements(){
assert((%HasFastPackedElements(array_to_sort)) && (%HasObjectElements(array_to_sort)), "Element kind is not PACKED_ELEMENTS");
}
function AssertHoleySmiElements(){
assert((%HasHoleyElements(array_to_sort)) && (%HasSmiElements(array_to_sort)), "Element kind is not HOLEY_SMI_ELEMENTS");
}
function AssertHoleyDoubleElements(){
assert((%HasHoleyElements(array_to_sort)) && (%HasDoubleElements(array_to_sort)), "Element kind is not HOLEY_DOUBLE_ELEMENTS");
}
function AssertHoleyObjectElements(){
assert((%HasHoleyElements(array_to_sort)) && (%HasObjectElements(array_to_sort)), "Element kind is not HOLEY_ELEMENTS");
}
function AssertDictionaryElements(){
assert(%HasDictionaryElements(array_to_sort), "Element kind is not DICTIONARY_ELEMENTS");
}
codealchemist_log_type_pre('-5277101597950522923', ({v4 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreatePackedSmiArray(){
codealchemist_log_type_pre('-1888437439891697379', ({v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort) = Array.from(template_array);
codealchemist_log_type_post('-1888437439891697379', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
AssertPackedSmiElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertPackedSmiElements) != ('undefined')) ? (AssertPackedSmiElements) : (undefined)}));
}
codealchemist_log_type_post('-5277101597950522923', ({}));
codealchemist_log_type_pre('-108755702988777691', ({v6 : ((typeof AssertPackedDoubleElements) != ('undefined')) ? (AssertPackedDoubleElements) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreatePackedDoubleArray(){
codealchemist_log_type_pre('-7963259987317773079', ({v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort) = Array.from(template_array, ((x, _)=>(x) + (0.1)));
codealchemist_log_type_post('-7963259987317773079', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertPackedDoubleElements) != ('undefined')) ? (AssertPackedDoubleElements) : (undefined)}));
AssertPackedDoubleElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertPackedDoubleElements) != ('undefined')) ? (AssertPackedDoubleElements) : (undefined)}));
}
codealchemist_log_type_post('-108755702988777691', ({}));
codealchemist_log_type_pre('5711236333679147411', ({v6 : ((typeof AssertPackedObjectElements) != ('undefined')) ? (AssertPackedObjectElements) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreatePackedObjectArray(){
codealchemist_log_type_pre('8685778486903697151', ({v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort) = Array.from(template_array, ((x, _)=>`value ${x}`));
codealchemist_log_type_post('8685778486903697151', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertPackedObjectElements) != ('undefined')) ? (AssertPackedObjectElements) : (undefined)}));
AssertPackedObjectElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertPackedObjectElements) != ('undefined')) ? (AssertPackedObjectElements) : (undefined)}));
}
codealchemist_log_type_post('5711236333679147411', ({}));
codealchemist_log_type_pre('-4348886745640180986', ({v4 : ((typeof AssertHoleySmiElements) != ('undefined')) ? (AssertHoleySmiElements) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreateHoleySmiArray(){
codealchemist_log_type_pre('-1888437439891697379', ({v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort) = Array.from(template_array);
codealchemist_log_type_post('-1888437439891697379', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('770455673115916581', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
delete array_to_sort[0];
codealchemist_log_type_post('770455673115916581', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertHoleySmiElements) != ('undefined')) ? (AssertHoleySmiElements) : (undefined)}));
AssertHoleySmiElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertHoleySmiElements) != ('undefined')) ? (AssertHoleySmiElements) : (undefined)}));
}
codealchemist_log_type_post('-4348886745640180986', ({}));
codealchemist_log_type_pre('-8003075691866376662', ({v6 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v5 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreateHoleyDoubleArray(){
codealchemist_log_type_pre('2021185018755063168', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
(array_to_sort) = new Array(kArraySize);
codealchemist_log_type_post('2021185018755063168', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('-4988663516687388717', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
for(let i = 0;(i) < (kArraySize);++i){
codealchemist_log_type_pre('-7575311032238078722', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('-5913914604028819422', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort[i]) = (template_array[i]) + (0.1);
codealchemist_log_type_post('-5913914604028819422', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_post('-7575311032238078722', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
}
codealchemist_log_type_post('-4988663516687388717', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined)}));
AssertHoleyDoubleElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertHoleyDoubleElements) != ('undefined')) ? (AssertHoleyDoubleElements) : (undefined)}));
}
codealchemist_log_type_post('-8003075691866376662', ({}));
codealchemist_log_type_pre('7925575486928111951', ({v6 : ((typeof AssertHoleyObjectElements) != ('undefined')) ? (AssertHoleyObjectElements) : (undefined), v3 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v5 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreateHoleyObjectArray(){
codealchemist_log_type_pre('2021185018755063168', ({v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
(array_to_sort) = new Array(kArraySize);
codealchemist_log_type_post('2021185018755063168', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('6127175627598765107', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
for(let i = 0;(i) < (kArraySize);++i){
codealchemist_log_type_pre('-7668648965153183437', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('8732882089423158536', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort[i]) = `value ${template_array[i]}`;
codealchemist_log_type_post('8732882089423158536', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_post('-7668648965153183437', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
}
codealchemist_log_type_post('6127175627598765107', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertHoleyObjectElements) != ('undefined')) ? (AssertHoleyObjectElements) : (undefined)}));
AssertHoleyObjectElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertHoleyObjectElements) != ('undefined')) ? (AssertHoleyObjectElements) : (undefined)}));
}
codealchemist_log_type_post('7925575486928111951', ({}));
codealchemist_log_type_pre('726153548374891691', ({v7 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined), v5 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined), v3 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
function CreateDictionaryArray(){
codealchemist_log_type_pre('-1888437439891697379', ({v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
(array_to_sort) = Array.from(template_array);
codealchemist_log_type_post('-1888437439891697379', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof template_array) != ('undefined')) ? (template_array) : (undefined)}));
codealchemist_log_type_pre('8043845308493903298', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
Object.defineProperty(array_to_sort, (kArraySize) - (2), ({get : (()=>this.foo), set : ((v)=>(this.foo) = v)}));
codealchemist_log_type_post('8043845308493903298', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kArraySize) != ('undefined')) ? (kArraySize) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined)}));
AssertDictionaryElements();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof AssertDictionaryElements) != ('undefined')) ? (AssertDictionaryElements) : (undefined)}));
}
codealchemist_log_type_post('726153548374891691', ({}));
codealchemist_log_type_pre('-9193747936276537739', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
function Sort(){
codealchemist_log_type_pre('2844229641199099781', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
array_to_sort.sort();
codealchemist_log_type_post('2844229641199099781', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
}
codealchemist_log_type_post('-9193747936276537739', ({}));
codealchemist_log_type_pre('9040670000463858700', ({v3 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
function CreateSortFn(comparefns = []){
codealchemist_log_type_pre('-8515246337985110844', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof comparefns) != ('undefined')) ? (comparefns) : (undefined)}));
var temp_8515246337985110844 = (()=>{
codealchemist_log_type_pre('1579717742898234431', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof comparefns) != ('undefined')) ? (comparefns) : (undefined)}));
for(let cmpfn of comparefns){
codealchemist_log_type_pre('-638261645930444843', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmpfn) != ('undefined')) ? (cmpfn) : (undefined)}));
codealchemist_log_type_pre('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmpfn) != ('undefined')) ? (cmpfn) : (undefined)}));
array_to_sort.sort(cmpfn);
codealchemist_log_type_post('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmpfn) != ('undefined')) ? (cmpfn) : (undefined)}));
codealchemist_log_type_post('-638261645930444843', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmpfn) != ('undefined')) ? (cmpfn) : (undefined)}));
}
codealchemist_log_type_post('1579717742898234431', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof cmpfn) != ('undefined')) ? (cmpfn) : (undefined), v1 : ((typeof comparefns) != ('undefined')) ? (comparefns) : (undefined)}));
});
codealchemist_log_type_post('-8515246337985110844', ({}));
return temp_8515246337985110844;
}
codealchemist_log_type_post('9040670000463858700', ({}));
codealchemist_log_type_pre('-5312249779207533400', ({}));
function cmp_smaller(a, b){
codealchemist_log_type_pre('-128925708599934538', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if((a) < (b)){
codealchemist_log_type_pre('-6661830994842661680', ({}));
var temp_6661830994842661680 = - 1;
codealchemist_log_type_post('-6661830994842661680', ({}));
return temp_6661830994842661680;
}
codealchemist_log_type_post('-128925708599934538', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-8581250978859709672', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
if((b) < (a)){
codealchemist_log_type_pre('4926697974986480211', ({}));
var temp_4926697974986480211 = 1;
codealchemist_log_type_post('4926697974986480211', ({}));
return temp_4926697974986480211;
}
codealchemist_log_type_post('-8581250978859709672', ({v1 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof b) != ('undefined')) ? (b) : (undefined)}));
codealchemist_log_type_pre('-3155887822080160438', ({}));
var temp_3155887822080160438 = 0;
codealchemist_log_type_post('-3155887822080160438', ({}));
return temp_3155887822080160438;
}
codealchemist_log_type_post('-5312249779207533400', ({}));
codealchemist_log_type_pre('-354252404791340424', ({v3 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
function cmp_greater(a, b){
codealchemist_log_type_pre('-7428994654158484287', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
var temp_7428994654158484287 = cmp_smaller(b, a);
codealchemist_log_type_post('-7428994654158484287', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof b) != ('undefined')) ? (b) : (undefined), v0 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
return temp_7428994654158484287;
}
codealchemist_log_type_post('-354252404791340424', ({}));
codealchemist_log_type_pre('8720562409487186565', ({}));
let counter = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('1790668762253884162', ({v8 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
function createSortSuite(name, reference, run, setup, tearDown = (()=>{
})){
codealchemist_log_type_pre('6502940881744370907', ({v3 : ((typeof run) != ('undefined')) ? (run) : (undefined), v2 : ((typeof setup) != ('undefined')) ? (setup) : (undefined), v4 : ((typeof tearDown) != ('undefined')) ? (tearDown) : (undefined)}));
let run_fn = (()=>{
codealchemist_log_type_pre('-5972112927478329196', ({}));
(counter) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof counter) != ('undefined')) ? (counter) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof setup) != ('undefined')) ? (setup) : (undefined)}));
setup();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof setup) != ('undefined')) ? (setup) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof run) != ('undefined')) ? (run) : (undefined)}));
run();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof run) != ('undefined')) ? (run) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof tearDown) != ('undefined')) ? (tearDown) : (undefined)}));
tearDown();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof tearDown) != ('undefined')) ? (tearDown) : (undefined)}));
});
codealchemist_log_type_post('6502940881744370907', ({v0 : ((typeof run_fn) != ('undefined')) ? (run_fn) : (undefined)}));
codealchemist_log_type_pre('-3286252690297629709', ({v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof reference) != ('undefined')) ? (reference) : (undefined), v3 : ((typeof run_fn) != ('undefined')) ? (run_fn) : (undefined)}));
var temp_3286252690297629709 = createSuite(name, reference, run_fn);
codealchemist_log_type_post('-3286252690297629709', ({v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof reference) != ('undefined')) ? (reference) : (undefined), v3 : ((typeof run_fn) != ('undefined')) ? (run_fn) : (undefined)}));
return temp_3286252690297629709;
}
codealchemist_log_type_post('1790668762253884162', ({}));
