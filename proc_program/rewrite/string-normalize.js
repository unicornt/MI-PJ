load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4867117663881148080', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringNormalize', [], []);
codealchemist_log_type_post('4867117663881148080', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('1537233055091013606', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringNormalizeNFD', [], []);
codealchemist_log_type_post('1537233055091013606', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2992809250326834587', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringNormalizeNFKC', [], []);
codealchemist_log_type_post('-2992809250326834587', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-658442334512407784', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringNormalizeNFKD', [], []);
codealchemist_log_type_post('-658442334512407784', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7765538900528391867', ({}));
const shortString = "àèìòùáéíóúäëïöüÿâêîôûãõñ";
codealchemist_log_type_post('-7765538900528391867', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
codealchemist_log_type_pre('6085978697731630468', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function StringNormalize(){
codealchemist_log_type_pre('-6256899522256564628', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
var temp_6256899522256564628 = shortString.normalize();
codealchemist_log_type_post('-6256899522256564628', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
return temp_6256899522256564628;
}
codealchemist_log_type_post('6085978697731630468', ({}));
codealchemist_log_type_pre('4987971214010512337', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function StringNormalizeNFD(){
codealchemist_log_type_pre('-3118456523812146307', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
var temp_3118456523812146307 = shortString.normalize("NFD");
codealchemist_log_type_post('-3118456523812146307', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
return temp_3118456523812146307;
}
codealchemist_log_type_post('4987971214010512337', ({}));
codealchemist_log_type_pre('-2486759669449627097', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function StringNormalizeNFKC(){
codealchemist_log_type_pre('-5037493277146634860', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
var temp_5037493277146634860 = shortString.normalize("NFKC");
codealchemist_log_type_post('-5037493277146634860', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
return temp_5037493277146634860;
}
codealchemist_log_type_post('-2486759669449627097', ({}));
codealchemist_log_type_pre('4731269346130899759', ({v1 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
function StringNormalizeNFKD(){
codealchemist_log_type_pre('1390810066857520061', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
var temp_1390810066857520061 = shortString.normalize("NFKD");
codealchemist_log_type_post('1390810066857520061', ({v0 : ((typeof shortString) != ('undefined')) ? (shortString) : (undefined)}));
return temp_1390810066857520061;
}
codealchemist_log_type_post('4731269346130899759', ({}));
