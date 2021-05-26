load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
load('sort-base.js');
codealchemist_log_type_pre('-2025326140346360302', ({}));
const kLength = 2e4;
codealchemist_log_type_post('-2025326140346360302', ({v0 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
codealchemist_log_type_pre('4891158724052005211', ({v1 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
const kLengthHalf = (kLength) >>> (1);
codealchemist_log_type_post('4891158724052005211', ({v1 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined), v0 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined)}));
codealchemist_log_type_pre('1929318241575163864', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
function SortAsc(){
codealchemist_log_type_pre('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
array_to_sort.sort(cmp_smaller);
codealchemist_log_type_post('5670579156537621147', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof cmp_smaller) != ('undefined')) ? (cmp_smaller) : (undefined)}));
}
codealchemist_log_type_post('1929318241575163864', ({}));
codealchemist_log_type_pre('3308481318539292628', ({}));
function Up(a, length){
codealchemist_log_type_pre('3252595849238346677', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('4536863424409027421', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
a.push(i);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('4536863424409027421', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('3252595849238346677', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('3308481318539292628', ({}));
codealchemist_log_type_pre('-2044158110974190626', ({}));
function Down(a, length){
codealchemist_log_type_pre('5098502424573191029', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('6399881649976332374', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
a.push((length) - (i));
codealchemist_log_type_post('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('6399881649976332374', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('5098502424573191029', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('-2044158110974190626', ({}));
codealchemist_log_type_pre('-3837804786955255463', ({}));
function SawSeq(a, tooth, length){
codealchemist_log_type_pre('8720562409487186565', ({}));
let count = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('2940523865197485451', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
while(true){
codealchemist_log_type_pre('8894038843160942064', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-8439985360469010187', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
for(let i = 0;(i) < (tooth);++i){
codealchemist_log_type_pre('-1490099404815247155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
a.push(i);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
if((++count) >= (length)){
return;
}
codealchemist_log_type_post('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-1490099404815247155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('-8439985360469010187', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_post('8894038843160942064', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('2940523865197485451', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('-3837804786955255463', ({}));
codealchemist_log_type_pre('-7754537096434047100', ({}));
function SawSeq2(a, tooth, length){
codealchemist_log_type_pre('8720562409487186565', ({}));
let count = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('-8272734159855080431', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
while(true){
codealchemist_log_type_pre('-2859615210822124597', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-8439985360469010187', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
for(let i = 0;(i) < (tooth);++i){
codealchemist_log_type_pre('-1490099404815247155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
a.push(i);
codealchemist_log_type_post('-8479843880734066566', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
if((++count) >= (length)){
return;
}
codealchemist_log_type_post('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-1490099404815247155', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('-8439985360469010187', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-6784046800074520554', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
for(let i = 0;(i) < (tooth);++i){
codealchemist_log_type_pre('-7739853469585589292', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
a.push((tooth) - (i));
codealchemist_log_type_post('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
if((++count) >= (length)){
return;
}
codealchemist_log_type_post('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-7739853469585589292', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('-6784046800074520554', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_post('-2859615210822124597', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('-8272734159855080431', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('-7754537096434047100', ({}));
codealchemist_log_type_pre('5408922685633789411', ({}));
function SawSeq3(a, tooth, length){
codealchemist_log_type_pre('8720562409487186565', ({}));
let count = 0;
codealchemist_log_type_post('8720562409487186565', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined)}));
codealchemist_log_type_pre('2335217043388652233', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
while(true){
codealchemist_log_type_pre('-3433645139030835672', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-6784046800074520554', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
for(let i = 0;(i) < (tooth);++i){
codealchemist_log_type_pre('-7739853469585589292', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
a.push((tooth) - (i));
codealchemist_log_type_post('-3526892335926859750', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_pre('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
if((++count) >= (length)){
return;
}
codealchemist_log_type_post('7203241972259668428', ({v0 : ((typeof count) != ('undefined')) ? (count) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-7739853469585589292', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('-6784046800074520554', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
codealchemist_log_type_post('-3433645139030835672', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('2335217043388652233', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v3 : ((typeof count) != ('undefined')) ? (count) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v4 : ((typeof length) != ('undefined')) ? (length) : (undefined), v1 : ((typeof tooth) != ('undefined')) ? (tooth) : (undefined)}));
}
codealchemist_log_type_post('5408922685633789411', ({}));
codealchemist_log_type_pre('546831278318634297', ({}));
function Random(a, length){
codealchemist_log_type_pre('2118792618021585787', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('-6462641325856440419', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('-3094215124008537873', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
a.push(Math.floor((Math.random()) * (length)));
codealchemist_log_type_post('-3094215124008537873', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_post('-6462641325856440419', ({v0 : ((typeof a) != ('undefined')) ? (a) : (undefined), v2 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('2118792618021585787', ({v2 : ((typeof a) != ('undefined')) ? (a) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
}
codealchemist_log_type_post('546831278318634297', ({}));
codealchemist_log_type_pre('3059572039091999626', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
function TearDown(){
codealchemist_log_type_pre('-7599203837568865461', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
let length = (array_to_sort.length) - (1);
codealchemist_log_type_post('-7599203837568865461', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('7553841253959003025', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
for(let i = 0;(i) < (length);++i){
codealchemist_log_type_pre('-7965177816361634009', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-6532537502045818574', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
if((array_to_sort[i]) > (array_to_sort[(i) + (1)])){
codealchemist_log_type_pre('5793685962794136437', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_pre('-3300299428951342855', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
var temp_3300299428951342855 = ("Not sorted correctly: i = ") + (i);
codealchemist_log_type_post('-3300299428951342855', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
throw temp_3300299428951342855;
codealchemist_log_type_post('5793685962794136437', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('-6532537502045818574', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
codealchemist_log_type_post('-7965177816361634009', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined)}));
}
codealchemist_log_type_post('7553841253959003025', ({v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof length) != ('undefined')) ? (length) : (undefined)}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(array_to_sort) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
}
codealchemist_log_type_post('3059572039091999626', ({}));
codealchemist_log_type_pre('-2904185520160638565', ({v1 : ((typeof SawSeq) != ('undefined')) ? (SawSeq) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v3 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
let SetupSaw1000 = (()=>SawSeq(array_to_sort, 1000, kLength));
codealchemist_log_type_post('-2904185520160638565', ({v0 : ((typeof SetupSaw1000) != ('undefined')) ? (SetupSaw1000) : (undefined)}));
codealchemist_log_type_pre('7806353067195251700', ({v1 : ((typeof SawSeq) != ('undefined')) ? (SawSeq) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v3 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
let SetupSaw500 = (()=>SawSeq(array_to_sort, 500, kLength));
codealchemist_log_type_post('7806353067195251700', ({v0 : ((typeof SetupSaw500) != ('undefined')) ? (SetupSaw500) : (undefined)}));
codealchemist_log_type_pre('1957992770488982901', ({v1 : ((typeof SawSeq) != ('undefined')) ? (SawSeq) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v3 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
let SetupSaw200 = (()=>SawSeq(array_to_sort, 200, kLength));
codealchemist_log_type_post('1957992770488982901', ({v0 : ((typeof SetupSaw200) != ('undefined')) ? (SetupSaw200) : (undefined)}));
codealchemist_log_type_pre('1957992770488982901', ({v1 : ((typeof SawSeq2) != ('undefined')) ? (SawSeq2) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v3 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
let SetupSaw200Sym = (()=>SawSeq2(array_to_sort, 200, kLength));
codealchemist_log_type_post('1957992770488982901', ({v0 : ((typeof SetupSaw200Sym) != ('undefined')) ? (SetupSaw200Sym) : (undefined)}));
codealchemist_log_type_pre('1957992770488982901', ({v1 : ((typeof SawSeq3) != ('undefined')) ? (SawSeq3) : (undefined), v2 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v3 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
let SetupSaw200Down = (()=>SawSeq3(array_to_sort, 200, kLength));
codealchemist_log_type_post('1957992770488982901', ({v0 : ((typeof SetupSaw200Down) != ('undefined')) ? (SetupSaw200Down) : (undefined)}));
codealchemist_log_type_pre('-4095053710237382954', ({v4 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined)}));
function SetupPreSortedHalfs(firstfn, secondfn){
codealchemist_log_type_pre('1816577267335569864', ({}));
(array_to_sort) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined)}));
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof firstfn) != ('undefined')) ? (firstfn) : (undefined), v2 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined)}));
firstfn(array_to_sort, kLengthHalf);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof firstfn) != ('undefined')) ? (firstfn) : (undefined), v2 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined)}));
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined), v0 : ((typeof secondfn) != ('undefined')) ? (secondfn) : (undefined)}));
secondfn(array_to_sort, kLengthHalf);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v2 : ((typeof kLengthHalf) != ('undefined')) ? (kLengthHalf) : (undefined), v0 : ((typeof secondfn) != ('undefined')) ? (secondfn) : (undefined)}));
}
codealchemist_log_type_post('-4095053710237382954', ({}));
codealchemist_log_type_pre('3385017166841214316', ({v3 : ((typeof Down) != ('undefined')) ? (Down) : (undefined), v1 : ((typeof SetupPreSortedHalfs) != ('undefined')) ? (SetupPreSortedHalfs) : (undefined), v2 : ((typeof Up) != ('undefined')) ? (Up) : (undefined)}));
let SetupUpDown = (()=>SetupPreSortedHalfs(Up, Down));
codealchemist_log_type_post('3385017166841214316', ({v0 : ((typeof SetupUpDown) != ('undefined')) ? (SetupUpDown) : (undefined)}));
codealchemist_log_type_pre('6914263207567536705', ({v1 : ((typeof SetupPreSortedHalfs) != ('undefined')) ? (SetupPreSortedHalfs) : (undefined), v2 : ((typeof Up) != ('undefined')) ? (Up) : (undefined)}));
let SetupUpUp = (()=>SetupPreSortedHalfs(Up, Up));
codealchemist_log_type_post('6914263207567536705', ({v0 : ((typeof SetupUpUp) != ('undefined')) ? (SetupUpUp) : (undefined)}));
codealchemist_log_type_pre('6914263207567536705', ({v2 : ((typeof Down) != ('undefined')) ? (Down) : (undefined), v1 : ((typeof SetupPreSortedHalfs) != ('undefined')) ? (SetupPreSortedHalfs) : (undefined)}));
let SetupDownDown = (()=>SetupPreSortedHalfs(Down, Down));
codealchemist_log_type_post('6914263207567536705', ({v0 : ((typeof SetupDownDown) != ('undefined')) ? (SetupDownDown) : (undefined)}));
codealchemist_log_type_pre('3385017166841214316', ({v2 : ((typeof Down) != ('undefined')) ? (Down) : (undefined), v1 : ((typeof SetupPreSortedHalfs) != ('undefined')) ? (SetupPreSortedHalfs) : (undefined), v3 : ((typeof Up) != ('undefined')) ? (Up) : (undefined)}));
let SetupDownUp = (()=>SetupPreSortedHalfs(Down, Up));
codealchemist_log_type_post('3385017166841214316', ({v0 : ((typeof SetupDownUp) != ('undefined')) ? (SetupDownUp) : (undefined)}));
codealchemist_log_type_pre('2064021973315452323', ({v2 : ((typeof Random) != ('undefined')) ? (Random) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v3 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v4 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
createSortSuite('Random', 1000, SortAsc, (()=>Random(array_to_sort, kLength)), TearDown);
codealchemist_log_type_post('2064021973315452323', ({v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-8567779135276838074', ({v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v2 : ((typeof Up) != ('undefined')) ? (Up) : (undefined), v3 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v4 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
createSortSuite('Up', 1000, SortAsc, (()=>Up(array_to_sort, kLength)), TearDown);
codealchemist_log_type_post('-8567779135276838074', ({v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-2468525112500947828', ({v2 : ((typeof Down) != ('undefined')) ? (Down) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v3 : ((typeof array_to_sort) != ('undefined')) ? (array_to_sort) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined), v4 : ((typeof kLength) != ('undefined')) ? (kLength) : (undefined)}));
createSortSuite('Down', 1000, SortAsc, (()=>Down(array_to_sort, kLength)), TearDown);
codealchemist_log_type_post('-2468525112500947828', ({v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v5 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-8858562869869636630', ({v2 : ((typeof SetupSaw1000) != ('undefined')) ? (SetupSaw1000) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('Saw1000', 1000, SortAsc, SetupSaw1000, TearDown);
codealchemist_log_type_post('-8858562869869636630', ({v2 : ((typeof SetupSaw1000) != ('undefined')) ? (SetupSaw1000) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-7456704940290743783', ({v2 : ((typeof SetupSaw500) != ('undefined')) ? (SetupSaw500) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('Saw500', 1000, SortAsc, SetupSaw500, TearDown);
codealchemist_log_type_post('-7456704940290743783', ({v2 : ((typeof SetupSaw500) != ('undefined')) ? (SetupSaw500) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('4096207852863642827', ({v2 : ((typeof SetupSaw200) != ('undefined')) ? (SetupSaw200) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('Saw200', 1000, SortAsc, SetupSaw200, TearDown);
codealchemist_log_type_post('4096207852863642827', ({v2 : ((typeof SetupSaw200) != ('undefined')) ? (SetupSaw200) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-8673440774236276035', ({v2 : ((typeof SetupSaw200Sym) != ('undefined')) ? (SetupSaw200Sym) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('Saw200Symmetric', 1000, SortAsc, SetupSaw200Sym, TearDown);
codealchemist_log_type_post('-8673440774236276035', ({v2 : ((typeof SetupSaw200Sym) != ('undefined')) ? (SetupSaw200Sym) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('8496605518269468925', ({v2 : ((typeof SetupSaw200Down) != ('undefined')) ? (SetupSaw200Down) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('Saw200Down', 1000, SortAsc, SetupSaw200Down, TearDown);
codealchemist_log_type_post('8496605518269468925', ({v2 : ((typeof SetupSaw200Down) != ('undefined')) ? (SetupSaw200Down) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('3564887147430895492', ({v2 : ((typeof SetupUpDown) != ('undefined')) ? (SetupUpDown) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('UpDown', 1000, SortAsc, SetupUpDown, TearDown);
codealchemist_log_type_post('3564887147430895492', ({v2 : ((typeof SetupUpDown) != ('undefined')) ? (SetupUpDown) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-2117094719970604213', ({v2 : ((typeof SetupUpUp) != ('undefined')) ? (SetupUpUp) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('UpUp', 1000, SortAsc, SetupUpUp, TearDown);
codealchemist_log_type_post('-2117094719970604213', ({v2 : ((typeof SetupUpUp) != ('undefined')) ? (SetupUpUp) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('5965115977438980227', ({v2 : ((typeof SetupDownDown) != ('undefined')) ? (SetupDownDown) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('DownDown', 1000, SortAsc, SetupDownDown, TearDown);
codealchemist_log_type_post('5965115977438980227', ({v2 : ((typeof SetupDownDown) != ('undefined')) ? (SetupDownDown) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
codealchemist_log_type_pre('-1223860758433726557', ({v2 : ((typeof SetupDownUp) != ('undefined')) ? (SetupDownUp) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
createSortSuite('DownUp', 1000, SortAsc, SetupDownUp, TearDown);
codealchemist_log_type_post('-1223860758433726557', ({v2 : ((typeof SetupDownUp) != ('undefined')) ? (SetupDownUp) : (undefined), v1 : ((typeof SortAsc) != ('undefined')) ? (SortAsc) : (undefined), v3 : ((typeof TearDown) != ('undefined')) ? (TearDown) : (undefined), v0 : ((typeof createSortSuite) != ('undefined')) ? (createSortSuite) : (undefined)}));
