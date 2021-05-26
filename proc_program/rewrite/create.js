load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-228623553587885779', ({}));
function shallowClone(object){
codealchemist_log_type_pre('-2699773896895153586', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var temp_2699773896895153586 = Object.create(object.__proto__, Object.getOwnPropertyDescriptors(object));
codealchemist_log_type_post('-2699773896895153586', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
return temp_2699773896895153586;
}
codealchemist_log_type_post('-228623553587885779', ({}));
codealchemist_log_type_pre('-612646236789990164', ({v2 : ((typeof shallowClone) != ('undefined')) ? (shallowClone) : (undefined)}));
function makeSlowCopy(object){
codealchemist_log_type_pre('-5624505709923688540', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof shallowClone) != ('undefined')) ? (shallowClone) : (undefined)}));
(object) = shallowClone(object);
codealchemist_log_type_post('-5624505709923688540', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof shallowClone) != ('undefined')) ? (shallowClone) : (undefined)}));
codealchemist_log_type_pre('3111538943136427222', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(object.__foo__) = 1;
codealchemist_log_type_post('3111538943136427222', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('4854959356697947957', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
delete object.__foo__;
codealchemist_log_type_post('4854959356697947957', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var temp_3444589576563574513 = object;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-612646236789990164', ({}));
codealchemist_log_type_pre('-6552356829411029732', ({}));
function convertToPropertyDescriptors(dict){
codealchemist_log_type_pre('2262051809191092222', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined)}));
for(var key in dict){
codealchemist_log_type_pre('-9112689506574544490', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var propertiesObject = dict[key];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof propertiesObject) != ('undefined')) ? (propertiesObject) : (undefined)}));
codealchemist_log_type_pre('2655849324972088741', ({v0 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof propertiesObject) != ('undefined')) ? (propertiesObject) : (undefined)}));
(dict[key]) = Object.getOwnPropertyDescriptors(propertiesObject);
codealchemist_log_type_post('2655849324972088741', ({v0 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof propertiesObject) != ('undefined')) ? (propertiesObject) : (undefined)}));
codealchemist_log_type_post('-9112689506574544490', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof propertiesObject) != ('undefined')) ? (propertiesObject) : (undefined)}));
}
codealchemist_log_type_post('2262051809191092222', ({v1 : ((typeof dict) != ('undefined')) ? (dict) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof propertiesObject) != ('undefined')) ? (propertiesObject) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof dict) != ('undefined')) ? (dict) : (undefined)}));
var temp_3444589576563574513 = dict;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof dict) != ('undefined')) ? (dict) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-6552356829411029732', ({}));
codealchemist_log_type_pre('-9198048984285996910', ({}));
var properties_5 = ({a : 1, b : 2, c : 3, d : 4, e : 5});
codealchemist_log_type_post('-9198048984285996910', ({v0 : ((typeof properties_5) != ('undefined')) ? (properties_5) : (undefined)}));
codealchemist_log_type_pre('-2540609435935787007', ({v1 : ((typeof convertToPropertyDescriptors) != ('undefined')) ? (convertToPropertyDescriptors) : (undefined), v3 : ((typeof makeSlowCopy) != ('undefined')) ? (makeSlowCopy) : (undefined), v2 : ((typeof properties_5) != ('undefined')) ? (properties_5) : (undefined)}));
var TEST_PROPERTIES = convertToPropertyDescriptors(({empty : ({}), array_5 : [], properties_5 : properties_5, properties_10 : ({a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10}), properties_dict : makeSlowCopy(properties_5)}));
codealchemist_log_type_post('-2540609435935787007', ({v0 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v1 : ((typeof convertToPropertyDescriptors) != ('undefined')) ? (convertToPropertyDescriptors) : (undefined), v3 : ((typeof makeSlowCopy) != ('undefined')) ? (makeSlowCopy) : (undefined), v2 : ((typeof properties_5) != ('undefined')) ? (properties_5) : (undefined)}));
codealchemist_log_type_pre('4756555894591918916', ({}));
var TEST_PROTOTYPES = ({null : null, empty : ({}), 'Object.prototype' : Object.prototype, 'Array.prototype' : Array.prototype});
codealchemist_log_type_post('4756555894591918916', ({v0 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined)}));
codealchemist_log_type_pre('-9058068576284233954', ({v3 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v2 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
var testFunction = (()=>{
codealchemist_log_type_pre('3524138541095889245', ({v2 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v1 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
var temp_3524138541095889245 = Object.create(prototype, properties);
codealchemist_log_type_post('3524138541095889245', ({v2 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v1 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
return temp_3524138541095889245;
});
codealchemist_log_type_post('-9058068576284233954', ({v0 : ((typeof testFunction) != ('undefined')) ? (testFunction) : (undefined)}));
function createTestFunction(prototype, properties){
codealchemist_log_type_pre('8483413347142640811', ({}));
var random_comment = (("\n// random comment") + (Math.random())) + ("\n");
codealchemist_log_type_post('8483413347142640811', ({v0 : ((typeof random_comment) != ('undefined')) ? (random_comment) : (undefined)}));
return eval((random_comment) + (testFunction.toString()));
}
codealchemist_log_type_pre('-2873575392672305138', ({}));
var benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('-2363754936200203412', ({v8 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v4 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined)}));
for(var proto_name in TEST_PROTOTYPES){
codealchemist_log_type_pre('-1624677174268412534', ({v8 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v4 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v2 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v2 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined)}));
var prototype = TEST_PROTOTYPES[proto_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v2 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v0 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
codealchemist_log_type_pre('5284235407381217664', ({v6 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v5 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v7 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v4 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v8 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
for(var prop_name in TEST_PROPERTIES){
codealchemist_log_type_pre('8247267097939452073', ({v6 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v5 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v7 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v4 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v8 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined)}));
var properties = TEST_PROPERTIES[prop_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined)}));
codealchemist_log_type_pre('-5024015488346407256', ({v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v1 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined)}));
var name = ((('Create proto:') + (proto_name)) + (" properties:")) + (prop_name);
codealchemist_log_type_post('-5024015488346407256', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v1 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined)}));
codealchemist_log_type_pre('3805963403793820007', ({v1 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v3 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v5 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v4 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
benchmarks.push(new Benchmark(name, false, false, 0, createTestFunction(prototype, properties)));
codealchemist_log_type_post('3805963403793820007', ({v1 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v3 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v5 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v4 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
codealchemist_log_type_post('8247267097939452073', ({v6 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v5 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v7 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v4 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v8 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
}
codealchemist_log_type_post('5284235407381217664', ({v6 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v5 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v7 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v3 : ((typeof name) != ('undefined')) ? (name) : (undefined), v0 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v2 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v4 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v8 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
codealchemist_log_type_post('-1624677174268412534', ({v8 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v4 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v6 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v5 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v2 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v0 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
}
codealchemist_log_type_post('-2363754936200203412', ({v8 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v4 : ((typeof TEST_PROPERTIES) != ('undefined')) ? (TEST_PROPERTIES) : (undefined), v1 : ((typeof TEST_PROTOTYPES) != ('undefined')) ? (TEST_PROTOTYPES) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof createTestFunction) != ('undefined')) ? (createTestFunction) : (undefined), v6 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof prop_name) != ('undefined')) ? (prop_name) : (undefined), v5 : ((typeof properties) != ('undefined')) ? (properties) : (undefined), v0 : ((typeof proto_name) != ('undefined')) ? (proto_name) : (undefined), v2 : ((typeof prototype) != ('undefined')) ? (prototype) : (undefined)}));
codealchemist_log_type_pre('7667561051882590805', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
new BenchmarkSuite('Create', [], benchmarks);
codealchemist_log_type_post('7667561051882590805', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v1 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
