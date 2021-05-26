load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
function ObjectWithKeys(count, keyOffset = 0, keyGen){
codealchemist_log_type_pre('-6806727766934437804', ({}));
var body = "";
codealchemist_log_type_post('-6806727766934437804', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined)}));
codealchemist_log_type_pre('-5555075802938941674', ({v5 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v4 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
for(var i = 0;(i) < (count);i++){
codealchemist_log_type_pre('8718204932399569728', ({v4 : ((typeof body) != ('undefined')) ? (body) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('4482997694164724070', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var key = keyGen((i) + (keyOffset));
codealchemist_log_type_post('4482997694164724070', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('6741976216098763149', ({v1 : ((typeof body) != ('undefined')) ? (body) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
if((typeof key) === ("string")){
codealchemist_log_type_pre('6798143492295950360', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('5517842991534925701', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
(body) += `this.${key} = 0\n`;
codealchemist_log_type_post('5517842991534925701', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_post('6798143492295950360', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
}else {
codealchemist_log_type_pre('4980015000860022441', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('9054940645208073290', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
(body) += `this[${key}] = 0\n`;
codealchemist_log_type_post('9054940645208073290', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_post('4980015000860022441', ({v0 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
}
codealchemist_log_type_post('6741976216098763149', ({v1 : ((typeof body) != ('undefined')) ? (body) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_post('8718204932399569728', ({v4 : ((typeof body) != ('undefined')) ? (body) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
}
codealchemist_log_type_post('-5555075802938941674', ({v5 : ((typeof body) != ('undefined')) ? (body) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v4 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var f = new Function(body);
codealchemist_log_type_pre('-7139541451157179783', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
var temp_7139541451157179783 = new f();
codealchemist_log_type_post('-7139541451157179783', ({v0 : ((typeof f) != ('undefined')) ? (f) : (undefined)}));
return temp_7139541451157179783;
}
codealchemist_log_type_pre('-7131112407627386803', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
function ObjectWithProperties(count, keyOffset){
codealchemist_log_type_pre('1899525185867642836', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var temp_1899525185867642836 = ObjectWithKeys(count, keyOffset, ((key)=>("key") + (key)));
codealchemist_log_type_post('1899525185867642836', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
return temp_1899525185867642836;
}
codealchemist_log_type_post('-7131112407627386803', ({}));
codealchemist_log_type_pre('65059495957321916', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
function ObjectWithElements(count, keyOffset){
codealchemist_log_type_pre('-4154623837468431206', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var temp_4154623837468431206 = ObjectWithKeys(count, keyOffset, ((key)=>key));
codealchemist_log_type_post('-4154623837468431206', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
return temp_4154623837468431206;
}
codealchemist_log_type_post('65059495957321916', ({}));
codealchemist_log_type_pre('7624649737527016803', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
function ObjectWithMixedKeys(count, keyOffset){
codealchemist_log_type_pre('-6930792714525941326', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var temp_6930792714525941326 = ObjectWithKeys(count, keyOffset, ((key)=>{
codealchemist_log_type_pre('7713176974965132664', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
if(((key) % (2)) == (0)){
codealchemist_log_type_pre('-1643244706734613828', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var temp_1643244706734613828 = (key) / (2);
codealchemist_log_type_post('-1643244706734613828', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
return temp_1643244706734613828;
}
codealchemist_log_type_post('7713176974965132664', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('-2475726969387260332', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var temp_2475726969387260332 = ("key") + (((key) - (1)) / (2));
codealchemist_log_type_post('-2475726969387260332', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
return temp_2475726969387260332;
}));
codealchemist_log_type_post('-6930792714525941326', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
return temp_6930792714525941326;
}
codealchemist_log_type_post('7624649737527016803', ({}));
codealchemist_log_type_pre('-8574575308671434430', ({v5 : ((typeof ObjectWithProperties) != ('undefined')) ? (ObjectWithProperties) : (undefined)}));
function ObjectWithProtoKeys(depth, keys, cacheable, keyGen = ObjectWithProperties){
codealchemist_log_type_pre('3449575001829646660', ({v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
var o = keyGen(keys);
codealchemist_log_type_post('3449575001829646660', ({v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var current = o;
codealchemist_log_type_post('1771060243785805582', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('8887107388399914408', ({}));
var keyOffset = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('-1693295301841488808', ({v4 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof depth) != ('undefined')) ? (depth) : (undefined), v5 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
for(var i = 0;(i) < (depth);i++){
codealchemist_log_type_pre('2778889319318382376', ({v2 : ((typeof current) != ('undefined')) ? (current) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(keyOffset) += keys;
codealchemist_log_type_post('383496466578906810', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-1869053967263909965', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(current.__proto__) = keyGen(keys, keyOffset);
codealchemist_log_type_post('-1869053967263909965', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-4327718353421506787', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
(current) = current.__proto__;
codealchemist_log_type_post('-4327718353421506787', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
codealchemist_log_type_post('2778889319318382376', ({v2 : ((typeof current) != ('undefined')) ? (current) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-1693295301841488808', ({v4 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof depth) != ('undefined')) ? (depth) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v5 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-6435141459577948867', ({v0 : ((typeof cacheable) != ('undefined')) ? (cacheable) : (undefined), v1 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
if((cacheable) === (false)){
codealchemist_log_type_pre('6111910780473037909', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
codealchemist_log_type_pre('-7784701588563338808', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
(current.__proto__) = new Proxy(({}), ({}));
codealchemist_log_type_post('-7784701588563338808', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
codealchemist_log_type_post('6111910780473037909', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
}
codealchemist_log_type_post('-6435141459577948867', ({v0 : ((typeof cacheable) != ('undefined')) ? (cacheable) : (undefined), v1 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var temp_3444589576563574513 = o;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-8574575308671434430', ({v5 : ((typeof ObjectWithProperties) != ('undefined')) ? (ObjectWithProperties) : (undefined)}));
codealchemist_log_type_pre('8775867151724751415', ({}));
function HoleyIntArray(size){
codealchemist_log_type_pre('9143866055438896542', ({v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
var array = new Array(size);
codealchemist_log_type_post('9143866055438896542', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('4033214255775276340', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
for(var i = 0;(i) < (size);(i) += 3){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('4033214255775276340', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
var temp_3444589576563574513 = array;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('8775867151724751415', ({}));
codealchemist_log_type_pre('-5775831745727113458', ({}));
function IntArray(size){
codealchemist_log_type_pre('9143866055438896542', ({v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
var array = new Array(size);
codealchemist_log_type_post('9143866055438896542', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('8384789889565077130', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
for(var i = 0;(i) < (size);i++){
codealchemist_log_type_pre('301682230413706004', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
(array[i]) = i;
codealchemist_log_type_post('-758005282920777301', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('301682230413706004', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('8384789889565077130', ({v2 : ((typeof array) != ('undefined')) ? (array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
var temp_3444589576563574513 = array;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof array) != ('undefined')) ? (array) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-5775831745727113458', ({}));
codealchemist_log_type_pre('-887029652885799252', ({}));
function MakeDictionaryMode(obj){
codealchemist_log_type_pre('-7169196827788104075', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj.foo) = 0;
codealchemist_log_type_post('-7169196827788104075', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('5324917243583570575', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj.bar) = 0;
codealchemist_log_type_post('5324917243583570575', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-5312429598085211625', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
delete obj.foo;
codealchemist_log_type_post('-5312429598085211625', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('4180916199162733903', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
delete obj.bar;
codealchemist_log_type_post('4180916199162733903', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-8597720511609638757', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj[1e9]) = 0;
codealchemist_log_type_post('-8597720511609638757', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
var temp_3444589576563574513 = obj;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-887029652885799252', ({}));
codealchemist_log_type_pre('4410767066787743636', ({}));
function Internalize(s){
codealchemist_log_type_pre('6958424921375202045', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
var temp_6958424921375202045 = Object.keys(({[s] : 0}))[0];
codealchemist_log_type_post('6958424921375202045', ({v1 : ((typeof s) != ('undefined')) ? (s) : (undefined)}));
return temp_6958424921375202045;
}
codealchemist_log_type_post('4410767066787743636', ({}));
codealchemist_log_type_pre('-7842982583224431058', ({}));
function Deinternalize(s){
codealchemist_log_type_pre('430981908923350392', ({}));
var temp_430981908923350392 = [].join("");
codealchemist_log_type_post('430981908923350392', ({}));
return temp_430981908923350392;
}
codealchemist_log_type_post('-7842982583224431058', ({}));
codealchemist_log_type_pre('-4215338132627628667', ({}));
const QUERY_INTERNALIZED_PROP = "INTERN-prop";
codealchemist_log_type_post('-4215338132627628667', ({v0 : ((typeof QUERY_INTERNALIZED_PROP) != ('undefined')) ? (QUERY_INTERNALIZED_PROP) : (undefined)}));
codealchemist_log_type_pre('-5996827930316444299', ({}));
const QUERY_DEINTERNALIZED_PROP = "DEINTERN-prop";
codealchemist_log_type_post('-5996827930316444299', ({v0 : ((typeof QUERY_DEINTERNALIZED_PROP) != ('undefined')) ? (QUERY_DEINTERNALIZED_PROP) : (undefined)}));
codealchemist_log_type_pre('1539170248406178667', ({}));
const QUERY_NON_EXISTING_INTERNALIZED_PROP = "NE-INTERN-prop";
codealchemist_log_type_post('1539170248406178667', ({v0 : ((typeof QUERY_NON_EXISTING_INTERNALIZED_PROP) != ('undefined')) ? (QUERY_NON_EXISTING_INTERNALIZED_PROP) : (undefined)}));
codealchemist_log_type_pre('-5219217262186121736', ({}));
const QUERY_NON_EXISTING_DEINTERNALIZED_PROP = "NE-DEINTERN-prop";
codealchemist_log_type_post('-5219217262186121736', ({v0 : ((typeof QUERY_NON_EXISTING_DEINTERNALIZED_PROP) != ('undefined')) ? (QUERY_NON_EXISTING_DEINTERNALIZED_PROP) : (undefined)}));
codealchemist_log_type_pre('-8568819660082333597', ({}));
const QUERY_ELEMENT = "el";
codealchemist_log_type_post('-8568819660082333597', ({v0 : ((typeof QUERY_ELEMENT) != ('undefined')) ? (QUERY_ELEMENT) : (undefined)}));
codealchemist_log_type_pre('-6433294807490484427', ({}));
const QUERY_ELEMENT_AS_STRING = "el-str";
codealchemist_log_type_post('-6433294807490484427', ({v0 : ((typeof QUERY_ELEMENT_AS_STRING) != ('undefined')) ? (QUERY_ELEMENT_AS_STRING) : (undefined)}));
codealchemist_log_type_pre('4498001826527938165', ({}));
const QUERY_NON_EXISTING_ELEMENT = "NE-el";
codealchemist_log_type_post('4498001826527938165', ({v0 : ((typeof QUERY_NON_EXISTING_ELEMENT) != ('undefined')) ? (QUERY_NON_EXISTING_ELEMENT) : (undefined)}));
codealchemist_log_type_pre('643322699479423635', ({}));
const OBJ_MODE_FAST = "fast";
codealchemist_log_type_post('643322699479423635', ({v0 : ((typeof OBJ_MODE_FAST) != ('undefined')) ? (OBJ_MODE_FAST) : (undefined)}));
codealchemist_log_type_pre('-3252351415623674091', ({}));
const OBJ_MODE_SLOW = "slow";
codealchemist_log_type_post('-3252351415623674091', ({v0 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var TestQueries = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined)}));
codealchemist_log_type_pre('-5977464602555164890', ({}));
const QUERIES_PER_OBJECT_NUMBER = 10;
codealchemist_log_type_post('-5977464602555164890', ({v0 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined)}));
codealchemist_log_type_pre('8819028587364848037', ({}));
function FilterKeys(keys, count){
codealchemist_log_type_pre('-8774002088373048709', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
var len = keys.length;
codealchemist_log_type_post('-8774002088373048709', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
codealchemist_log_type_pre('3483977336834449484', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
if((len) < (count)){
codealchemist_log_type_pre('-1806139242685400390', ({v1 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
var temp_1806139242685400390 = new Error(("Keys array is too short: ") + (len));
codealchemist_log_type_post('-1806139242685400390', ({v1 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
throw temp_1806139242685400390;
}
codealchemist_log_type_post('3483977336834449484', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
codealchemist_log_type_pre('-6002846902600382386', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof len) != ('undefined')) ? (len) : (undefined)}));
var step = (len) / (count);
codealchemist_log_type_post('-6002846902600382386', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof len) != ('undefined')) ? (len) : (undefined), v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
codealchemist_log_type_pre('1779494629076479164', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
if((step) == (0)){
codealchemist_log_type_pre('-2057548767824472635', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
var temp_2057548767824472635 = new Error(("Bad count specified: ") + (count));
codealchemist_log_type_post('-2057548767824472635', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
throw temp_2057548767824472635;
}
codealchemist_log_type_post('1779494629076479164', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
codealchemist_log_type_pre('2158181065148168794', ({v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof step) != ('undefined')) ? (step) : (undefined)}));
var temp_2158181065148168794 = keys.filter(((element, index)=>((index) % (step)) == (0)));
codealchemist_log_type_post('2158181065148168794', ({v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
return temp_2158181065148168794;
}
codealchemist_log_type_post('8819028587364848037', ({}));
codealchemist_log_type_pre('-8386830876952632435', ({v8 : ((typeof FilterKeys) != ('undefined')) ? (FilterKeys) : (undefined), v9 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined)}));
function MakeKeyQueries(keys, query_kind){
codealchemist_log_type_pre('-5259411265278531298', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
var properties = keys.filter(((element)=>isNaN(Number(element))));
codealchemist_log_type_post('-5259411265278531298', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined)}));
codealchemist_log_type_pre('7879465367018584286', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
var elements = keys.filter(((element)=>! isNaN(Number(element))));
codealchemist_log_type_post('7879465367018584286', ({v0 : ((typeof elements) != ('undefined')) ? (elements) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('7096513891870520206', ({v1 : ((typeof FilterKeys) != ('undefined')) ? (FilterKeys) : (undefined), v2 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined), v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined)}));
(properties) = FilterKeys(properties, QUERIES_PER_OBJECT_NUMBER);
codealchemist_log_type_post('7096513891870520206', ({v1 : ((typeof FilterKeys) != ('undefined')) ? (FilterKeys) : (undefined), v2 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined), v0 : ((typeof properties) != ('undefined')) ? (properties) : (undefined)}));
codealchemist_log_type_pre('7096513891870520206', ({v1 : ((typeof FilterKeys) != ('undefined')) ? (FilterKeys) : (undefined), v2 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined), v0 : ((typeof elements) != ('undefined')) ? (elements) : (undefined)}));
(elements) = FilterKeys(elements, QUERIES_PER_OBJECT_NUMBER);
codealchemist_log_type_post('7096513891870520206', ({v1 : ((typeof FilterKeys) != ('undefined')) ? (FilterKeys) : (undefined), v2 : ((typeof QUERIES_PER_OBJECT_NUMBER) != ('undefined')) ? (QUERIES_PER_OBJECT_NUMBER) : (undefined), v0 : ((typeof elements) != ('undefined')) ? (elements) : (undefined)}));
codealchemist_log_type_pre('6628186707968373841', ({v0 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined)}));
switch(query_kind){
}
codealchemist_log_type_post('6628186707968373841', ({v0 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined)}));
}
codealchemist_log_type_post('-8386830876952632435', ({}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var TestData = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined)}));
codealchemist_log_type_pre('1952782978932966773', ({v10 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v9 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined), v8 : ((typeof ObjectWithMixedKeys) != ('undefined')) ? (ObjectWithMixedKeys) : (undefined), v7 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v11 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined)}));
[].forEach(((cachable)=>{
codealchemist_log_type_pre('-6665864266549902937', ({v10 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v9 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined), v8 : ((typeof ObjectWithMixedKeys) != ('undefined')) ? (ObjectWithMixedKeys) : (undefined), v7 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v11 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v2 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined)}));
[].forEach(((obj_mode)=>{
codealchemist_log_type_pre('3351219756773457220', ({v1 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined)}));
var proto_mode = (cachable) ? ("") : ("-with-slow-proto");
codealchemist_log_type_post('3351219756773457220', ({v1 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined), v0 : ((typeof proto_mode) != ('undefined')) ? (proto_mode) : (undefined)}));
codealchemist_log_type_pre('4013223902516970415', ({v1 : ((typeof obj_mode) != ('undefined')) ? (obj_mode) : (undefined), v2 : ((typeof proto_mode) != ('undefined')) ? (proto_mode) : (undefined)}));
var name = `${obj_mode}-obj${proto_mode}`;
codealchemist_log_type_post('4013223902516970415', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof obj_mode) != ('undefined')) ? (obj_mode) : (undefined), v2 : ((typeof proto_mode) != ('undefined')) ? (proto_mode) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var objects = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
codealchemist_log_type_pre('-6826908189014605833', ({v7 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v6 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined), v4 : ((typeof ObjectWithMixedKeys) != ('undefined')) ? (ObjectWithMixedKeys) : (undefined), v2 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v3 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined), v5 : ((typeof obj_mode) != ('undefined')) ? (obj_mode) : (undefined), v8 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
[].forEach(((prop_count)=>{
codealchemist_log_type_pre('7228961226329022911', ({v4 : ((typeof ObjectWithMixedKeys) != ('undefined')) ? (ObjectWithMixedKeys) : (undefined), v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v3 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined), v2 : ((typeof prop_count) != ('undefined')) ? (prop_count) : (undefined)}));
(obj) = ObjectWithProtoKeys(5, (prop_count) * (2), cachable, ObjectWithMixedKeys);
codealchemist_log_type_post('7228961226329022911', ({v4 : ((typeof ObjectWithMixedKeys) != ('undefined')) ? (ObjectWithMixedKeys) : (undefined), v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v3 : ((typeof cachable) != ('undefined')) ? (cachable) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v2 : ((typeof prop_count) != ('undefined')) ? (prop_count) : (undefined)}));
codealchemist_log_type_pre('2616030103207704349', ({v3 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v1 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof obj_mode) != ('undefined')) ? (obj_mode) : (undefined)}));
if((obj_mode) == (OBJ_MODE_SLOW)){
codealchemist_log_type_pre('-5865361528260481861', ({v1 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_pre('-5624505709923688540', ({v1 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
(obj) = MakeDictionaryMode(obj);
codealchemist_log_type_post('-5624505709923688540', ({v1 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
codealchemist_log_type_post('-5865361528260481861', ({v1 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v0 : ((typeof obj) != ('undefined')) ? (obj) : (undefined)}));
}
codealchemist_log_type_post('2616030103207704349', ({v3 : ((typeof MakeDictionaryMode) != ('undefined')) ? (MakeDictionaryMode) : (undefined), v1 : ((typeof OBJ_MODE_SLOW) != ('undefined')) ? (OBJ_MODE_SLOW) : (undefined), v2 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof obj_mode) != ('undefined')) ? (obj_mode) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
objects.push(obj);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof obj) != ('undefined')) ? (obj) : (undefined), v0 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
}));
codealchemist_log_type_post('-6826908189014605833', ({}));
codealchemist_log_type_pre('3532556390648142686', ({v0 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
TestData.push(({name, objects}));
codealchemist_log_type_post('3532556390648142686', ({v0 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof objects) != ('undefined')) ? (objects) : (undefined)}));
}));
codealchemist_log_type_post('-6665864266549902937', ({}));
}));
codealchemist_log_type_post('1952782978932966773', ({}));
function CreateTestFunction(template, object, keys){
codealchemist_log_type_pre('-5123338726829138343', ({v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof template) != ('undefined')) ? (template) : (undefined)}));
var text = ((("// random comment ") + (Math.random())) + ("\n")) + (template(object, keys));
codealchemist_log_type_post('-5123338726829138343', ({v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof template) != ('undefined')) ? (template) : (undefined), v0 : ((typeof text) != ('undefined')) ? (text) : (undefined)}));
var func = new Function("object", "keys", text);
codealchemist_log_type_pre('-5882193755817133236', ({v0 : ((typeof func) != ('undefined')) ? (func) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var temp_5882193755817133236 = (()=>func(object, keys));
codealchemist_log_type_post('-5882193755817133236', ({}));
return temp_5882193755817133236;
}
codealchemist_log_type_pre('8552793640296725417', ({}));
function CombineTestFunctions(tests){
codealchemist_log_type_pre('6990526597876826050', ({v1 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
var temp_6990526597876826050 = (()=>{
codealchemist_log_type_pre('2273779451743753583', ({v1 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
for(var i = 0;(i) < (tests.length);i++){
codealchemist_log_type_pre('5767646251045700155', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('-2713440658906655826', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
tests[i]();
codealchemist_log_type_post('-2713440658906655826', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_post('5767646251045700155', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
}
codealchemist_log_type_post('2273779451743753583', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
});
codealchemist_log_type_post('6990526597876826050', ({}));
return temp_6990526597876826050;
}
codealchemist_log_type_post('8552793640296725417', ({}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var TestFunctions = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var Benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined)}));
codealchemist_log_type_pre('-9175060166157039516', ({v19 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v21 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v20 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v17 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v15 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v13 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v8 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v4 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined)}));
for(var test_function_desc of TestFunctions){
codealchemist_log_type_pre('-888450504654750368', ({v18 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v20 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v19 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v16 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v14 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v12 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v7 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v3 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
codealchemist_log_type_pre('-8305005085233333048', ({v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
var test_function_name = test_function_desc.name;
codealchemist_log_type_post('-8305005085233333048', ({v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v0 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('-3741422264343563298', ({v18 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v20 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v19 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v16 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v14 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v12 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v6 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined), v11 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v4 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
for(var query_kind of TestQueries){
codealchemist_log_type_pre('-1684856604675911023', ({v17 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v19 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v18 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v15 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v13 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v11 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v5 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v3 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v10 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('4071684482931461116', ({v2 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v1 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
var suit_name = ((test_function_name) + ("--")) + (query_kind);
codealchemist_log_type_post('4071684482931461116', ({v2 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v0 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v1 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('2681180397977502730', ({v15 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v13 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v11 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v8 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v1 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v16 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v3 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v7 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
for(var test_data of TestData){
codealchemist_log_type_pre('-1598834506285875002', ({v14 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v12 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v10 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v7 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v15 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v8 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v1 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v2 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v6 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
codealchemist_log_type_pre('-6567343172951472988', ({v1 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v2 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined)}));
var name = ((suit_name) + ("--")) + (test_data.name);
codealchemist_log_type_post('-6567343172951472988', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v2 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var tests = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('4043056659096547370', ({v7 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v4 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v5 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v1 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v3 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v8 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
for(var object of test_data.objects){
codealchemist_log_type_pre('-5399295878069551731', ({v6 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v3 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v4 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v7 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('-4802100333907051050', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
var keys = test_function_desc.keys(object);
codealchemist_log_type_post('-4802100333907051050', ({v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
codealchemist_log_type_pre('7096513891870520206', ({v1 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined)}));
(keys) = MakeKeyQueries(keys, query_kind);
codealchemist_log_type_post('7096513891870520206', ({v1 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined)}));
codealchemist_log_type_pre('-5716087488733627960', ({v1 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
var test = CreateTestFunction(test_function_desc.template, object, keys);
codealchemist_log_type_post('-5716087488733627960', ({v1 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v4 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
tests.push(test);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_post('-5399295878069551731', ({v6 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v3 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v4 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v5 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v7 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
}
codealchemist_log_type_post('4043056659096547370', ({v7 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v4 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v5 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v6 : ((typeof test) != ('undefined')) ? (test) : (undefined), v1 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v3 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v8 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('3449575001829646660', ({v1 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v2 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
var run_function = CombineTestFunctions(tests);
codealchemist_log_type_post('3449575001829646660', ({v1 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v0 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v2 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('4159068374267435761', ({v1 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined)}));
var benchmark = new Benchmark(name, false, false, 0, run_function);
codealchemist_log_type_post('4159068374267435761', ({v1 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v0 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v3 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
benchmarks.push(benchmark);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_post('-1598834506285875002', ({v14 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v12 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v10 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v7 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v13 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v15 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined), v8 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v11 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v1 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v9 : ((typeof test) != ('undefined')) ? (test) : (undefined), v2 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v6 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v3 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
}
codealchemist_log_type_post('2681180397977502730', ({v15 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v13 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v11 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v8 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v1 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v14 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v16 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v6 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof name) != ('undefined')) ? (name) : (undefined), v5 : ((typeof object) != ('undefined')) ? (object) : (undefined), v9 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v12 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v3 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v10 : ((typeof test) != ('undefined')) ? (test) : (undefined), v0 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v7 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v4 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_pre('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined)}));
Benchmarks.push(new BenchmarkSuite(suit_name, [], benchmarks));
codealchemist_log_type_post('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined)}));
codealchemist_log_type_post('-1684856604675911023', ({v17 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v19 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v18 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v15 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v13 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v11 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v5 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v16 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v9 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v6 : ((typeof name) != ('undefined')) ? (name) : (undefined), v8 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v14 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v1 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v12 : ((typeof test) != ('undefined')) ? (test) : (undefined), v4 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v10 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v7 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
}
codealchemist_log_type_post('-3741422264343563298', ({v18 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v20 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v19 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v16 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v14 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v12 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v6 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined), v17 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v2 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v10 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v7 : ((typeof name) != ('undefined')) ? (name) : (undefined), v9 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v15 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v3 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v13 : ((typeof test) != ('undefined')) ? (test) : (undefined), v5 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v11 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v4 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v8 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
codealchemist_log_type_post('-888450504654750368', ({v18 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v20 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v19 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v16 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v14 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v12 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v7 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v3 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined), v17 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v4 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v11 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v8 : ((typeof name) != ('undefined')) ? (name) : (undefined), v10 : ((typeof object) != ('undefined')) ? (object) : (undefined), v2 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v15 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v5 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v13 : ((typeof test) != ('undefined')) ? (test) : (undefined), v6 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v1 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v0 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v9 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
}
codealchemist_log_type_post('-9175060166157039516', ({v19 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v21 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v20 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v17 : ((typeof CombineTestFunctions) != ('undefined')) ? (CombineTestFunctions) : (undefined), v15 : ((typeof CreateTestFunction) != ('undefined')) ? (CreateTestFunction) : (undefined), v13 : ((typeof MakeKeyQueries) != ('undefined')) ? (MakeKeyQueries) : (undefined), v8 : ((typeof TestData) != ('undefined')) ? (TestData) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v4 : ((typeof TestQueries) != ('undefined')) ? (TestQueries) : (undefined), v18 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v5 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v12 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v9 : ((typeof name) != ('undefined')) ? (name) : (undefined), v11 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof query_kind) != ('undefined')) ? (query_kind) : (undefined), v16 : ((typeof run_function) != ('undefined')) ? (run_function) : (undefined), v6 : ((typeof suit_name) != ('undefined')) ? (suit_name) : (undefined), v14 : ((typeof test) != ('undefined')) ? (test) : (undefined), v7 : ((typeof test_data) != ('undefined')) ? (test_data) : (undefined), v0 : ((typeof test_function_desc) != ('undefined')) ? (test_function_desc) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v10 : ((typeof tests) != ('undefined')) ? (tests) : (undefined)}));
