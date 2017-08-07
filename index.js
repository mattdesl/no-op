'use strict';
module.exports = function noop() {};

if (Object.freeze) {
  Object.freeze(module.exports);
}
