# no-op

[![locked](http://badges.github.io/stability-badges/dist/locked.svg)](http://github.com/badges/stability-badges)

Exports a function that does nothing. 

```js
var noop = require('no-op')

function foobar(cb) {
    cb = cb || noop
    cb('finished')
}
```

## Usage

[![NPM](https://nodei.co/npm/no-op.png)](https://nodei.co/npm/no-op/)

#### `noop()`

A function that does nothing.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/no-op/blob/master/LICENSE.md) for details.
