import test from 'tape';
import { GuitarAmp, BassAmp } from '../../../examples/gorilla-banana/v1';

/*
GuitarAmp
  .distortion
  .volume
  .cabinet
  .process()

BassAmp
  .lowCut
  .volume
  .cabinet
  .process()
*/

test('GuitarAmp', assert => {
  const msg = 'should have volume, distortion, cabinet, and .process()';
  const level = 2;
  const cabinet = 'vintage';
  const amp = new GuitarAmp({
    volume: level,
    distortion: level,
    cabinet
  });
  const actual = {
    volume: amp.volume,
    distortion: amp.distortion,
    cabinet: amp.cabinet,
    process: amp.process()
  };
  const expected = {
    volume: level,
    distortion: level,
    cabinet,
    process: true
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('BassAmp', assert => {
  const msg = 'should have volume, lowCut, cabinet, and .process()';
  const level = 2;
  const cabinet = 'modern';
  const amp = new BassAmp({
    volume: level,
    lowCut: level,
    cabinet
  });
  const actual = {
    volume: amp.volume,
    lowCut: amp.lowCut,
    cabinet: amp.cabinet,
    process: amp.process()
  };
  const expected = {
    volume: level,
    lowCut: level,
    cabinet,
    process: true
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
