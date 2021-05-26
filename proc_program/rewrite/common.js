load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-3490613269553461262', ({}));
var N = 10;
codealchemist_log_type_post('-3490613269553461262', ({v0 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('1031821779699913509', ({}));
var LargeN = 1e4;
codealchemist_log_type_post('1031821779699913509', ({v0 : ((typeof LargeN) != ('undefined')) ? (LargeN) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var keys;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var keyValuePairs;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof keyValuePairs) != ('undefined')) ? (keyValuePairs) : (undefined)}));
codealchemist_log_type_pre('-1400442680196102186', ({v2 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
function SetupKeyValuePairsFromKeys(){
codealchemist_log_type_pre('-8376665791362649173', ({v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
(keyValuePairs) = keys.map(((v)=>[]));
codealchemist_log_type_post('-8376665791362649173', ({v0 : ((typeof keyValuePairs) != ('undefined')) ? (keyValuePairs) : (undefined), v1 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-1400442680196102186', ({}));
codealchemist_log_type_pre('4786530646626315440', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
function SetupSmiKeys(count = (2) * (N)){
codealchemist_log_type_pre('-6120984081729547575', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
(keys) = Array.from(({length : count}), ((v, i)=>i));
codealchemist_log_type_post('-6120984081729547575', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('4786530646626315440', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined), v3 : ((typeof SetupSmiKeys) != ('undefined')) ? (SetupSmiKeys) : (undefined)}));
function SetupSmiKeyValuePairs(count = (2) * (N)){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof SetupSmiKeys) != ('undefined')) ? (SetupSmiKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
SetupSmiKeys(count);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof SetupSmiKeys) != ('undefined')) ? (SetupSmiKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
SetupKeyValuePairsFromKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
}
codealchemist_log_type_post('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('-5064727983552712127', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
function SetupStringKeys(count = (2) * (N)){
codealchemist_log_type_pre('7841889054197195922', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
(keys) = Array.from(({length : count}), ((v, i)=>('s') + (i)));
codealchemist_log_type_post('7841889054197195922', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-5064727983552712127', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined), v3 : ((typeof SetupStringKeys) != ('undefined')) ? (SetupStringKeys) : (undefined)}));
function SetupStringKeyValuePairs(count = (2) * (N)){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof SetupStringKeys) != ('undefined')) ? (SetupStringKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
SetupStringKeys(count);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof SetupStringKeys) != ('undefined')) ? (SetupStringKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
SetupKeyValuePairsFromKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
}
codealchemist_log_type_post('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('-7369449796771026490', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
function SetupObjectKeys(count = (2) * (N)){
codealchemist_log_type_pre('-7041154608164103467', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
(keys) = Array.from(({length : count}), ((v, i)=>({})));
codealchemist_log_type_post('-7041154608164103467', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-7369449796771026490', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v4 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined), v3 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined)}));
function SetupObjectKeyValuePairs(count = (2) * (N)){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
SetupObjectKeys(count);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof SetupObjectKeys) != ('undefined')) ? (SetupObjectKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
SetupKeyValuePairsFromKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
}
codealchemist_log_type_post('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('-7960456019717042195', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
function SetupDoubleKeys(count = (2) * (N)){
codealchemist_log_type_pre('-7933289831642084337', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
(keys) = Array.from(({length : count}), ((v, i)=>(i) + (0.234)));
codealchemist_log_type_post('-7933289831642084337', ({v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof keys) != ('undefined')) ? (keys) : (undefined)}));
}
codealchemist_log_type_post('-7960456019717042195', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
codealchemist_log_type_pre('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined), v3 : ((typeof SetupDoubleKeys) != ('undefined')) ? (SetupDoubleKeys) : (undefined), v4 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
function SetupDoubleKeyValuePairs(count = (2) * (N)){
codealchemist_log_type_pre('4435534727832396699', ({v0 : ((typeof SetupDoubleKeys) != ('undefined')) ? (SetupDoubleKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
SetupDoubleKeys(count);
codealchemist_log_type_post('4435534727832396699', ({v0 : ((typeof SetupDoubleKeys) != ('undefined')) ? (SetupDoubleKeys) : (undefined), v1 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
SetupKeyValuePairsFromKeys();
codealchemist_log_type_post('4051885568687879871', ({v0 : ((typeof SetupKeyValuePairsFromKeys) != ('undefined')) ? (SetupKeyValuePairsFromKeys) : (undefined)}));
}
codealchemist_log_type_post('1361141975713418877', ({v2 : ((typeof N) != ('undefined')) ? (N) : (undefined)}));
