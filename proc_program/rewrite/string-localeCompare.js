load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-7121064317856920826', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringLocaleCompare', [], []);
codealchemist_log_type_post('-7121064317856920826', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4353040613083356399', ({}));
function StringLocaleCompare(){
codealchemist_log_type_pre('-2873575392672305138', ({}));
var array = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-7319498930610135811', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < (array.length);++j){
codealchemist_log_type_pre('-8108713852449164491', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-1298841723531325281', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += "fox".localeCompare(array[j]);
codealchemist_log_type_post('-1298841723531325281', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8108713852449164491', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-7319498930610135811', ({v1 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('4353040613083356399', ({}));
