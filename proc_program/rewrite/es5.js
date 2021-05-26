load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-8632397207855399210', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('ES5', [], []);
codealchemist_log_type_post('-8632397207855399210', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('4847896145247841651', ({}));
function Point(x, y){
codealchemist_log_type_pre('1746915283032246437', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
(this.x) = x;
codealchemist_log_type_post('1746915283032246437', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('7793105079077540079', ({v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
(this.y) = y;
codealchemist_log_type_post('7793105079077540079', ({v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
}
codealchemist_log_type_post('4847896145247841651', ({}));
codealchemist_log_type_pre('-2881946249172556191', ({v1 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
function MyPoint(){
codealchemist_log_type_pre('-6375474324197081084', ({v0 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
Point.apply(this, arguments);
codealchemist_log_type_post('-6375474324197081084', ({v0 : ((typeof Point) != ('undefined')) ? (Point) : (undefined)}));
}
codealchemist_log_type_post('-2881946249172556191', ({}));
codealchemist_log_type_pre('8414075273171297659', ({v3 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined)}));
function makePoint(x, y){
codealchemist_log_type_pre('7407882887824487787', ({v0 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined), v2 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
var temp_7407882887824487787 = new MyPoint(x, y);
codealchemist_log_type_post('7407882887824487787', ({v0 : ((typeof MyPoint) != ('undefined')) ? (MyPoint) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined), v2 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
return temp_7407882887824487787;
}
codealchemist_log_type_post('8414075273171297659', ({}));
codealchemist_log_type_pre('-1198549926912360622', ({v1 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
function ES5(){
codealchemist_log_type_pre('-5872569963098562932', ({}));
'use strict';
codealchemist_log_type_post('-5872569963098562932', ({}));
codealchemist_log_type_pre('-6365316680570891434', ({v0 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
var temp_6365316680570891434 = makePoint(1, 2);
codealchemist_log_type_post('-6365316680570891434', ({v0 : ((typeof makePoint) != ('undefined')) ? (makePoint) : (undefined)}));
return temp_6365316680570891434;
}
codealchemist_log_type_post('-1198549926912360622', ({}));
