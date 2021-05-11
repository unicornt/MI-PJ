function callback() {
    console.log('callback');
}
function callee(msg, callback) {
    console.log(msg);
    console.log('before function call');
    callback();
}
console.log('before function call');
callee('callee', function () {
    console.log('before function call');
    console.log('callback2');
});
console.log('before function call');
callee('callee', __ast__callback__ast__);
function __ast__callback__ast__() {
    console.log('before function call');
    callback();
}