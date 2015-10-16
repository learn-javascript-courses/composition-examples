import test from 'tape';
import shape from '../../examples/shape';

test('shape()', nest => {
  nest.test('...with prototype', assert => {
    const proto = shape({
      x: 10,
      y: 10,
      size: 1,
      rotation: '0deg'
    });
    const copy = shape({
      proto
    });

    proto.x = 20;

    const msg = 'should reflect changes to the prototype';
    const actual = {
      x: copy.x,
      y: copy.y,
      size: copy.size,
      rotation: copy.rotation
    };
    const expected = {
      x: 20,
      y: 10,
      size: 1,
      rotation: '0deg'
    };

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });

  nest.test('...with prototype', assert => {
    const originalX = 10;
    const proto = shape({
      x: originalX,
      y: 10,
      size: 1,
      rotation: '0deg'
    });
    const copy = shape({
      proto
    });

    copy.x = 2;

    const msg = 'local changes should not alter prototype';
    const actual = proto.x;
    const expected = originalX;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
