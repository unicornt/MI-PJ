load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('5208568158710125745', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('SetFromDifferentType', [], []);
codealchemist_log_type_post('5208568158710125745', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3460089664249595766', ({}));
const length = 16;
codealchemist_log_type_post('-3460089664249595766', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const dest_arrays = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof dest_arrays) != ('undefined')) ? (dest_arrays) : (undefined)}));
codealchemist_log_type_pre('4785489690017178459', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let uint8_array = new Uint8Array(length);
codealchemist_log_type_post('4785489690017178459', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined), v0 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-3534690023100696672', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let int32_array = new Int32Array(length);
codealchemist_log_type_post('-3534690023100696672', ({v0 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-6435251739679083024', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let float32_array = new Float32Array(length);
codealchemist_log_type_post('-6435251739679083024', ({v0 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('9059160800852558549', ({v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
let float64_array = new Float64Array(length);
codealchemist_log_type_post('9059160800852558549', ({v0 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-6769720304722927504', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
for(let i = 0;(i) < (length);i++){
codealchemist_log_type_pre('-9200639656935154945', ({v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
(uint8_array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined)}));
(int32_array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(float32_array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(float64_array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-9200639656935154945', ({v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
}
codealchemist_log_type_post('-6769720304722927504', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('7043807007844600457', ({v2 : ((typeof dest_arrays) != ('undefined')) ? (dest_arrays) : (undefined), v5 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v6 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v4 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v3 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
function SetFromDifferentType(){
codealchemist_log_type_pre('8361800496944240116', ({v1 : ((typeof dest_arrays) != ('undefined')) ? (dest_arrays) : (undefined), v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
for(typed_dest of dest_arrays){
codealchemist_log_type_pre('5390996127868898225', ({v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-7304970736717944545', ({v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
typed_dest.set(uint8_array);
codealchemist_log_type_post('-7304970736717944545', ({v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-7304970736717944545', ({v1 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
typed_dest.set(int32_array);
codealchemist_log_type_post('-7304970736717944545', ({v1 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
codealchemist_log_type_pre('-7304970736717944545', ({v1 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
typed_dest.set(float32_array);
codealchemist_log_type_post('-7304970736717944545', ({v1 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
codealchemist_log_type_pre('-7304970736717944545', ({v1 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
typed_dest.set(float64_array);
codealchemist_log_type_post('-7304970736717944545', ({v1 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined)}));
codealchemist_log_type_post('5390996127868898225', ({v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
}
codealchemist_log_type_post('8361800496944240116', ({v1 : ((typeof dest_arrays) != ('undefined')) ? (dest_arrays) : (undefined), v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v0 : ((typeof typed_dest) != ('undefined')) ? (typed_dest) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
}
codealchemist_log_type_post('7043807007844600457', ({}));
