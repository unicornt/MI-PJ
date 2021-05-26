load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('206994855953223711', ({}));
function tag(strings, ...values){
codealchemist_log_type_pre('8720562409487186565', ({}));
let a = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
codealchemist_log_type_pre('-2675113611612141398', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
for(let i = 0;(i) < (strings.length);++i){
codealchemist_log_type_pre('-7517598068431689259', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(a) += strings[i].length;
codealchemist_log_type_post('-7517598068431689259', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
}
codealchemist_log_type_post('-2675113611612141398', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
var temp_3444589576563574513 = a;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('206994855953223711', ({}));
codealchemist_log_type_pre('4901792131242104138', ({v4 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
function driver(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-528998367692253498', ({v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
for(let i = 0;(i) < (n);++i){
codealchemist_log_type_pre('-7423619749319286258', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('-1810873213832180598', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
(result) += tag `${"Hello"} ${"cruel"} ${"slow"} ${"world"}!\n`;
codealchemist_log_type_post('-1810873213832180598', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('-4139619439757554212', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
(result) += tag `${"Why"} ${"is"} ${"this"} ${"so"} ${"damn"} ${"slow"}?!\n`;
codealchemist_log_type_post('-4139619439757554212', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_post('-7423619749319286258', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
}
codealchemist_log_type_post('-528998367692253498', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('4901792131242104138', ({}));
codealchemist_log_type_pre('6848302637669060528', ({v1 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
function TaggedTemplate(){
codealchemist_log_type_pre('-8399036745262485480', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
driver(1e4);
codealchemist_log_type_post('-8399036745262485480', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
}
codealchemist_log_type_post('6848302637669060528', ({}));
codealchemist_log_type_pre('-993708076935335840', ({v1 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
function TaggedTemplateWarmUp(){
codealchemist_log_type_pre('-13791236498514422', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
driver(1e1);
codealchemist_log_type_post('-13791236498514422', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
codealchemist_log_type_pre('33725927228587217', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
driver(1e2);
codealchemist_log_type_post('33725927228587217', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
codealchemist_log_type_pre('-5751692830476515912', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
driver(1e3);
codealchemist_log_type_post('-5751692830476515912', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
}
codealchemist_log_type_post('-993708076935335840', ({}));
codealchemist_log_type_pre('5191603025376048264', ({v1 : ((typeof TaggedTemplate) != ('undefined')) ? (TaggedTemplate) : (undefined), v2 : ((typeof TaggedTemplateWarmUp) != ('undefined')) ? (TaggedTemplateWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('TaggedTemplate', 10, TaggedTemplate, TaggedTemplateWarmUp);
codealchemist_log_type_post('5191603025376048264', ({v1 : ((typeof TaggedTemplate) != ('undefined')) ? (TaggedTemplate) : (undefined), v2 : ((typeof TaggedTemplateWarmUp) != ('undefined')) ? (TaggedTemplateWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-4436383511306134128', ({v1 : ((typeof _taggedTemplateLiteralLoose) != ('undefined')) ? (_taggedTemplateLiteralLoose) : (undefined)}));
var _templateObject = _taggedTemplateLiteralLoose([], []), _templateObject2 = _taggedTemplateLiteralLoose([], []);
codealchemist_log_type_post('-4436383511306134128', ({v1 : ((typeof _taggedTemplateLiteralLoose) != ('undefined')) ? (_taggedTemplateLiteralLoose) : (undefined), v0 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v2 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined)}));
codealchemist_log_type_pre('-3397006599417255559', ({}));
function _taggedTemplateLiteralLoose(strings, raw){
codealchemist_log_type_pre('-4321313330516507192', ({v1 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v0 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
(strings.raw) = raw;
codealchemist_log_type_post('-4321313330516507192', ({v1 : ((typeof raw) != ('undefined')) ? (raw) : (undefined), v0 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
var temp_3444589576563574513 = strings;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof strings) != ('undefined')) ? (strings) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-3397006599417255559', ({}));
codealchemist_log_type_pre('722771176216941254', ({v5 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v6 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v4 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
function driverLoose(n){
codealchemist_log_type_pre('8887107388399914408', ({}));
var result = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('5825373684609586553', ({v4 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v5 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
for(var i = 0;(i) < (n);++i){
codealchemist_log_type_pre('-7459497723969019461', ({v2 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v3 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('9189549923249140366', ({v2 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
(result) += tag(_templateObject, "Hello", "cruel", "slow", "world");
codealchemist_log_type_post('9189549923249140366', ({v2 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('-5519377591607887695', ({v2 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
(result) += tag(_templateObject2, "Why", "is", "this", "so", "damn", "slow");
codealchemist_log_type_post('-5519377591607887695', ({v2 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_post('-7459497723969019461', ({v2 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v3 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
}
codealchemist_log_type_post('5825373684609586553', ({v4 : ((typeof _templateObject) != ('undefined')) ? (_templateObject) : (undefined), v5 : ((typeof _templateObject2) != ('undefined')) ? (_templateObject2) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined), v3 : ((typeof tag) != ('undefined')) ? (tag) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('722771176216941254', ({}));
codealchemist_log_type_pre('6848302637669060528', ({v1 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
function TaggedTemplateLoose(){
codealchemist_log_type_pre('-8399036745262485480', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
driverLoose(1e4);
codealchemist_log_type_post('-8399036745262485480', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
}
codealchemist_log_type_post('6848302637669060528', ({}));
codealchemist_log_type_pre('-993708076935335840', ({v1 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
function TaggedTemplateLooseWarmUp(){
codealchemist_log_type_pre('-13791236498514422', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
driverLoose(1e1);
codealchemist_log_type_post('-13791236498514422', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
codealchemist_log_type_pre('33725927228587217', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
driverLoose(1e2);
codealchemist_log_type_post('33725927228587217', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
codealchemist_log_type_pre('-5751692830476515912', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
driverLoose(1e3);
codealchemist_log_type_post('-5751692830476515912', ({v0 : ((typeof driverLoose) != ('undefined')) ? (driverLoose) : (undefined)}));
}
codealchemist_log_type_post('-993708076935335840', ({}));
codealchemist_log_type_pre('-4453711235162307153', ({v1 : ((typeof TaggedTemplateLoose) != ('undefined')) ? (TaggedTemplateLoose) : (undefined), v2 : ((typeof TaggedTemplateLooseWarmUp) != ('undefined')) ? (TaggedTemplateLooseWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('TaggedTemplateLoose', 10, TaggedTemplateLoose, TaggedTemplateLooseWarmUp);
codealchemist_log_type_post('-4453711235162307153', ({v1 : ((typeof TaggedTemplateLoose) != ('undefined')) ? (TaggedTemplateLoose) : (undefined), v2 : ((typeof TaggedTemplateLooseWarmUp) != ('undefined')) ? (TaggedTemplateLooseWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
