import test from 'tape';
import { BassAmp } from '../../../examples/gorilla-banana/v1';

test('BassAmp', assert => {
  const msg = 'BassAmp should not have distortion';
  const actual = Boolean(new BassAmp({ cabinet: 'walnut' }).distortion);
  const expected = false;

  assert.equal(actual, expected, msg);
  assert.end();
});
