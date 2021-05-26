load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-637687726718483385', ({}));
function SimpleCtor(){
codealchemist_log_type_pre('3392335002506733650', ({}));
new RegExp("[Cz]");
codealchemist_log_type_post('3392335002506733650', ({}));
}
codealchemist_log_type_post('-637687726718483385', ({}));
codealchemist_log_type_pre('2528859653705822576', ({}));
function FlagsCtor(){
codealchemist_log_type_pre('2757651915090677401', ({}));
new RegExp("[Cz]", "guiym");
codealchemist_log_type_post('2757651915090677401', ({}));
}
codealchemist_log_type_post('2528859653705822576', ({}));
codealchemist_log_type_pre('5425316448452147739', ({}));
function SimpleCtorWithoutNew(){
codealchemist_log_type_pre('-6737575290572268647', ({}));
RegExp("[Cz]");
codealchemist_log_type_post('-6737575290572268647', ({}));
}
codealchemist_log_type_post('5425316448452147739', ({}));
codealchemist_log_type_pre('2454715697332105701', ({}));
function FlagsCtorWithoutNew(){
codealchemist_log_type_pre('-3942521885108135625', ({}));
RegExp("[Cz]", "guiym");
codealchemist_log_type_post('-3942521885108135625', ({}));
}
codealchemist_log_type_post('2454715697332105701', ({}));
codealchemist_log_type_pre('8056996619825514982', ({}));
function CtorWithRegExpPattern(){
codealchemist_log_type_pre('-8509044077782096346', ({}));
new RegExp(/[Cz]/);
codealchemist_log_type_post('-8509044077782096346', ({}));
}
codealchemist_log_type_post('8056996619825514982', ({}));
codealchemist_log_type_pre('1616480824697914135', ({}));
function CtorWithRegExpPatternAndFlags(){
codealchemist_log_type_pre('-5120011849791939878', ({}));
new RegExp(/[Cz]/, "guiym");
codealchemist_log_type_post('-5120011849791939878', ({}));
}
codealchemist_log_type_post('1616480824697914135', ({}));
codealchemist_log_type_pre('-8992850769097201162', ({}));
class SubRegExp extends RegExp{
}
codealchemist_log_type_post('-8992850769097201162', ({}));
codealchemist_log_type_pre('3372968491324578093', ({v2 : ((typeof SubRegExp) != ('undefined')) ? (SubRegExp) : (undefined)}));
function CtorWithRegExpSubclassPattern(){
codealchemist_log_type_pre('3489523849719714031', ({v1 : ((typeof SubRegExp) != ('undefined')) ? (SubRegExp) : (undefined)}));
new RegExp(new SubRegExp(/[Cz]/));
codealchemist_log_type_post('3489523849719714031', ({v1 : ((typeof SubRegExp) != ('undefined')) ? (SubRegExp) : (undefined)}));
}
codealchemist_log_type_post('3372968491324578093', ({}));
codealchemist_log_type_pre('6672429555329145324', ({}));
function CtorWithUndefinedPattern(){
codealchemist_log_type_pre('-3683304585559604697', ({}));
new RegExp();
codealchemist_log_type_post('-3683304585559604697', ({}));
}
codealchemist_log_type_post('6672429555329145324', ({}));
codealchemist_log_type_pre('4043320192143723719', ({}));
function CtorWithFlagsAndUndefinedPattern(){
codealchemist_log_type_pre('776446403738182697', ({}));
new RegExp(undefined, "guiym");
codealchemist_log_type_post('776446403738182697', ({}));
}
codealchemist_log_type_post('4043320192143723719', ({}));
codealchemist_log_type_pre('-2873575392672305138', ({}));
var benchmarks = [];
codealchemist_log_type_post('-2873575392672305138', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
