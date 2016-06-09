'use strict';

require('mocha');
var assert = require('assert');
var pick = require('./');

describe('gulp-pick-keys', function() {
  it('should export a function', function() {
    assert.equal(typeof pick, 'function');
  });

  it('should export an object', function() {
    assert(pick);
    assert.equal(typeof pick, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      pick();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
