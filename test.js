var noop = require('./')
var test = require('tape').test

test("no-op function", function(t) {
    function doIt(cb) {
        cb = cb || noop
        cb('test', 'some params')
    }

    t.plan(3)
    t.equal(typeof noop, 'function', 'is a function')

    doIt(function(arg) {
        t.equal(arg, 'test')
    })

    t.doesNotThrow(doIt)
})