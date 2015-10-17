import test from 'tape';
import { ChannelStrip } from '../../../examples/gorilla-banana/v2';

test('ChannelStrip', assert => {
  const msg = 'should have inputLevel, lowCut, volume, and apply()';
  const level = 2;
  const channel = new ChannelStrip({
    inputLevel: level,
    lowCut: level,
    volume: level
  });
  const actual = channel;

  const expected = {
    inputLevel: level,
    lowCut: level,
    volume: level,
    apply: channel.apply
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
