import test from 'tape';
import highPass from '../../examples/highpass';

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

test('highPass.filter()', nest => {
  nest.test('...with n > 5', assert => {
    const msg = 'should return true for values above cutoff';
    const actual = highPass.filter(random(5, 10));
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with n > 5', assert => {
    const msg = 'should return false for values below cutoff';
    const actual = highPass.filter(random(0, 4));
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
