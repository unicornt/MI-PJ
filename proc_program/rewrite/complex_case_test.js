load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('6139950056319860506', ({}));
let g = "[\\t\\n\\f ]";
codealchemist_log_type_post('6139950056319860506', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('430905035908343869', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
let W = (g) + ("*");
codealchemist_log_type_post('430905035908343869', ({v0 : ((typeof W) != ('undefined')) ? (W) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('8057316567262696758', ({}));
let h = "[\\ud800-\\udbff][\\udc00-\\udfff]";
codealchemist_log_type_post('8057316567262696758', ({v0 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
codealchemist_log_type_pre('-3047376309129448628', ({v1 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
let k = ("[\\u0080-\\ud7ff\\ue000-\\ufffd]|") + (h);
codealchemist_log_type_post('-3047376309129448628', ({v1 : ((typeof h) != ('undefined')) ? (h) : (undefined), v0 : ((typeof k) != ('undefined')) ? (k) : (undefined)}));
codealchemist_log_type_pre('6586572645671156778', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
let U = (("[0-9a-fA-F]{1,6}") + (g)) + ("?");
codealchemist_log_type_post('6586572645671156778', ({v0 : ((typeof U) != ('undefined')) ? (U) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('-6267149834728086849', ({v1 : ((typeof U) != ('undefined')) ? (U) : (undefined), v2 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
let E = (((("(?:") + (U)) + ("|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|")) + (h)) + (")");
codealchemist_log_type_post('-6267149834728086849', ({v0 : ((typeof E) != ('undefined')) ? (E) : (undefined), v1 : ((typeof U) != ('undefined')) ? (U) : (undefined), v2 : ((typeof h) != ('undefined')) ? (h) : (undefined)}));
codealchemist_log_type_pre('-8325785551013612096', ({v1 : ((typeof E) != ('undefined')) ? (E) : (undefined)}));
let m = ("\\\\") + (E);
codealchemist_log_type_post('-8325785551013612096', ({v1 : ((typeof E) != ('undefined')) ? (E) : (undefined), v0 : ((typeof m) != ('undefined')) ? (m) : (undefined)}));
codealchemist_log_type_pre('-6856675940906476745', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined)}));
let o = (((("(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|") + (k)) + ("|")) + (m)) + (")");
codealchemist_log_type_post('-6856675940906476745', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined), v0 : ((typeof o) != ('undefined')) ? (o) : (undefined)}));
codealchemist_log_type_pre('7554567574315328627', ({}));
let p = '[^\'"\\n\\f\\\\]|\\\\[\\s\\S]';
codealchemist_log_type_post('7554567574315328627', ({v0 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
codealchemist_log_type_pre('7944416669946404646', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined)}));
let q = ((((('"(?:\'|') + (p)) + (')*"')) + ('|\'(?:\"|')) + (p)) + (')*\'');
codealchemist_log_type_post('7944416669946404646', ({v1 : ((typeof p) != ('undefined')) ? (p) : (undefined), v0 : ((typeof q) != ('undefined')) ? (q) : (undefined)}));
codealchemist_log_type_pre('-760214217033579485', ({}));
let r = "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)";
codealchemist_log_type_post('-760214217033579485', ({v0 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
codealchemist_log_type_pre('7309043814222274506', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined)}));
let t = (((("(?:[a-zA-Z_]|") + (k)) + ("|")) + (m)) + (")");
codealchemist_log_type_post('7309043814222274506', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined), v0 : ((typeof t) != ('undefined')) ? (t) : (undefined)}));
codealchemist_log_type_pre('8828787665266443847', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined)}));
let u = (((("(?:[a-zA-Z0-9_-]|") + (k)) + ("|")) + (m)) + (")");
codealchemist_log_type_post('8828787665266443847', ({v1 : ((typeof k) != ('undefined')) ? (k) : (undefined), v2 : ((typeof m) != ('undefined')) ? (m) : (undefined), v0 : ((typeof u) != ('undefined')) ? (u) : (undefined)}));
codealchemist_log_type_pre('-2156464841936404188', ({v1 : ((typeof u) != ('undefined')) ? (u) : (undefined)}));
let v = (u) + ("+");
codealchemist_log_type_post('-2156464841936404188', ({v1 : ((typeof u) != ('undefined')) ? (u) : (undefined), v0 : ((typeof v) != ('undefined')) ? (v) : (undefined)}));
codealchemist_log_type_pre('-1643561571794039843', ({v1 : ((typeof t) != ('undefined')) ? (t) : (undefined), v2 : ((typeof u) != ('undefined')) ? (u) : (undefined)}));
let I = ((("-?") + (t)) + (u)) + ("*");
codealchemist_log_type_post('-1643561571794039843', ({v0 : ((typeof I) != ('undefined')) ? (I) : (undefined), v1 : ((typeof t) != ('undefined')) ? (t) : (undefined), v2 : ((typeof u) != ('undefined')) ? (u) : (undefined)}));
codealchemist_log_type_pre('8113960066055864393', ({v1 : ((typeof t) != ('undefined')) ? (t) : (undefined), v2 : ((typeof u) != ('undefined')) ? (u) : (undefined)}));
let x = (((("(?:@?-?") + (t)) + ("|#)")) + (u)) + ("*");
codealchemist_log_type_post('8113960066055864393', ({v1 : ((typeof t) != ('undefined')) ? (t) : (undefined), v2 : ((typeof u) != ('undefined')) ? (u) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-1521262572568396761', ({v2 : ((typeof I) != ('undefined')) ? (I) : (undefined), v1 : ((typeof r) != ('undefined')) ? (r) : (undefined)}));
let y = (((r) + ("(?:%|")) + (I)) + (")?");
codealchemist_log_type_post('-1521262572568396761', ({v2 : ((typeof I) != ('undefined')) ? (I) : (undefined), v1 : ((typeof r) != ('undefined')) ? (r) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_pre('-8105484218243355359', ({v1 : ((typeof W) != ('undefined')) ? (W) : (undefined), v3 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof q) != ('undefined')) ? (q) : (undefined)}));
let z = (((((((("url[(]") + (W)) + ("(?:")) + (q)) + ("|")) + (o)) + ("*)")) + (W)) + ("[)]");
codealchemist_log_type_post('-8105484218243355359', ({v1 : ((typeof W) != ('undefined')) ? (W) : (undefined), v3 : ((typeof o) != ('undefined')) ? (o) : (undefined), v2 : ((typeof q) != ('undefined')) ? (q) : (undefined), v0 : ((typeof z) != ('undefined')) ? (z) : (undefined)}));
codealchemist_log_type_pre('-806990722352496560', ({}));
let B = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?";
codealchemist_log_type_post('-806990722352496560', ({v0 : ((typeof B) != ('undefined')) ? (B) : (undefined)}));
codealchemist_log_type_pre('-6032983923662267215', ({}));
let C = "<\!--";
codealchemist_log_type_post('-6032983923662267215', ({v0 : ((typeof C) != ('undefined')) ? (C) : (undefined)}));
codealchemist_log_type_pre('1023881709968923129', ({}));
let F = "-->";
codealchemist_log_type_post('1023881709968923129', ({v0 : ((typeof F) != ('undefined')) ? (F) : (undefined)}));
codealchemist_log_type_pre('-2156464841936404188', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
let S = (g) + ("+");
codealchemist_log_type_post('-2156464841936404188', ({v0 : ((typeof S) != ('undefined')) ? (S) : (undefined), v1 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('9002930256515767885', ({}));
let G = "/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)";
codealchemist_log_type_post('9002930256515767885', ({v0 : ((typeof G) != ('undefined')) ? (G) : (undefined)}));
codealchemist_log_type_pre('717698291338692955', ({v1 : ((typeof I) != ('undefined')) ? (I) : (undefined)}));
let J = (("(?!url[(])") + (I)) + ("[(]");
codealchemist_log_type_post('717698291338692955', ({v1 : ((typeof I) != ('undefined')) ? (I) : (undefined), v0 : ((typeof J) != ('undefined')) ? (J) : (undefined)}));
codealchemist_log_type_pre('5882328493380220315', ({}));
let R = "[~|^$*]=";
codealchemist_log_type_post('5882328493380220315', ({v0 : ((typeof R) != ('undefined')) ? (R) : (undefined)}));
codealchemist_log_type_pre('-6810965853125257447', ({}));
let T = '[^"\'\\\\/]|/(?![/*])';
codealchemist_log_type_post('-6810965853125257447', ({v0 : ((typeof T) != ('undefined')) ? (T) : (undefined)}));
codealchemist_log_type_pre('4559146033234705957', ({}));
let V = "\\uFEFF";
codealchemist_log_type_post('4559146033234705957', ({v0 : ((typeof V) != ('undefined')) ? (V) : (undefined)}));
codealchemist_log_type_pre('-4451798371630327067', ({}));
let Y = [].join("|");
codealchemist_log_type_post('-4451798371630327067', ({v0 : ((typeof Y) != ('undefined')) ? (Y) : (undefined)}));
codealchemist_log_type_pre('6681975373408500321', ({v3 : ((typeof Y) != ('undefined')) ? (Y) : (undefined)}));
function ComplexGlobalCaseInsensitiveMatch(){
codealchemist_log_type_pre('-3522632376085552099', ({v2 : ((typeof Y) != ('undefined')) ? (Y) : (undefined)}));
let X = new RegExp(Y, "gi");
codealchemist_log_type_post('-3522632376085552099', ({v0 : ((typeof X) != ('undefined')) ? (X) : (undefined), v2 : ((typeof Y) != ('undefined')) ? (Y) : (undefined)}));
codealchemist_log_type_pre('-2163907249878374590', ({v0 : ((typeof X) != ('undefined')) ? (X) : (undefined)}));
"abcſABCβκς".match(X);
codealchemist_log_type_post('-2163907249878374590', ({v0 : ((typeof X) != ('undefined')) ? (X) : (undefined)}));
codealchemist_log_type_pre('-6738185542057750898', ({v0 : ((typeof X) != ('undefined')) ? (X) : (undefined)}));
"color:".match(X);
codealchemist_log_type_post('-6738185542057750898', ({v0 : ((typeof X) != ('undefined')) ? (X) : (undefined)}));
}
codealchemist_log_type_post('6681975373408500321', ({}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(benchmarks) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('8547086123862478465', ({v0 : ((typeof createBenchmarkSuite) != ('undefined')) ? (createBenchmarkSuite) : (undefined)}));
createBenchmarkSuite("ComplexCaseInsensitiveTest");
codealchemist_log_type_post('8547086123862478465', ({v0 : ((typeof createBenchmarkSuite) != ('undefined')) ? (createBenchmarkSuite) : (undefined)}));