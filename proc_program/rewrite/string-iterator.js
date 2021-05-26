load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('7200595854330510123', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Spread_OneByteShort', [], []);
codealchemist_log_type_post('7200595854330510123', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var string;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
codealchemist_log_type_pre('-8254219997256370218', ({}));
function Spread_OneByteShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2424702184080874212', ({}));
(string) = "Alphabet-Soup";
codealchemist_log_type_post('-2424702184080874212', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-8254219997256370218', ({}));
codealchemist_log_type_pre('3149100322361021032', ({}));
function Spread_OneByteShort(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(result) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3149100322361021032', ({}));
function Spread_OneByteShortTearDown(){
codealchemist_log_type_pre('-5458055139676905911', ({}));
var expected = "A|l|p|h|a|b|e|t|-|S|o|u|p";
codealchemist_log_type_post('-5458055139676905911', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
assert(Array.isArray(result));
codealchemist_log_type_pre('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
assertEquals(expected, result.join("|"));
codealchemist_log_type_post('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_pre('1511636575948743219', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Spread_TwoByteShort', [], []);
codealchemist_log_type_post('1511636575948743219', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8937133418243043132', ({}));
function Spread_TwoByteShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1273409656864783844', ({}));
(string) = "\u5FCD\u8005\u306E\u653B\u6483";
codealchemist_log_type_post('1273409656864783844', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-8937133418243043132', ({}));
codealchemist_log_type_pre('3149100322361021032', ({}));
function Spread_TwoByteShort(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(result) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3149100322361021032', ({}));
function Spread_TwoByteShortTearDown(){
codealchemist_log_type_pre('7942276128195987637', ({}));
var expected = "\u5FCD|\u8005|\u306E|\u653B|\u6483";
codealchemist_log_type_post('7942276128195987637', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
assert(Array.isArray(result));
codealchemist_log_type_pre('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
assertEquals(expected, result.join("|"));
codealchemist_log_type_post('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_pre('-6809784376018000153', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Spread_WithSurrogatePairsShort', [], []);
codealchemist_log_type_post('-6809784376018000153', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3804048214849807257', ({}));
function Spread_WithSurrogatePairsShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2537324464195002227', ({}));
(string) = "\uD83C\uDF1F\u5FCD\u8005\u306E\u653B\u6483\uD83C\uDF1F";
codealchemist_log_type_post('-2537324464195002227', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-3804048214849807257', ({}));
codealchemist_log_type_pre('3149100322361021032', ({}));
function Spread_WithSurrogatePairsShort(){
codealchemist_log_type_pre('1816577267335569864', ({}));
(result) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('3149100322361021032', ({}));
function Spread_WithSurrogatePairsShortTearDown(){
codealchemist_log_type_pre('2022581039988884845', ({}));
var expected = "\uD83C\uDF1F|\u5FCD|\u8005|\u306E|\u653B|\u6483|\uD83C\uDF1F";
codealchemist_log_type_post('2022581039988884845', ({v0 : ((typeof expected) != ('undefined')) ? (expected) : (undefined)}));
assert(Array.isArray(result));
codealchemist_log_type_pre('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
assertEquals(expected, result.join("|"));
codealchemist_log_type_post('5955922507009473023', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v1 : ((typeof expected) != ('undefined')) ? (expected) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_pre('2076285799950871437', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_OneByteShort', [], []);
codealchemist_log_type_post('2076285799950871437', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8254219997256370218', ({}));
function ForOf_OneByteShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2424702184080874212', ({}));
(string) = "Alphabet-Soup";
codealchemist_log_type_post('-2424702184080874212', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-8254219997256370218', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_OneByteShort(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_OneByteShortTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
codealchemist_log_type_pre('-3644809091980723172', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_TwoByteShort', [], []);
codealchemist_log_type_post('-3644809091980723172', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8937133418243043132', ({}));
function ForOf_TwoByteShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('1273409656864783844', ({}));
(string) = "\u5FCD\u8005\u306E\u653B\u6483";
codealchemist_log_type_post('1273409656864783844', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-8937133418243043132', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_TwoByteShort(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_TwoByteShortTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
codealchemist_log_type_pre('7842568366937169177', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_WithSurrogatePairsShort', [], []);
codealchemist_log_type_post('7842568366937169177', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-3804048214849807257', ({}));
function ForOf_WithSurrogatePairsShortSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-2537324464195002227', ({}));
(string) = "\uD83C\uDF1F\u5FCD\u8005\u306E\u653B\u6483\uD83C\uDF1F";
codealchemist_log_type_post('-2537324464195002227', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-3804048214849807257', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_WithSurrogatePairsShort(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_WithSurrogatePairsShortTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
codealchemist_log_type_pre('-649323860397509248', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_OneByteLong', [], []);
codealchemist_log_type_post('-649323860397509248', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2037053662380072528', ({}));
function ForOf_OneByteLongSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-4986213138206848042', ({}));
(string) = "Alphabet-Soup|".repeat(128);
codealchemist_log_type_post('-4986213138206848042', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('2037053662380072528', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_OneByteLong(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_OneByteLongTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
codealchemist_log_type_pre('7225405223694480509', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_TwoByteLong', [], []);
codealchemist_log_type_post('7225405223694480509', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('199014256707119711', ({}));
function ForOf_TwoByteLongSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6728300427406047625', ({}));
(string) = "\u5FCD\u8005\u306E\u653B\u6483".repeat(128);
codealchemist_log_type_post('-6728300427406047625', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('199014256707119711', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_TwoByteLong(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_TwoByteLongTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
codealchemist_log_type_pre('3222989621114520586', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ForOf_WithSurrogatePairsLong', [], []);
codealchemist_log_type_post('3222989621114520586', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('705520714878835962', ({}));
function ForOf_WithSurrogatePairsLongSetup(){
codealchemist_log_type_pre('-8352238078044404304', ({}));
(result) = undefined;
codealchemist_log_type_post('-8352238078044404304', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('6672097798860657426', ({}));
(string) = "\uD83C\uDF1F\u5FCD\u8005\u306E\u653B\u6483\uD83C\uDF1F|".repeat(128);
codealchemist_log_type_post('6672097798860657426', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('705520714878835962', ({}));
codealchemist_log_type_pre('-5177435561847576981', ({v3 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_WithSurrogatePairsLong(){
codealchemist_log_type_pre('-4462442496304244118', ({}));
(result) = "";
codealchemist_log_type_post('-4462442496304244118', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6900159381454383123', ({v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
for(var c of string){
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += c;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof c) != ('undefined')) ? (c) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6900159381454383123', ({v0 : ((typeof c) != ('undefined')) ? (c) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('-5177435561847576981', ({}));
codealchemist_log_type_pre('7996536003559841475', ({v1 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined), v2 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function ForOf_WithSurrogatePairsLongTearDown(){
codealchemist_log_type_pre('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
assertEquals(string, result);
codealchemist_log_type_post('2456945352105600493', ({v0 : ((typeof assertEquals) != ('undefined')) ? (assertEquals) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
}
codealchemist_log_type_post('7996536003559841475', ({}));
