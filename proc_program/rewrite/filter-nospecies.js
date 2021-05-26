load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-1570063083217209043', ({}));
const SIZE = 1024;
codealchemist_log_type_post('-1570063083217209043', ({v0 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let input;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let output;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
codealchemist_log_type_pre('114666830616829277', ({v4 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined)}));
function CreateSetup(TAConstructor){
codealchemist_log_type_pre('-2116968613168760857', ({v2 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v5 : ((typeof TAConstructor) != ('undefined')) ? (TAConstructor) : (undefined)}));
var temp_2116968613168760857 = (()=>{
codealchemist_log_type_pre('2931873015542248448', ({v2 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v5 : ((typeof TAConstructor) != ('undefined')) ? (TAConstructor) : (undefined)}));
const values = Array.from(({length : SIZE})).map(((_, i)=>((TAConstructor) === (BigUint64Array)) ? (BigInt(i)) : (i)));
codealchemist_log_type_post('2931873015542248448', ({v2 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v0 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
codealchemist_log_type_pre('-485940338078892142', ({v1 : ((typeof TAConstructor) != ('undefined')) ? (TAConstructor) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
(input) = new TAConstructor(values);
codealchemist_log_type_post('-485940338078892142', ({v1 : ((typeof TAConstructor) != ('undefined')) ? (TAConstructor) : (undefined), v0 : ((typeof input) != ('undefined')) ? (input) : (undefined), v2 : ((typeof values) != ('undefined')) ? (values) : (undefined)}));
});
codealchemist_log_type_post('-2116968613168760857', ({}));
return temp_2116968613168760857;
}
codealchemist_log_type_post('114666830616829277', ({}));
function CreateRun(){
return new Function(`
    output = input.filter((el, i) => el < SIZE && (i % 2) === 0);
  `);
}
codealchemist_log_type_pre('-2033073565127590618', ({v4 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v1 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
function isOutputInvalid(){
codealchemist_log_type_pre('-7036659817926626635', ({v1 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
if((output.length) !== ((input.length) / (2))){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('-7036659817926626635', ({v1 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
codealchemist_log_type_pre('3985688283647885385', ({v1 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v3 : ((typeof input) != ('undefined')) ? (input) : (undefined), v2 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
for(let i = 0;(i) < ((SIZE) / (2));i++){
codealchemist_log_type_pre('697110000223776697', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
codealchemist_log_type_pre('4156153917268358198', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
if((output[i]) !== (input[(i) * (2)])){
codealchemist_log_type_pre('8827806384603333399', ({}));
var temp_8827806384603333399 = true;
codealchemist_log_type_post('8827806384603333399', ({}));
return temp_8827806384603333399;
}
codealchemist_log_type_post('4156153917268358198', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
codealchemist_log_type_post('697110000223776697', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof input) != ('undefined')) ? (input) : (undefined), v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
}
codealchemist_log_type_post('3985688283647885385', ({v1 : ((typeof SIZE) != ('undefined')) ? (SIZE) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof input) != ('undefined')) ? (input) : (undefined), v2 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
}
codealchemist_log_type_post('-2033073565127590618', ({}));
codealchemist_log_type_pre('-2637574887219363701', ({v1 : ((typeof isOutputInvalid) != ('undefined')) ? (isOutputInvalid) : (undefined), v3 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
function TearDown(){
codealchemist_log_type_pre('4572143505225331725', ({v0 : ((typeof isOutputInvalid) != ('undefined')) ? (isOutputInvalid) : (undefined), v2 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
if(isOutputInvalid()){
codealchemist_log_type_pre('4926675657386847241', ({v1 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
var temp_4926675657386847241 = new TypeError(`Unexpected result!\n${output}`);
codealchemist_log_type_post('4926675657386847241', ({v1 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
throw temp_4926675657386847241;
}
codealchemist_log_type_post('4572143505225331725', ({v0 : ((typeof isOutputInvalid) != ('undefined')) ? (isOutputInvalid) : (undefined), v2 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
codealchemist_log_type_pre('2157368412597649204', ({}));
(input) = void 0;
codealchemist_log_type_post('2157368412597649204', ({v0 : ((typeof input) != ('undefined')) ? (input) : (undefined)}));
codealchemist_log_type_pre('2157368412597649204', ({}));
(output) = void 0;
codealchemist_log_type_post('2157368412597649204', ({v0 : ((typeof output) != ('undefined')) ? (output) : (undefined)}));
}
codealchemist_log_type_post('-2637574887219363701', ({}));
codealchemist_log_type_pre('-8000641951531037310', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Uint8Array', 1000, CreateRun(), CreateSetup(Uint8Array), TearDown);
codealchemist_log_type_post('-8000641951531037310', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('1729925059789315876', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Uint16Array', 1000, CreateRun(), CreateSetup(Uint16Array), TearDown);
codealchemist_log_type_post('1729925059789315876', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-2438131936564929785', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Uint32Array', 1000, CreateRun(), CreateSetup(Uint32Array), TearDown);
codealchemist_log_type_post('-2438131936564929785', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-7354563170158944150', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Float32Array', 1000, CreateRun(), CreateSetup(Float32Array), TearDown);
codealchemist_log_type_post('-7354563170158944150', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('-3418457681853793252', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('Float64Array', 1000, CreateRun(), CreateSetup(Float64Array), TearDown);
codealchemist_log_type_post('-3418457681853793252', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
codealchemist_log_type_pre('151865458325763685', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('BigUint64Array', 1000, CreateRun(), CreateSetup(BigUint64Array), TearDown);
codealchemist_log_type_post('151865458325763685', ({v1 : ((typeof CreateRun) != ('undefined')) ? (CreateRun) : (undefined), v2 : ((typeof CreateSetup) != ('undefined')) ? (CreateSetup) : (undefined), v4 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
