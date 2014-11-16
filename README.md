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

## see also

- [noop](https://www.npmjs.org/package/noop)
- [nop](https://github.com/supershabam/nop)
- [noop2](https://github.com/yoshuawuyts/noop2)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/no-op/blob/master/LICENSE.md) for details.
