import test from 'tape';
import createFilter from '../../examples/simple-factory-encapsulation';

import random from '../helpers/random';

test('simple factory encapsulation filter.highPass()', nest => {
  const filter = createFilter({
    lowPassCutoff: 12,
    highPassCutoff: 5
  });

  nest.test('...with n < highPassCutoff', assert => {
    const msg = 'should return false for values below highPassCutoff';
    const actual = filter.highPass(random(0, 5));
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with n > highPassCutoff', assert => {
    const msg = 'should return true for values above highPassCutoff';
    const actual = filter.highPass(random(6, 10));
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});

test('simple factory encapsulation filter.lowPass()', nest => {
  const filter = createFilter({
    lowPassCutoff: 12,
    highPassCutoff: 5
  });

  nest.test('...with n < lowPassCutoff', assert => {
    const msg = 'should return true for values below lowPassCutoff';
    const actual = filter.lowPass(random(0, 12));
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with n > lowPassCutoff', assert => {
    const msg = 'should return false for values above lowPassCutoff';
    const actual = filter.lowPass(random(12, 20));
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
