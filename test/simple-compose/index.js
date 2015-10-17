import test from 'tape';
import createFilter from '../../examples/simple-compose';

const filter = createFilter();

import random from '../helpers/random';
const cutoff = 5;
const max = 10;

test('simple compose filter.highPass()', nest => {
  nest.test('...with n > cutoff', assert => {
    const msg = 'should return true for values above cutoff';
    const actual = filter.highPass(random(cutoff, max));
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with n < cutoff', assert => {
    const msg = 'should return false for values below cutoff';
    const actual = filter.highPass(random(0, cutoff - 1));
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});

test('simple compose filter.lowPass()', nest => {
  nest.test('...with n > cutoff', assert => {
    const msg = 'should return false for values above cutoff';
    const actual = filter.lowPass(random(cutoff, max));
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with n < cutoff', assert => {
    const msg = 'should return true for values below cutoff';
    const actual = filter.lowPass(random(0, cutoff - 1));
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
