function callback(a, b) {
    console.log('callback', a, b);
}
function callee(msg, callback) {
    console.log(msg);
    console.log('before function call');
    callback(1, 2);
}
console.log('before function call');
callee('callee', function () {
    console.log('before function call');
    console.log('callback2');
});
console.log('before function call');
callee('callee', __ast__callback__ast__);
function __ast__callback__ast__(__ast__var__0, __ast__var__1) {
    console.log('before function call');
    callback(__ast__var__0, __ast__var__1);
}