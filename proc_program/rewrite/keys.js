load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4536681208225237579', ({}));
function ObjectWithKeys(count, keyOffset, keyGen){
codealchemist_log_type_pre('2778769340841783442', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
if((keyOffset) === (undefined)){
codealchemist_log_type_pre('-5972112927478329196', ({}));
(keyOffset) = 0;
codealchemist_log_type_post('-5972112927478329196', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
}
codealchemist_log_type_post('2778769340841783442', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('-6949587025782207654', ({v0 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined)}));
if((keyGen) === (undefined)){
codealchemist_log_type_pre('1720219961584167740', ({}));
(keyGen) = ((i)=>{
codealchemist_log_type_pre('-9209520612567162784', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var temp_9209520612567162784 = ("key") + (i);
codealchemist_log_type_post('-9209520612567162784', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
return temp_9209520612567162784;
});
codealchemist_log_type_post('1720219961584167740', ({v0 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined)}));
}
codealchemist_log_type_post('-6949587025782207654', ({v0 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined)}));
codealchemist_log_type_pre('-2256249072298133429', ({}));
var o = ({});
codealchemist_log_type_post('-2256249072298133429', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-4060588388706882941', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v4 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v5 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
for(var i = 0;(i) < (count);i++){
codealchemist_log_type_pre('-7208113364365377452', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v4 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('4482997694164724070', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var key = keyGen((i) + (keyOffset));
codealchemist_log_type_post('4482997694164724070', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('-664875084344244464', ({v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
(o[key]) = "value";
codealchemist_log_type_post('-664875084344244464', ({v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_post('-7208113364365377452', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v4 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
}
codealchemist_log_type_post('-4060588388706882941', ({v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v3 : ((typeof keyGen) != ('undefined')) ? (keyGen) : (undefined), v4 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v5 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var temp_3444589576563574513 = o;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-4536681208225237579', ({}));
codealchemist_log_type_pre('-8770037342202567873', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
function ObjectWithMixedKeys(count, keyOffset){
codealchemist_log_type_pre('-4343662064499935455', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
var temp_4343662064499935455 = ObjectWithKeys(count, keyOffset, ((key)=>{
codealchemist_log_type_pre('-6226598746102798041', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
if(((key) % (2)) == (0)){
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var temp_3444589576563574513 = key;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-6226598746102798041', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
codealchemist_log_type_pre('-9209520612567162784', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
var temp_9209520612567162784 = ("key") + (key);
codealchemist_log_type_post('-9209520612567162784', ({v0 : ((typeof key) != ('undefined')) ? (key) : (undefined)}));
return temp_9209520612567162784;
}));
codealchemist_log_type_post('-4343662064499935455', ({v0 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
return temp_4343662064499935455;
}
codealchemist_log_type_post('-8770037342202567873', ({}));
codealchemist_log_type_pre('7508167806716477980', ({v5 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
function ObjectWithProtoKeys(depth, keys, cacheable){
codealchemist_log_type_pre('3449575001829646660', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
var o = ObjectWithKeys(keys);
codealchemist_log_type_post('3449575001829646660', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
var current = o;
codealchemist_log_type_post('1771060243785805582', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('8887107388399914408', ({}));
var keyOffset = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined)}));
codealchemist_log_type_pre('-1693295301841488808', ({v5 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v4 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof depth) != ('undefined')) ? (depth) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
for(var i = 0;(i) < (depth);i++){
codealchemist_log_type_pre('2778889319318382376', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v2 : ((typeof current) != ('undefined')) ? (current) : (undefined), v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(keyOffset) += keys;
codealchemist_log_type_post('383496466578906810', ({v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-1869053967263909965', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(current.__proto__) = ObjectWithKeys(keys, keyOffset);
codealchemist_log_type_post('-1869053967263909965', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v0 : ((typeof current) != ('undefined')) ? (current) : (undefined), v3 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-4327718353421506787', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
(current) = current.__proto__;
codealchemist_log_type_post('-4327718353421506787', ({v0 : ((typeof current) != ('undefined')) ? (current) : (undefined)}));
codealchemist_log_type_post('2778889319318382376', ({v3 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v2 : ((typeof current) != ('undefined')) ? (current) : (undefined), v0 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-1693295301841488808', ({v5 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v4 : ((typeof current) != ('undefined')) ? (current) : (undefined), v1 : ((typeof depth) != ('undefined')) ? (depth) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof keyOffset) != ('undefined')) ? (keyOffset) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
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
codealchemist_log_type_post('7508167806716477980', ({}));
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
codealchemist_log_type_pre('-2256249072298133429', ({}));
var object_empty = ({});
codealchemist_log_type_post('-2256249072298133429', ({v0 : ((typeof object_empty) != ('undefined')) ? (object_empty) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var array_empty = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof array_empty) != ('undefined')) ? (array_empty) : (undefined)}));
codealchemist_log_type_pre('-2039220562330392035', ({v1 : ((typeof IntArray) != ('undefined')) ? (IntArray) : (undefined)}));
var array_int_50 = IntArray(50);
codealchemist_log_type_post('-2039220562330392035', ({v1 : ((typeof IntArray) != ('undefined')) ? (IntArray) : (undefined), v0 : ((typeof array_int_50) != ('undefined')) ? (array_int_50) : (undefined)}));
codealchemist_log_type_pre('-2039220562330392035', ({v1 : ((typeof IntArray) != ('undefined')) ? (IntArray) : (undefined)}));
var array_int_50_proto_elements = IntArray(50);
codealchemist_log_type_post('-2039220562330392035', ({v1 : ((typeof IntArray) != ('undefined')) ? (IntArray) : (undefined), v0 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined)}));
codealchemist_log_type_pre('1871108734279008539', ({v0 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined)}));
(array_int_50_proto_elements.__proto__) = [];
codealchemist_log_type_post('1871108734279008539', ({v0 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined)}));
codealchemist_log_type_pre('-2039220562330392035', ({v1 : ((typeof HoleyIntArray) != ('undefined')) ? (HoleyIntArray) : (undefined)}));
var array_int_holey_50 = HoleyIntArray(50);
codealchemist_log_type_post('-2039220562330392035', ({v1 : ((typeof HoleyIntArray) != ('undefined')) ? (HoleyIntArray) : (undefined), v0 : ((typeof array_int_holey_50) != ('undefined')) ? (array_int_holey_50) : (undefined)}));
codealchemist_log_type_pre('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
var empty_proto_5_10 = ObjectWithKeys(5);
codealchemist_log_type_post('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v0 : ((typeof empty_proto_5_10) != ('undefined')) ? (empty_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('4198776954256811529', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof empty_proto_5_10) != ('undefined')) ? (empty_proto_5_10) : (undefined)}));
(empty_proto_5_10.__proto__) = ObjectWithProtoKeys(10, 0);
codealchemist_log_type_post('4198776954256811529', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof empty_proto_5_10) != ('undefined')) ? (empty_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
var empty_proto_5_5_slow = ObjectWithKeys(5);
codealchemist_log_type_post('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v0 : ((typeof empty_proto_5_5_slow) != ('undefined')) ? (empty_proto_5_5_slow) : (undefined)}));
codealchemist_log_type_pre('-8030664400390250628', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof empty_proto_5_5_slow) != ('undefined')) ? (empty_proto_5_5_slow) : (undefined)}));
(empty_proto_5_5_slow.__proto__) = ObjectWithProtoKeys(5, 0, false);
codealchemist_log_type_post('-8030664400390250628', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof empty_proto_5_5_slow) != ('undefined')) ? (empty_proto_5_5_slow) : (undefined)}));
codealchemist_log_type_pre('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined)}));
var object_elements_proto_5_10 = ObjectWithKeys(5);
codealchemist_log_type_post('-4110035206357958748', ({v1 : ((typeof ObjectWithKeys) != ('undefined')) ? (ObjectWithKeys) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('4198776954256811529', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
(object_elements_proto_5_10.__proto__) = ObjectWithProtoKeys(10, 0);
codealchemist_log_type_post('4198776954256811529', ({v1 : ((typeof ObjectWithProtoKeys) != ('undefined')) ? (ObjectWithProtoKeys) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('5456000985953717394', ({v1 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
for(var i = 0;(i) < (5);i++){
codealchemist_log_type_pre('-1851503340618636726', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('3162497124155624647', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
(object_elements_proto_5_10.__proto__.__proto__.__proto__[("proto") + (i)]) = true;
codealchemist_log_type_post('3162497124155624647', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
codealchemist_log_type_post('-1851503340618636726', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
}
codealchemist_log_type_post('5456000985953717394', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined)}));
codealchemist_log_type_pre('-8015942825809844752', ({v2 : ((typeof array_empty) != ('undefined')) ? (array_empty) : (undefined), v3 : ((typeof array_int_50) != ('undefined')) ? (array_int_50) : (undefined), v5 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined), v4 : ((typeof array_int_holey_50) != ('undefined')) ? (array_int_holey_50) : (undefined), v6 : ((typeof empty_proto_5_10) != ('undefined')) ? (empty_proto_5_10) : (undefined), v7 : ((typeof empty_proto_5_5_slow) != ('undefined')) ? (empty_proto_5_5_slow) : (undefined), v8 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined), v1 : ((typeof object_empty) != ('undefined')) ? (object_empty) : (undefined)}));
var TestObjects = ({object_empty : object_empty, array_empty : array_empty, array_int_50 : array_int_50, array_int_holey_50 : array_int_holey_50, array_int_50_proto_elements : array_int_50_proto_elements, empty_proto_5_10 : empty_proto_5_10, empty_proto_5_5_slow : empty_proto_5_5_slow, object_elements_proto_5_10 : object_elements_proto_5_10});
codealchemist_log_type_post('-8015942825809844752', ({v0 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v2 : ((typeof array_empty) != ('undefined')) ? (array_empty) : (undefined), v3 : ((typeof array_int_50) != ('undefined')) ? (array_int_50) : (undefined), v5 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined), v4 : ((typeof array_int_holey_50) != ('undefined')) ? (array_int_holey_50) : (undefined), v6 : ((typeof empty_proto_5_10) != ('undefined')) ? (empty_proto_5_10) : (undefined), v7 : ((typeof empty_proto_5_5_slow) != ('undefined')) ? (empty_proto_5_5_slow) : (undefined), v8 : ((typeof object_elements_proto_5_10) != ('undefined')) ? (object_elements_proto_5_10) : (undefined), v1 : ((typeof object_empty) != ('undefined')) ? (object_empty) : (undefined)}));
codealchemist_log_type_pre('6870140078304101361', ({v1 : ((typeof array_empty) != ('undefined')) ? (array_empty) : (undefined), v2 : ((typeof array_int_50) != ('undefined')) ? (array_int_50) : (undefined), v4 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined), v3 : ((typeof array_int_holey_50) != ('undefined')) ? (array_int_holey_50) : (undefined)}));
var TestArrays = ({array_empty : array_empty, array_int_50 : array_int_50, array_int_holey_50 : array_int_holey_50, array_int_50_proto_elements : array_int_50_proto_elements});
codealchemist_log_type_post('6870140078304101361', ({v0 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v1 : ((typeof array_empty) != ('undefined')) ? (array_empty) : (undefined), v2 : ((typeof array_int_50) != ('undefined')) ? (array_int_50) : (undefined), v4 : ((typeof array_int_50_proto_elements) != ('undefined')) ? (array_int_50_proto_elements) : (undefined), v3 : ((typeof array_int_holey_50) != ('undefined')) ? (array_int_holey_50) : (undefined)}));
function CreateTestFunctionGen(fn){
return ((object)=>{
codealchemist_log_type_pre('8483413347142640811', ({}));
var random_comment = (("\n// random comment") + (Math.random())) + ("\n");
codealchemist_log_type_post('8483413347142640811', ({v0 : ((typeof random_comment) != ('undefined')) ? (random_comment) : (undefined)}));
return eval((random_comment) + (fn.toString()));
});
}
codealchemist_log_type_pre('684302869582369241', ({v1 : ((typeof CreateTestFunctionGen) != ('undefined')) ? (CreateTestFunctionGen) : (undefined), v3 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var TestFunctions = ({"Object.keys()" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('-6603035167784346719', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var temp_6603035167784346719 = Object.keys(object);
codealchemist_log_type_post('-6603035167784346719', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
return temp_6603035167784346719;
})), "for-in" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('7083760893950253845', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var key in object){
codealchemist_log_type_pre('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = object[key];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof key) != ('undefined')) ? (key) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7083760893950253845', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
;
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
})), "for-in hasOwnProperty()" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3856281900877201201', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var key in object){
codealchemist_log_type_pre('6822564116336412876', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-1727377752279754948', ({v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
if(! object.hasOwnProperty(key)){
continue ;
}
codealchemist_log_type_post('-1727377752279754948', ({v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = object[key];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('6822564116336412876', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof key) != ('undefined')) ? (key) : (undefined), v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-3856281900877201201', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof key) != ('undefined')) ? (key) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
;
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
})), "for (i < Object.keys().length)" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('9024751388788385909', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var keys = Object.keys(object);
codealchemist_log_type_post('9024751388788385909', ({v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('7344525873928720293', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var i = 0;(i) < (keys.length);i++){
codealchemist_log_type_pre('6030642112523362804', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-8035735486406674600', ({v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = object[keys[i]];
codealchemist_log_type_post('-8035735486406674600', ({v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('6030642112523362804', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('7344525873928720293', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
;
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
})), "Object.keys().forEach()" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('6754972495864694592', ({v5 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
Object.keys(object).forEach(((value, index, obj)=>{
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
(result) = value;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined), v1 : ((typeof value) != ('undefined')) ? (value) : (undefined)}));
}));
codealchemist_log_type_post('6754972495864694592', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
}))});
codealchemist_log_type_post('684302869582369241', ({v1 : ((typeof CreateTestFunctionGen) != ('undefined')) ? (CreateTestFunctionGen) : (undefined), v0 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined)}));
codealchemist_log_type_pre('-9163084025655723029', ({v1 : ((typeof CreateTestFunctionGen) != ('undefined')) ? (CreateTestFunctionGen) : (undefined), v5 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var TestFunctionsArrays = ({"for (i < array.length)" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-6407146757953415215', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var i = 0;(i) < (object.length);i++){
codealchemist_log_type_pre('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = object[i];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-6407146757953415215', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
;
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
})), "for (i < length)" : CreateTestFunctionGen((()=>{
codealchemist_log_type_pre('8887107388399914408', ({}));
var count = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var result;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-8774002088373048709', ({v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
var length = object.length;
codealchemist_log_type_post('-8774002088373048709', ({v0 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('-1461079828692026915', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
for(var i = 0;(i) < (length);i++){
codealchemist_log_type_pre('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
codealchemist_log_type_pre('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
count++;
codealchemist_log_type_post('5879677761213412466', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined)}));
(result) = object[i];
codealchemist_log_type_post('4856296336223464786', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-1079733704946952129', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v3 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('-1461079828692026915', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined), v4 : ((typeof object) != ('undefined')) ? (object) : (undefined), v3 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
;
codealchemist_log_type_pre('4471249789515270771', ({}));
var temp_4471249789515270771 = [];
codealchemist_log_type_post('4471249789515270771', ({}));
return temp_4471249789515270771;
}))});
codealchemist_log_type_post('-9163084025655723029', ({v1 : ((typeof CreateTestFunctionGen) != ('undefined')) ? (CreateTestFunctionGen) : (undefined), v0 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var Benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined)}));
codealchemist_log_type_pre('5593420044569399461', ({v8 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined)}));
function NewBenchmark(test_function_gen, test_function_name, test_object, test_object_name){
codealchemist_log_type_pre('1771060243785805582', ({v1 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined)}));
var object = test_object;
codealchemist_log_type_post('1771060243785805582', ({v0 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined)}));
codealchemist_log_type_pre('6708637783068406148', ({v1 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
var name = ((test_function_name) + (" ")) + (test_object_name);
codealchemist_log_type_post('6708637783068406148', ({v0 : ((typeof name) != ('undefined')) ? (name) : (undefined), v1 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('3449575001829646660', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v1 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined)}));
var test_function = test_function_gen(object);
codealchemist_log_type_post('3449575001829646660', ({v2 : ((typeof object) != ('undefined')) ? (object) : (undefined), v0 : ((typeof test_function) != ('undefined')) ? (test_function) : (undefined), v1 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined)}));
codealchemist_log_type_pre('461965256071595519', ({v0 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof test_function) != ('undefined')) ? (test_function) : (undefined)}));
var temp_461965256071595519 = new Benchmark(name, false, false, 0, test_function);
codealchemist_log_type_post('461965256071595519', ({v0 : ((typeof Benchmark) != ('undefined')) ? (Benchmark) : (undefined), v1 : ((typeof name) != ('undefined')) ? (name) : (undefined), v2 : ((typeof test_function) != ('undefined')) ? (test_function) : (undefined)}));
return temp_461965256071595519;
}
codealchemist_log_type_post('5593420044569399461', ({}));
codealchemist_log_type_pre('8842365720267904315', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v5 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined)}));
for(var test_function_name in TestFunctions){
codealchemist_log_type_pre('-5824263547716326774', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v5 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
var test_function_gen = TestFunctions[test_function_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v0 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('7460945355737258925', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
for(var test_object_name in TestObjects){
codealchemist_log_type_pre('5384874930491768528', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
var test_object = TestObjects[test_object_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v0 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('4958946560508392702', ({v1 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v3 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v4 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v5 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
var benchmark = NewBenchmark(test_function_gen, test_function_name, test_object, test_object_name);
codealchemist_log_type_post('4958946560508392702', ({v1 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v0 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v3 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v4 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v5 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
benchmarks.push(benchmark);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_post('5384874930491768528', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v3 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v0 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v2 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
}
codealchemist_log_type_post('7460945355737258925', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v3 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v2 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v0 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
Benchmarks.push(new BenchmarkSuite(test_function_name, [], benchmarks));
codealchemist_log_type_post('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_post('-5824263547716326774', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v5 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v7 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v0 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v6 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v4 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
}
codealchemist_log_type_post('8842365720267904315', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestFunctions) != ('undefined')) ? (TestFunctions) : (undefined), v5 : ((typeof TestObjects) != ('undefined')) ? (TestObjects) : (undefined), v7 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v0 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined), v6 : ((typeof test_object) != ('undefined')) ? (test_object) : (undefined), v4 : ((typeof test_object_name) != ('undefined')) ? (test_object_name) : (undefined)}));
codealchemist_log_type_pre('8842365720267904315', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v5 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined)}));
for(var test_function_name in TestFunctionsArrays){
codealchemist_log_type_pre('-5824263547716326774', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v5 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
var test_function_gen = TestFunctionsArrays[test_function_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined), v0 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('7460945355737258925', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
for(var test_array_name in TestArrays){
codealchemist_log_type_pre('5384874930491768528', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('8699103116531770005', ({v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v2 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined)}));
var test_array = TestArrays[test_array_name];
codealchemist_log_type_post('8699103116531770005', ({v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v0 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v2 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined)}));
codealchemist_log_type_pre('4958946560508392702', ({v1 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v4 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v5 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v3 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
var benchmark = NewBenchmark(test_function_gen, test_function_name, test_array, test_array_name);
codealchemist_log_type_post('4958946560508392702', ({v1 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v0 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v4 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v5 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v3 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
benchmarks.push(benchmark);
codealchemist_log_type_post('-8479843880734066566', ({v1 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_post('5384874930491768528', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v3 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v0 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v2 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
}
codealchemist_log_type_post('7460945355737258925', ({v4 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v1 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v3 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v7 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v0 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v5 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v6 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_pre('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
Benchmarks.push(new BenchmarkSuite(test_function_name, [], benchmarks));
codealchemist_log_type_post('3733438981309421117', ({v1 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v0 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
codealchemist_log_type_post('-5824263547716326774', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v5 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined), v7 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v6 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v4 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v0 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v2 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
}
codealchemist_log_type_post('8842365720267904315', ({v10 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined), v9 : ((typeof Benchmarks) != ('undefined')) ? (Benchmarks) : (undefined), v8 : ((typeof NewBenchmark) != ('undefined')) ? (NewBenchmark) : (undefined), v5 : ((typeof TestArrays) != ('undefined')) ? (TestArrays) : (undefined), v1 : ((typeof TestFunctionsArrays) != ('undefined')) ? (TestFunctionsArrays) : (undefined), v7 : ((typeof benchmark) != ('undefined')) ? (benchmark) : (undefined), v3 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined), v6 : ((typeof test_array) != ('undefined')) ? (test_array) : (undefined), v4 : ((typeof test_array_name) != ('undefined')) ? (test_array_name) : (undefined), v2 : ((typeof test_function_gen) != ('undefined')) ? (test_function_gen) : (undefined), v0 : ((typeof test_function_name) != ('undefined')) ? (test_function_name) : (undefined)}));
