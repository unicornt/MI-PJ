load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-4050608833283914102', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('Generators', [], []);
codealchemist_log_type_post('-4050608833283914102', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-2770646025637234578', ({}));
function* five(){
codealchemist_log_type_pre('5186806124538008333', ({}));
yield 1;
codealchemist_log_type_post('5186806124538008333', ({}));
codealchemist_log_type_pre('-497042660390035775', ({}));
yield 2;
codealchemist_log_type_post('-497042660390035775', ({}));
codealchemist_log_type_pre('7892371304341761270', ({}));
yield 3;
codealchemist_log_type_post('7892371304341761270', ({}));
codealchemist_log_type_pre('-6924311399800166171', ({}));
yield 4;
codealchemist_log_type_post('-6924311399800166171', ({}));
codealchemist_log_type_pre('8973660887733330266', ({}));
yield 5;
codealchemist_log_type_post('8973660887733330266', ({}));
}
codealchemist_log_type_post('-2770646025637234578', ({}));
codealchemist_log_type_pre('8966318692969826480', ({v2 : ((typeof five) != ('undefined')) ? (five) : (undefined)}));
function Basic(){
codealchemist_log_type_pre('-5050657148787499418', ({v1 : ((typeof five) != ('undefined')) ? (five) : (undefined)}));
let g = five();
codealchemist_log_type_post('-5050657148787499418', ({v1 : ((typeof five) != ('undefined')) ? (five) : (undefined), v0 : ((typeof g) != ('undefined')) ? (g) : (undefined)}));
codealchemist_log_type_pre('8720562409487186565', ({}));
let sum = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += g.next().value;
codealchemist_log_type_post('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += g.next().value;
codealchemist_log_type_post('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += g.next().value;
codealchemist_log_type_post('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += g.next().value;
codealchemist_log_type_post('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += g.next().value;
codealchemist_log_type_post('6816716189488391890', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('1910807386873594925', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
if(((sum) != (15)) || (! g.next().done)){
codealchemist_log_type_pre('-1773145213572916574', ({}));
var temp_1773145213572916574 = "wrong";
codealchemist_log_type_post('-1773145213572916574', ({}));
throw temp_1773145213572916574;
}
codealchemist_log_type_post('1910807386873594925', ({v1 : ((typeof g) != ('undefined')) ? (g) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('8966318692969826480', ({}));
codealchemist_log_type_pre('-5811441957499524848', ({}));
function* fibonacci(){
codealchemist_log_type_pre('8720562409487186565', ({}));
let x = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-2812309203042218284', ({}));
let y = 1;
codealchemist_log_type_post('-2812309203042218284', ({v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_pre('-4903191622008826027', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
yield x;
codealchemist_log_type_post('-4903191622008826027', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-6717234560762152637', ({v2 : ((typeof x) != ('undefined')) ? (x) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
while(true){
codealchemist_log_type_pre('-4109442096955546726', ({v2 : ((typeof x) != ('undefined')) ? (x) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_pre('-4903191622008826027', ({v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
yield y;
codealchemist_log_type_post('-4903191622008826027', ({v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_pre('6881331031294980737', ({v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
let tmp = x;
codealchemist_log_type_post('6881331031294980737', ({v0 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('670706250746082504', ({v1 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
(x) = y;
codealchemist_log_type_post('670706250746082504', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined), v1 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v1 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
(y) += tmp;
codealchemist_log_type_post('383496466578906810', ({v1 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
codealchemist_log_type_post('-4109442096955546726', ({v1 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
}
codealchemist_log_type_post('-6717234560762152637', ({v1 : ((typeof tmp) != ('undefined')) ? (tmp) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined), v0 : ((typeof y) != ('undefined')) ? (y) : (undefined)}));
}
codealchemist_log_type_post('-5811441957499524848', ({}));
codealchemist_log_type_pre('-3330178885362239576', ({v3 : ((typeof fibonacci) != ('undefined')) ? (fibonacci) : (undefined)}));
function Loop(){
codealchemist_log_type_pre('8720562409487186565', ({}));
let n = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('-964963668777278771', ({}));
let x;
codealchemist_log_type_post('-964963668777278771', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-5780247679956216600', ({v1 : ((typeof fibonacci) != ('undefined')) ? (fibonacci) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
for(x of fibonacci()){
codealchemist_log_type_pre('5744823785325161219', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_pre('1805354906907937532', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
if((++n) === (42)){
break ;
}
codealchemist_log_type_post('1805354906907937532', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
codealchemist_log_type_post('5744823785325161219', ({v0 : ((typeof n) != ('undefined')) ? (n) : (undefined)}));
}
codealchemist_log_type_post('-5780247679956216600', ({v1 : ((typeof fibonacci) != ('undefined')) ? (fibonacci) : (undefined), v2 : ((typeof n) != ('undefined')) ? (n) : (undefined), v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('-435199512157776096', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
if((x) != (165580141)){
codealchemist_log_type_pre('-1773145213572916574', ({}));
var temp_1773145213572916574 = "wrong";
codealchemist_log_type_post('-1773145213572916574', ({}));
throw temp_1773145213572916574;
}
codealchemist_log_type_post('-435199512157776096', ({v0 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-3330178885362239576', ({}));
codealchemist_log_type_pre('-4843344397822748039', ({}));
function* multiples(x){
codealchemist_log_type_pre('971511930132200402', ({}));
let skip = 2;
codealchemist_log_type_post('971511930132200402', ({v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
codealchemist_log_type_pre('8720562409487186565', ({}));
let next = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof next) != ('undefined')) ? (next) : (undefined)}));
codealchemist_log_type_pre('-3630256499004174241', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
while(true){
codealchemist_log_type_pre('-7547147730381499414', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_pre('1915285715178149568', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
if((skip) === (0)){
codealchemist_log_type_pre('7126652265321671287', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined)}));
codealchemist_log_type_pre('-4576222451198721288', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined)}));
(skip) = yield next;
codealchemist_log_type_post('-4576222451198721288', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
codealchemist_log_type_post('7126652265321671287', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
}else {
codealchemist_log_type_pre('2484799258022337663', ({v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
codealchemist_log_type_pre('-3887921980159742718', ({v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
skip--;
codealchemist_log_type_post('-3887921980159742718', ({v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
codealchemist_log_type_post('2484799258022337663', ({v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
}
codealchemist_log_type_post('1915285715178149568', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined)}));
codealchemist_log_type_pre('383496466578906810', ({v0 : ((typeof next) != ('undefined')) ? (next) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
(next) += x;
codealchemist_log_type_post('383496466578906810', ({v0 : ((typeof next) != ('undefined')) ? (next) : (undefined), v1 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
codealchemist_log_type_post('-7547147730381499414', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-3630256499004174241', ({v1 : ((typeof next) != ('undefined')) ? (next) : (undefined), v0 : ((typeof skip) != ('undefined')) ? (skip) : (undefined), v2 : ((typeof x) != ('undefined')) ? (x) : (undefined)}));
}
codealchemist_log_type_post('-4843344397822748039', ({}));
codealchemist_log_type_pre('-3757049526195938277', ({v2 : ((typeof multiples) != ('undefined')) ? (multiples) : (undefined)}));
function Input(){
codealchemist_log_type_pre('-1702238780232124662', ({v1 : ((typeof multiples) != ('undefined')) ? (multiples) : (undefined)}));
let g = multiples(3);
codealchemist_log_type_post('-1702238780232124662', ({v0 : ((typeof g) != ('undefined')) ? (g) : (undefined), v1 : ((typeof multiples) != ('undefined')) ? (multiples) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(results) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof results) != ('undefined')) ? (results) : (undefined)}));
codealchemist_log_type_pre('-3598234249985684685', ({v0 : ((typeof results) != ('undefined')) ? (results) : (undefined)}));
if((results.slice(- 1)[0].value) != (60)){
codealchemist_log_type_pre('-1773145213572916574', ({}));
var temp_1773145213572916574 = "wrong";
codealchemist_log_type_post('-1773145213572916574', ({}));
throw temp_1773145213572916574;
}
codealchemist_log_type_post('-3598234249985684685', ({v0 : ((typeof results) != ('undefined')) ? (results) : (undefined)}));
}
codealchemist_log_type_post('-3757049526195938277', ({}));
codealchemist_log_type_pre('-4666781531365350723', ({}));
function* infix(node){
codealchemist_log_type_pre('3564132434948330080', ({v1 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v0 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
if(node){
codealchemist_log_type_pre('5468936070061862370', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
codealchemist_log_type_pre('5510795079375303792', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
yield* infix(node.left);
codealchemist_log_type_post('5510795079375303792', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
codealchemist_log_type_pre('-6339371393908521464', ({v0 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
yield node.label;
codealchemist_log_type_post('-6339371393908521464', ({v0 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
codealchemist_log_type_pre('5580916302779437533', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
yield* infix(node.right);
codealchemist_log_type_post('5580916302779437533', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
codealchemist_log_type_post('5468936070061862370', ({v0 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v1 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
}
codealchemist_log_type_post('3564132434948330080', ({v1 : ((typeof infix) != ('undefined')) ? (infix) : (undefined), v0 : ((typeof node) != ('undefined')) ? (node) : (undefined)}));
}
codealchemist_log_type_post('-4666781531365350723', ({}));
codealchemist_log_type_pre('-2577817538382249115', ({}));
class Node{
}
codealchemist_log_type_post('-2577817538382249115', ({}));
codealchemist_log_type_pre('1583986397265858097', ({v2 : ((typeof Node) != ('undefined')) ? (Node) : (undefined)}));
function YieldStar(){
codealchemist_log_type_pre('4604274059105895676', ({v1 : ((typeof Node) != ('undefined')) ? (Node) : (undefined)}));
let tree = new Node(1, new Node(2, new Node(3, new Node(4, new Node(16, new Node(5, new Node(23, new Node(0), new Node(17)), new Node(44, new Node(20)))), new Node(7, undefined, new Node(23, new Node(0), new Node(41, undefined, new Node(11))))), new Node(8)), new Node(5)), new Node(6, undefined, new Node(7)));
codealchemist_log_type_post('4604274059105895676', ({v1 : ((typeof Node) != ('undefined')) ? (Node) : (undefined), v0 : ((typeof tree) != ('undefined')) ? (tree) : (undefined)}));
codealchemist_log_type_pre('-7619666865260496585', ({}));
let labels = [];
codealchemist_log_type_post('-7619666865260496585', ({v0 : ((typeof labels) != ('undefined')) ? (labels) : (undefined)}));
codealchemist_log_type_pre('8729083275826960737', ({v0 : ((typeof labels) != ('undefined')) ? (labels) : (undefined)}));
if((labels[0]) != (0)){
codealchemist_log_type_pre('-1773145213572916574', ({}));
var temp_1773145213572916574 = "wrong";
codealchemist_log_type_post('-1773145213572916574', ({}));
throw temp_1773145213572916574;
}
codealchemist_log_type_post('8729083275826960737', ({v0 : ((typeof labels) != ('undefined')) ? (labels) : (undefined)}));
}
codealchemist_log_type_post('1583986397265858097', ({}));
