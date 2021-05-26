load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5067166127132333812', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-DataView-BigEndian', [], []);
codealchemist_log_type_post('-5067166127132333812', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2564609309728955461', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-DataView-LittleEndian', [], []);
codealchemist_log_type_post('2564609309728955461', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('6915210041656241452', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-DataView-Floats', [], []);
codealchemist_log_type_post('6915210041656241452', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('-4095365447063917299', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-TypedArray-BigEndian', [], []);
codealchemist_log_type_post('-4095365447063917299', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2920670237875840745', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-TypedArray-LittleEndian', [], []);
codealchemist_log_type_post('2920670237875840745', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('2397193328953860692', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
new BenchmarkSuite('DataViewTest-TypedArray-Floats', [], []);
codealchemist_log_type_post('2397193328953860692', ({v0 : ((typeof BenchmarkSuite) != ('undefined')) ? (BenchmarkSuite) : (undefined)}));
codealchemist_log_type_pre('1716927059712211322', ({v1 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
function doTestDataViewBigEndian(){
codealchemist_log_type_pre('-2941236968552898284', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
doIterations(false, true);
codealchemist_log_type_post('-2941236968552898284', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
}
codealchemist_log_type_post('1716927059712211322', ({}));
codealchemist_log_type_pre('-3456550274344867256', ({v1 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
function doTestDataViewLittleEndian(){
codealchemist_log_type_pre('-225494261975005430', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
doIterations(true, true);
codealchemist_log_type_post('-225494261975005430', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
}
codealchemist_log_type_post('-3456550274344867256', ({}));
codealchemist_log_type_pre('1193800350338576654', ({v1 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
function doTestTypedArrayBigEndian(){
codealchemist_log_type_pre('3025866414981190157', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
doIterations(false, false);
codealchemist_log_type_post('3025866414981190157', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
}
codealchemist_log_type_post('1193800350338576654', ({}));
codealchemist_log_type_pre('2680414069822647838', ({v1 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
function doTestTypedArrayLittleEndian(){
codealchemist_log_type_pre('5984762414936066398', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
doIterations(true, false);
codealchemist_log_type_post('5984762414936066398', ({v0 : ((typeof doIterations) != ('undefined')) ? (doIterations) : (undefined)}));
}
codealchemist_log_type_post('2680414069822647838', ({}));
codealchemist_log_type_pre('-1675185874849305967', ({v1 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
function doTestDataViewFloats(){
codealchemist_log_type_pre('2427030279561269048', ({v0 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
doFloatIterations(true);
codealchemist_log_type_post('2427030279561269048', ({v0 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
}
codealchemist_log_type_post('-1675185874849305967', ({}));
codealchemist_log_type_pre('8875678455596514566', ({v1 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
function doTestTypedArrayFloats(){
codealchemist_log_type_pre('3824328866247436675', ({v0 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
doFloatIterations(false);
codealchemist_log_type_post('3824328866247436675', ({v0 : ((typeof doFloatIterations) != ('undefined')) ? (doFloatIterations) : (undefined)}));
}
codealchemist_log_type_post('8875678455596514566', ({}));
codealchemist_log_type_pre('3684496358828427497', ({v7 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v8 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v4 : ((typeof makeBuffer) != ('undefined')) ? (makeBuffer) : (undefined)}));
function doIterations(littleEndian, dataView){
codealchemist_log_type_pre('-6901330510123218784', ({v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof makeBuffer) != ('undefined')) ? (makeBuffer) : (undefined)}));
var buffer = makeBuffer(1000, littleEndian);
codealchemist_log_type_post('-6901330510123218784', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof makeBuffer) != ('undefined')) ? (makeBuffer) : (undefined)}));
codealchemist_log_type_pre('-3490613269553461262', ({}));
var iterations = 10;
codealchemist_log_type_post('-3490613269553461262', ({v0 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_pre('5962775094772065208', ({v4 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof dataView) != ('undefined')) ? (dataView) : (undefined), v3 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v6 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v2 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v5 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
if(dataView){
codealchemist_log_type_pre('-1818208709138612108', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
codealchemist_log_type_pre('-8054457518431423821', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
for(var i = 0;(i) < (iterations);i++){
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
doOneIterationDV(buffer, littleEndian);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
}
codealchemist_log_type_post('-8054457518431423821', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
codealchemist_log_type_post('-1818208709138612108', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
}else {
codealchemist_log_type_pre('-1818208709138612108', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
codealchemist_log_type_pre('-8054457518431423821', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
for(var i = 0;(i) < (iterations);i++){
codealchemist_log_type_pre('2456945352105600493', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
doOneIterationJS(buffer, littleEndian);
codealchemist_log_type_post('2456945352105600493', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
}
codealchemist_log_type_post('-8054457518431423821', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
codealchemist_log_type_post('-1818208709138612108', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v4 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
}
codealchemist_log_type_post('5962775094772065208', ({v4 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof dataView) != ('undefined')) ? (dataView) : (undefined), v3 : ((typeof doOneIterationDV) != ('undefined')) ? (doOneIterationDV) : (undefined), v6 : ((typeof doOneIterationJS) != ('undefined')) ? (doOneIterationJS) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined), v5 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
}
codealchemist_log_type_post('3684496358828427497', ({}));
codealchemist_log_type_pre('-2182300963385687087', ({}));
function makeBuffer(size, littleEndian){
codealchemist_log_type_pre('-7066676499831472131', ({v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
var buffer = new ArrayBuffer((size) * (14));
codealchemist_log_type_post('-7066676499831472131', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var view = new DataView(buffer);
codealchemist_log_type_post('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-6871776334212134371', ({v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined), v2 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
for(var i = 0;(i) < (size);++i){
codealchemist_log_type_pre('-6506472854436230483', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('2852276110533639154', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setInt8((i) * (14), i);
codealchemist_log_type_post('2852276110533639154', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('4443145144308997062', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setUint8(((i) * (14)) + (1), i);
codealchemist_log_type_post('4443145144308997062', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-6232918143427383111', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setInt16(((i) * (14)) + (2), (i) * (i), littleEndian);
codealchemist_log_type_post('-6232918143427383111', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-2098497650601544235', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setUint16(((i) * (14)) + (4), (i) * (i), littleEndian);
codealchemist_log_type_post('-2098497650601544235', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-9220752633505033468', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setInt32(((i) * (14)) + (6), ((i) * (i)) * (i), littleEndian);
codealchemist_log_type_post('-9220752633505033468', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-1104913022919215498', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setUint32(((i) * (14)) + (10), ((i) * (i)) * (i), littleEndian);
codealchemist_log_type_post('-1104913022919215498', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_post('-6506472854436230483', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
}
codealchemist_log_type_post('-6871776334212134371', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined), v2 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var temp_3444589576563574513 = buffer;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2182300963385687087', ({}));
codealchemist_log_type_pre('-619636258310679144', ({}));
function doOneIterationDV(buffer, littleEndian){
codealchemist_log_type_pre('8887107388399914408', ({}));
var xor = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var view = new DataView(buffer);
codealchemist_log_type_post('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-1861128802324770674', ({v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v2 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
for(var i = 0;(i) < (view.byteLength);(i) += 14){
codealchemist_log_type_pre('-6780408368006127124', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-7781770834044198833', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getInt8(i);
codealchemist_log_type_post('-7781770834044198833', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('7997932104269752742', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getUint8((i) + (1));
codealchemist_log_type_post('7997932104269752742', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('6632645836782589837', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getInt16((i) + (2), littleEndian);
codealchemist_log_type_post('6632645836782589837', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-5542600055793157436', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getUint16((i) + (4), littleEndian);
codealchemist_log_type_post('-5542600055793157436', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-3270142631632650821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getInt32((i) + (6), littleEndian);
codealchemist_log_type_post('-3270142631632650821', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('4729350631969501297', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= view.getUint32((i) + (10), littleEndian);
codealchemist_log_type_post('4729350631969501297', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_post('-6780408368006127124', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
}
codealchemist_log_type_post('-1861128802324770674', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined), v2 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
}
codealchemist_log_type_post('-619636258310679144', ({}));
codealchemist_log_type_pre('5301285440448245703', ({v6 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v5 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
function doOneIterationJS(buffer, littleEndian){
codealchemist_log_type_pre('8887107388399914408', ({}));
var xor = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-7265530382583183660', ({}));
var reader;
codealchemist_log_type_post('-7265530382583183660', ({v0 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
codealchemist_log_type_pre('8861941589945416972', ({v4 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined)}));
if(littleEndian){
codealchemist_log_type_pre('-4125480875008338844', ({v1 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
codealchemist_log_type_pre('-485940338078892142', ({v1 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
(reader) = new LittleEndian(buffer);
codealchemist_log_type_post('-485940338078892142', ({v1 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
codealchemist_log_type_post('-4125480875008338844', ({v1 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
}else {
codealchemist_log_type_pre('-4125480875008338844', ({v1 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
codealchemist_log_type_pre('-485940338078892142', ({v1 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
(reader) = new BigEndian(buffer);
codealchemist_log_type_post('-485940338078892142', ({v1 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
codealchemist_log_type_post('-4125480875008338844', ({v1 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
}
codealchemist_log_type_post('8861941589945416972', ({v4 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined), v2 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined), v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof littleEndian) != ('undefined')) ? (littleEndian) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined)}));
codealchemist_log_type_pre('8051154942114724078', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v3 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v2 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
for(var i = 0;(i) < (buffer.byteLength);(i) += 14){
codealchemist_log_type_pre('-6990192051333933323', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-7781770834044198833', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getInt8(i);
codealchemist_log_type_post('-7781770834044198833', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('7997932104269752742', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getUint8((i) + (1));
codealchemist_log_type_post('7997932104269752742', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('6717092002776961925', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getInt16((i) + (2));
codealchemist_log_type_post('6717092002776961925', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('-4845371140323250378', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getUint16((i) + (4));
codealchemist_log_type_post('-4845371140323250378', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('572173167482387609', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getInt32((i) + (6));
codealchemist_log_type_post('572173167482387609', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_pre('5377115914132289380', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
(xor) ^= reader.getUint32((i) + (10));
codealchemist_log_type_post('5377115914132289380', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
codealchemist_log_type_post('-6990192051333933323', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v0 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
}
codealchemist_log_type_post('8051154942114724078', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v3 : ((typeof reader) != ('undefined')) ? (reader) : (undefined), v2 : ((typeof xor) != ('undefined')) ? (xor) : (undefined)}));
}
codealchemist_log_type_post('5301285440448245703', ({}));
codealchemist_log_type_pre('5191956726218348437', ({v6 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v7 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v3 : ((typeof makeFloatBuffer) != ('undefined')) ? (makeFloatBuffer) : (undefined)}));
function doFloatIterations(dataView){
codealchemist_log_type_pre('-4430336302088264755', ({v1 : ((typeof makeFloatBuffer) != ('undefined')) ? (makeFloatBuffer) : (undefined)}));
var buffer = makeFloatBuffer(1000);
codealchemist_log_type_post('-4430336302088264755', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v1 : ((typeof makeFloatBuffer) != ('undefined')) ? (makeFloatBuffer) : (undefined)}));
codealchemist_log_type_pre('-3490613269553461262', ({}));
var iterations = 10;
codealchemist_log_type_post('-3490613269553461262', ({v0 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_pre('6469981815759001102', ({v4 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof dataView) != ('undefined')) ? (dataView) : (undefined), v3 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v5 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v2 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
if(dataView){
codealchemist_log_type_pre('-8434733976285477994', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_pre('-9074671803028573397', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
for(var i = 0;(i) < (iterations);i++){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined)}));
doOneFloatIterationDV(buffer);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined)}));
}
codealchemist_log_type_post('-9074671803028573397', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_post('-8434733976285477994', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
}else {
codealchemist_log_type_pre('-8434733976285477994', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_pre('-9074671803028573397', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
for(var i = 0;(i) < (iterations);i++){
codealchemist_log_type_pre('4435534727832396699', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined)}));
doOneFloatIterationJS(buffer);
codealchemist_log_type_post('4435534727832396699', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined)}));
}
codealchemist_log_type_post('-9074671803028573397', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
codealchemist_log_type_post('-8434733976285477994', ({v3 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
}
codealchemist_log_type_post('6469981815759001102', ({v4 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof dataView) != ('undefined')) ? (dataView) : (undefined), v3 : ((typeof doOneFloatIterationDV) != ('undefined')) ? (doOneFloatIterationDV) : (undefined), v5 : ((typeof doOneFloatIterationJS) != ('undefined')) ? (doOneFloatIterationJS) : (undefined), v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof iterations) != ('undefined')) ? (iterations) : (undefined)}));
}
codealchemist_log_type_post('5191956726218348437', ({}));
codealchemist_log_type_pre('-2345128196934825269', ({}));
function makeFloatBuffer(size){
codealchemist_log_type_pre('5637895265104932921', ({v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
var buffer = new ArrayBuffer((size) * (16));
codealchemist_log_type_post('5637895265104932921', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof size) != ('undefined')) ? (size) : (undefined)}));
codealchemist_log_type_pre('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var view = new DataView(buffer);
codealchemist_log_type_post('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-6269942885711042156', ({v1 : ((typeof size) != ('undefined')) ? (size) : (undefined), v2 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
for(var i = 0;(i) < (size);i++){
codealchemist_log_type_pre('-4070782614694240157', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-6322679088961386052', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setFloat64((i) * (16), Math.log10((i) + (1)));
codealchemist_log_type_post('-6322679088961386052', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('7654059900343314238', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setFloat32(((i) * (16)) + (8), Math.sqrt(i));
codealchemist_log_type_post('7654059900343314238', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-2818510582546122730', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
view.setFloat32(((i) * (16)) + (12), Math.cos(i));
codealchemist_log_type_post('-2818510582546122730', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_post('-4070782614694240157', ({v1 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
}
codealchemist_log_type_post('-6269942885711042156', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v1 : ((typeof size) != ('undefined')) ? (size) : (undefined), v2 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-3444589576563574513', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var temp_3444589576563574513 = buffer;
codealchemist_log_type_post('-3444589576563574513', ({v0 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
return temp_3444589576563574513;
}
codealchemist_log_type_post('-2345128196934825269', ({}));
codealchemist_log_type_pre('-8150396328197640937', ({}));
function doOneFloatIterationDV(buffer){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var view = new DataView(buffer);
codealchemist_log_type_post('7441613632172864379', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-1174046854780938147', ({v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
for(var i = 0;(i) < (view.byteLength);(i) += 16){
codealchemist_log_type_pre('-8136010188796862529', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-1546346644905920887', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
(sum) += view.getFloat64(i);
codealchemist_log_type_post('-1546346644905920887', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('-8420958419331997936', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
(sum) += view.getFloat32((i) + (8));
codealchemist_log_type_post('-8420958419331997936', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_pre('3388316553338910470', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
(sum) += view.getFloat32((i) + (12));
codealchemist_log_type_post('3388316553338910470', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
codealchemist_log_type_post('-8136010188796862529', ({v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
}
codealchemist_log_type_post('-1174046854780938147', ({v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined), v1 : ((typeof view) != ('undefined')) ? (view) : (undefined)}));
}
codealchemist_log_type_post('-8150396328197640937', ({}));
codealchemist_log_type_pre('262178590454847801', ({}));
function doOneFloatIterationJS(buffer){
codealchemist_log_type_pre('8887107388399914408', ({}));
var sum = 0;
codealchemist_log_type_post('8887107388399914408', ({v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-7704888687287484300', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var float32array = new Float32Array(buffer);
codealchemist_log_type_post('-7704888687287484300', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined)}));
codealchemist_log_type_pre('-6106731831549102422', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined)}));
var float64array = new Float64Array(buffer);
codealchemist_log_type_post('-6106731831549102422', ({v2 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v0 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined)}));
codealchemist_log_type_pre('8592202952887075080', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v4 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v3 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
for(var i = 0;(i) < (buffer.byteLength);(i) += 16){
codealchemist_log_type_pre('-8093786045090583374', ({v3 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v1 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('-4251578254763338629', ({v1 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += float64array[(i) / (8)];
codealchemist_log_type_post('-4251578254763338629', ({v1 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('6273859261956997670', ({v1 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += float32array[((i) / (4)) + (2)];
codealchemist_log_type_post('6273859261956997670', ({v1 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_pre('7030105682096259318', ({v1 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
(sum) += float32array[((i) / (4)) + (3)];
codealchemist_log_type_post('7030105682096259318', ({v1 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
codealchemist_log_type_post('-8093786045090583374', ({v3 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v1 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v2 : ((typeof i) != ('undefined')) ? (i) : (undefined), v0 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('8592202952887075080', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v4 : ((typeof float32array) != ('undefined')) ? (float32array) : (undefined), v3 : ((typeof float64array) != ('undefined')) ? (float64array) : (undefined), v0 : ((typeof i) != ('undefined')) ? (i) : (undefined), v2 : ((typeof sum) != ('undefined')) ? (sum) : (undefined)}));
}
codealchemist_log_type_post('262178590454847801', ({}));
codealchemist_log_type_pre('-7064503214294238166', ({}));
function BigEndian(buffer, opt_byteOffset){
codealchemist_log_type_pre('-8681147445283296653', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
(this.uint8View_) = new Uint8Array(buffer, (opt_byteOffset) || (0));
codealchemist_log_type_post('-8681147445283296653', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
codealchemist_log_type_pre('-8385084970173147274', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
(this.int8View_) = new Int8Array(buffer, (opt_byteOffset) || (0));
codealchemist_log_type_post('-8385084970173147274', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
}
codealchemist_log_type_post('-7064503214294238166', ({}));
codealchemist_log_type_pre('-5035296468568336959', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getInt8) = (function (byteOffset){
codealchemist_log_type_pre('-6453121753196899960', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_6453121753196899960 = this.int8View_[byteOffset];
codealchemist_log_type_post('-6453121753196899960', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_6453121753196899960;
});
codealchemist_log_type_post('-5035296468568336959', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('-2865200160877458726', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getUint8) = (function (byteOffset){
codealchemist_log_type_pre('6672720526240803014', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_6672720526240803014 = this.uint8View_[byteOffset];
codealchemist_log_type_post('6672720526240803014', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_6672720526240803014;
});
codealchemist_log_type_post('-2865200160877458726', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('3253566995731738178', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getInt16) = (function (byteOffset){
codealchemist_log_type_pre('1720840814552871086', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_1720840814552871086 = (this.uint8View_[(byteOffset) + (1)]) | ((this.int8View_[byteOffset]) << (8));
codealchemist_log_type_post('1720840814552871086', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_1720840814552871086;
});
codealchemist_log_type_post('3253566995731738178', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('-3624077538175507249', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getUint16) = (function (byteOffset){
codealchemist_log_type_pre('-3290033565815903338', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_3290033565815903338 = (this.uint8View_[(byteOffset) + (1)]) | ((this.uint8View_[byteOffset]) << (8));
codealchemist_log_type_post('-3290033565815903338', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_3290033565815903338;
});
codealchemist_log_type_post('-3624077538175507249', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('-9033926155408001735', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getInt32) = (function (byteOffset){
codealchemist_log_type_pre('1723860068219973586', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_1723860068219973586 = (((this.uint8View_[(byteOffset) + (3)]) | ((this.uint8View_[(byteOffset) + (2)]) << (8))) | ((this.uint8View_[(byteOffset) + (1)]) << (16))) | ((this.int8View_[byteOffset]) << (24));
codealchemist_log_type_post('1723860068219973586', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_1723860068219973586;
});
codealchemist_log_type_post('-9033926155408001735', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('7125113265160422926', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
(BigEndian.prototype.getUint32) = (function (byteOffset){
codealchemist_log_type_pre('-3829158671601884019', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_3829158671601884019 = (((this.uint8View_[(byteOffset) + (3)]) + ((this.uint8View_[(byteOffset) + (2)]) << (8))) + ((this.uint8View_[(byteOffset) + (1)]) << (16))) + ((this.uint8View_[byteOffset]) * ((1) << (24)));
codealchemist_log_type_post('-3829158671601884019', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_3829158671601884019;
});
codealchemist_log_type_post('7125113265160422926', ({v0 : ((typeof BigEndian) != ('undefined')) ? (BigEndian) : (undefined)}));
codealchemist_log_type_pre('-7064503214294238166', ({}));
function LittleEndian(buffer, opt_byteOffset){
codealchemist_log_type_pre('-8681147445283296653', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
(this.uint8View_) = new Uint8Array(buffer, (opt_byteOffset) || (0));
codealchemist_log_type_post('-8681147445283296653', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
codealchemist_log_type_pre('-8385084970173147274', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
(this.int8View_) = new Int8Array(buffer, (opt_byteOffset) || (0));
codealchemist_log_type_post('-8385084970173147274', ({v1 : ((typeof buffer) != ('undefined')) ? (buffer) : (undefined), v2 : ((typeof opt_byteOffset) != ('undefined')) ? (opt_byteOffset) : (undefined)}));
}
codealchemist_log_type_post('-7064503214294238166', ({}));
codealchemist_log_type_pre('-5035296468568336959', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getInt8) = (function (byteOffset){
codealchemist_log_type_pre('-6453121753196899960', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_6453121753196899960 = this.int8View_[byteOffset];
codealchemist_log_type_post('-6453121753196899960', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_6453121753196899960;
});
codealchemist_log_type_post('-5035296468568336959', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
codealchemist_log_type_pre('-2865200160877458726', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getUint8) = (function (byteOffset){
codealchemist_log_type_pre('6672720526240803014', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_6672720526240803014 = this.uint8View_[byteOffset];
codealchemist_log_type_post('6672720526240803014', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_6672720526240803014;
});
codealchemist_log_type_post('-2865200160877458726', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
codealchemist_log_type_pre('4514938663403867004', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getInt16) = (function (byteOffset){
codealchemist_log_type_pre('-2449909171566387453', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_2449909171566387453 = (this.uint8View_[byteOffset]) | ((this.int8View_[(byteOffset) + (1)]) << (8));
codealchemist_log_type_post('-2449909171566387453', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_2449909171566387453;
});
codealchemist_log_type_post('4514938663403867004', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
codealchemist_log_type_pre('9077353844792081729', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getUint16) = (function (byteOffset){
codealchemist_log_type_pre('838526013540331661', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_838526013540331661 = (this.uint8View_[byteOffset]) | ((this.uint8View_[(byteOffset) + (1)]) << (8));
codealchemist_log_type_post('838526013540331661', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_838526013540331661;
});
codealchemist_log_type_post('9077353844792081729', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
codealchemist_log_type_pre('3114719746030879506', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getInt32) = (function (byteOffset){
codealchemist_log_type_pre('-2657525663421791856', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_2657525663421791856 = (((this.uint8View_[byteOffset]) | ((this.uint8View_[(byteOffset) + (1)]) << (8))) | ((this.uint8View_[(byteOffset) + (2)]) << (16))) | ((this.int8View_[(byteOffset) + (3)]) << (24));
codealchemist_log_type_post('-2657525663421791856', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_2657525663421791856;
});
codealchemist_log_type_post('3114719746030879506', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
codealchemist_log_type_pre('-2616142850473831792', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
(LittleEndian.prototype.getUint32) = (function (byteOffset){
codealchemist_log_type_pre('2573467321532837526', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
var temp_2573467321532837526 = (((this.uint8View_[byteOffset]) + ((this.uint8View_[(byteOffset) + (1)]) << (8))) + ((this.uint8View_[(byteOffset) + (2)]) << (16))) + ((this.uint8View_[(byteOffset) + (3)]) * ((1) << (24)));
codealchemist_log_type_post('2573467321532837526', ({v0 : ((typeof byteOffset) != ('undefined')) ? (byteOffset) : (undefined)}));
return temp_2573467321532837526;
});
codealchemist_log_type_post('-2616142850473831792', ({v0 : ((typeof LittleEndian) != ('undefined')) ? (LittleEndian) : (undefined)}));
