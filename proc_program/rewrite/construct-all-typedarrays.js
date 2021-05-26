load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4884598537839341463', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ConstructAllTypedArrays', [], []);
codealchemist_log_type_post('-4884598537839341463', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var typedArrayConstructors = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined)}));
codealchemist_log_type_pre('3012900904282351109', ({}));
const length = 32;
codealchemist_log_type_post('3012900904282351109', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
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
codealchemist_log_type_pre('4443406387880676458', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
for(var i = 0;(i) < (length);i++){
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
codealchemist_log_type_post('4443406387880676458', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-7082890613476900979', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
function constructor(){
codealchemist_log_type_pre('10285464036623261', ({v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
for(constructor of typedArrayConstructors){
codealchemist_log_type_pre('-5828277736990942776', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
new constructor(uint8_array);
codealchemist_log_type_post('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
codealchemist_log_type_pre('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined)}));
new constructor(int32_array);
codealchemist_log_type_post('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined)}));
codealchemist_log_type_pre('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined)}));
new constructor(float32_array);
codealchemist_log_type_post('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined)}));
codealchemist_log_type_pre('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined)}));
new constructor(float64_array);
codealchemist_log_type_post('-6212492512177705928', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v1 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined)}));
codealchemist_log_type_post('-5828277736990942776', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v3 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v4 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v2 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
}
codealchemist_log_type_post('10285464036623261', ({v0 : ((typeof constructor) != ('undefined')) ? (constructor) : (undefined), v4 : ((typeof float32_array) != ('undefined')) ? (float32_array) : (undefined), v5 : ((typeof float64_array) != ('undefined')) ? (float64_array) : (undefined), v3 : ((typeof int32_array) != ('undefined')) ? (int32_array) : (undefined), v1 : ((typeof typedArrayConstructors) != ('undefined')) ? (typedArrayConstructors) : (undefined), v2 : ((typeof uint8_array) != ('undefined')) ? (uint8_array) : (undefined)}));
}
codealchemist_log_type_post('-7082890613476900979', ({}));
