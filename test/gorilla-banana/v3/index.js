import test from 'tape';
import {
  GuitarAmp,
  BassAmp,
  ChannelStrip
} from '../../../examples/gorilla-banana/v3';

import { apply } from '../../../examples/gorilla-banana/v3/components';

test('GuitarAmp', assert => {
  const msg = 'should have distortion, volume, cabinet and apply()';
  const level = 2;
  const cabinet = 'vintage';

  const actual = GuitarAmp({
    distortion: level,
    volume: level,
    cabinet
  });
  const expected = {
    distortion: level,
    volume: level,
    cabinet,
    apply: apply.apply
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('BassAmp', assert => {
  const msg = 'should have volume, lowCut, cabinet and apply()';
  const level = 2;
  const cabinet = 'vintage';

  const actual = BassAmp({
    lowCut: level,
    volume: level,
    cabinet
  });
  const expected = {
    lowCut: level,
    volume: level,
    cabinet,
    apply: apply.apply
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('ChannelStrip', assert => {
  const msg = 'should have inputLevel, lowCut, volume, and apply()';
  const level = 2;

  const actual = ChannelStrip({
    inputLevel: level,
    lowCut: level,
    volume: level
  });
  const expected = {
    inputLevel: level,
    lowCut: level,
    volume: level,
    apply: apply.apply
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
