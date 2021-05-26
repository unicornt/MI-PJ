load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4350637556210211758', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ES6', [], []);
codealchemist_log_type_post('-4350637556210211758', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class Point{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('-6945055500619518557', ({v1 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
class MyPoint extends Point{
}
codealchemist_log_type_post('-6945055500619518557', ({v1 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
codealchemist_log_type_pre('8414075273171297659', ({v3 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined)}));
function makePoint(x, y){
codealchemist_log_type_pre('7407882887824487787', ({v0 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined), v2 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
var temp_7407882887824487787 = new MyPoint(x, y);
codealchemist_log_type_post('7407882887824487787', ({v0 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined), v2 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
return temp_7407882887824487787;
}
codealchemist_log_type_post('8414075273171297659', ({}));
codealchemist_log_type_pre('-1198549926912360622', ({v1 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
function ES6(){
codealchemist_log_type_pre('-5872569963098562932', ({}));
'use strict';
codealchemist_log_type_post('-5872569963098562932', ({}));
codealchemist_log_type_pre('-6365316680570891434', ({v0 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
var temp_6365316680570891434 = makePoint(1, 2);
codealchemist_log_type_post('-6365316680570891434', ({v0 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
return temp_6365316680570891434;
}
codealchemist_log_type_post('-1198549926912360622', ({}));
