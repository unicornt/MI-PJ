load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('3256914607123296687', ({v4 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined)}));
function driver(n){
codealchemist_log_type_pre('8720562409487186565', ({}));
let result = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('957751170203292457', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
for(var i = 0;(i) < (n);i++){
codealchemist_log_type_pre('-6626991392198348817', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('8984527410052828501', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
(result) += ((frozenArray.hasOwnProperty(('') + (i))) == (- 1)) ? (0) : (1);
codealchemist_log_type_post('8984527410052828501', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_post('-6626991392198348817', ({v1 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
}
codealchemist_log_type_post('957751170203292457', ({v3 : ((typeof frozenArray) != ('undefined')) ? (frozenArray) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof n) != ('undefined')) ? (n) : (undefined), v2 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
var temp_3444589576563574513 = result;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof result) != ('undefined')) ? (result) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('3256914607123296687', ({}));
codealchemist_log_type_pre('6848302637669060528', ({v1 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
function HasOwnProperty(){
codealchemist_log_type_pre('-8399036745262485480', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
driver(1e4);
codealchemist_log_type_post('-8399036745262485480', ({v0 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
}
codealchemist_log_type_post('6848302637669060528', ({}));
codealchemist_log_type_pre('-993708076935335840', ({v1 : ((typeof driver) != ('undefined')) ? (driver) : (undefined)}));
function HasOwnPropertyWarmUp(){
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
codealchemist_log_type_pre('163633637561566088', ({v1 : ((typeof HasOwnProperty) != ('undefined')) ? (HasOwnProperty) : (undefined), v2 : ((typeof HasOwnPropertyWarmUp) != ('undefined')) ? (HasOwnPropertyWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
createSuite('HasOwnProperty', 10, HasOwnProperty, HasOwnPropertyWarmUp);
codealchemist_log_type_post('163633637561566088', ({v1 : ((typeof HasOwnProperty) != ('undefined')) ? (HasOwnProperty) : (undefined), v2 : ((typeof HasOwnPropertyWarmUp) != ('undefined')) ? (HasOwnPropertyWarmUp) : (undefined), v0 : ((typeof createSuite) != ('undefined')) ? (createSuite) : (undefined)}));
