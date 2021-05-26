load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('4723126585577215026', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCharCodeAtConstant', [], []);
codealchemist_log_type_post('4723126585577215026', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-5141597408634729506', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCharCodeAtNonConstant', [], []);
codealchemist_log_type_post('-5141597408634729506', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-8715935937907904738', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCharCodeAtConstantInbounds', [], []);
codealchemist_log_type_post('-8715935937907904738', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('517185508097970660', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCharCodeAtNonConstantInbounds', [], []);
codealchemist_log_type_post('517185508097970660', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-7633737641711601789', ({}));
const string = "qweruiplkjhgfdsazxccvbnm";
codealchemist_log_type_post('-7633737641711601789', ({v0 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const indices = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof indices) != ('undefined')) ? (indices) : (undefined)}));
codealchemist_log_type_pre('7838083884550891431', ({}));
const indicesInbounds = [];
codealchemist_log_type_post('7838083884550891431', ({v0 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined)}));
codealchemist_log_type_pre('6221966675697334683', ({v3 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v4 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function StringCharCodeAtConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4859086442981836149', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < ((indices.length) - (1));++j){
codealchemist_log_type_pre('2038162556216937633', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-1387061490348311356', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += string.charCodeAt((indices[j]) | (0));
codealchemist_log_type_post('-1387061490348311356', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('2038162556216937633', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-4859086442981836149', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('6221966675697334683', ({}));
codealchemist_log_type_pre('21692920401135318', ({v3 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v4 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function StringCharCodeAtNonConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('5742408574420395140', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < ((indices.length) - (1));++j){
codealchemist_log_type_pre('-8710495765714664983', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-7725523365427044031', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += string.charCodeAt(indices[j]);
codealchemist_log_type_post('-7725523365427044031', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8710495765714664983', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('5742408574420395140', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('21692920401135318', ({}));
codealchemist_log_type_pre('6221966675697334683', ({v3 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v4 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function StringCharCodeAtConstantInbounds(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4859086442981836149', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < ((indicesInbounds.length) - (1));++j){
codealchemist_log_type_pre('2038162556216937633', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-1387061490348311356', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += string.charCodeAt((indicesInbounds[j]) | (0));
codealchemist_log_type_post('-1387061490348311356', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('2038162556216937633', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('-4859086442981836149', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('6221966675697334683', ({}));
codealchemist_log_type_pre('21692920401135318', ({v3 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v4 : ((typeof string) != ('undefined')) ? (string) : (undefined)}));
function StringCharCodeAtNonConstantInbounds(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('5742408574420395140', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var j = 0;(j) < ((indicesInbounds.length) - (1));++j){
codealchemist_log_type_pre('-8710495765714664983', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-7725523365427044031', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += string.charCodeAt(indicesInbounds[j]);
codealchemist_log_type_post('-7725523365427044031', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8710495765714664983', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v1 : ((typeof string) != ('undefined')) ? (string) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('5742408574420395140', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v3 : ((typeof string) != ('undefined')) ? (string) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('21692920401135318', ({}));
codealchemist_log_type_pre('2694941471940872222', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAtConstant', [], []);
codealchemist_log_type_post('2694941471940872222', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('1364058683029318222', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAtNonConstant', [], []);
codealchemist_log_type_post('1364058683029318222', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4189130590442430597', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAtConstantInbounds', [], []);
codealchemist_log_type_post('4189130590442430597', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('1909819055679007845', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('StringCodePointAtNonConstantInbounds', [], []);
codealchemist_log_type_post('1909819055679007845', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-6458958459981741293', ({}));
const unicode_string = "qweräϠ�𝌆krefdäϠ�𝌆ccäϠ�𝌆";
codealchemist_log_type_post('-6458958459981741293', ({v0 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-9203927244566021260', ({v3 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v4 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
function StringCodePointAtConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3429561741358810155', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
for(var j = 0;(j) < ((indices.length) - (1));++j){
codealchemist_log_type_pre('2747134053224472736', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-5467545319304406750', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
(sum) += unicode_string.codePointAt((indices[j]) | (0));
codealchemist_log_type_post('-5467545319304406750', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_post('2747134053224472736', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
}
codealchemist_log_type_post('-3429561741358810155', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-9203927244566021260', ({}));
codealchemist_log_type_pre('-46592442337074901', ({v3 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v4 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
function StringCodePointAtNonConstant(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4102624655173644319', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
for(var j = 0;(j) < ((indices.length) - (1));++j){
codealchemist_log_type_pre('-5011451898722720494', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('2454484732438296875', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
(sum) += unicode_string.codePointAt(indices[j]);
codealchemist_log_type_post('2454484732438296875', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_post('-5011451898722720494', ({v2 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
}
codealchemist_log_type_post('-4102624655173644319', ({v1 : ((typeof indices) != ('undefined')) ? (indices) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-46592442337074901', ({}));
codealchemist_log_type_pre('-9203927244566021260', ({v3 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v4 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
function StringCodePointAtConstantInbounds(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-3429561741358810155', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
for(var j = 0;(j) < ((indicesInbounds.length) - (1));++j){
codealchemist_log_type_pre('2747134053224472736', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-5467545319304406750', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
(sum) += unicode_string.codePointAt((indicesInbounds[j]) | (0));
codealchemist_log_type_post('-5467545319304406750', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_post('2747134053224472736', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
}
codealchemist_log_type_post('-3429561741358810155', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-9203927244566021260', ({}));
codealchemist_log_type_pre('-46592442337074901', ({v3 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v4 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
function StringCodePointAtNonConstantInbounds(){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4102624655173644319', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
for(var j = 0;(j) < ((indicesInbounds.length) - (1));++j){
codealchemist_log_type_pre('-5011451898722720494', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('2454484732438296875', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
(sum) += unicode_string.codePointAt(indicesInbounds[j]);
codealchemist_log_type_post('2454484732438296875', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_post('-5011451898722720494', ({v2 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v3 : ((typeof j) != ('undefined')) ? (j) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
}
codealchemist_log_type_post('-4102624655173644319', ({v1 : ((typeof indicesInbounds) != ('undefined')) ? (indicesInbounds) : (undefined), v0 : ((typeof j) != ('undefined')) ? (j) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v3 : ((typeof unicode_string) != ('undefined')) ? (unicode_string) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
var temp_3444589576563574513 = sum;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-46592442337074901', ({}));
