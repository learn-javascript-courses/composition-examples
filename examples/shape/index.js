const rectangle = ({
  proto = {
    x: 1,
    y: 1,
    size: 1,
    rotation: '0deg'
  }, x, y, size, rotation }) => {

  const instance = Object.create(proto);
  if (x !== undefined) instance.x = x;
  if (y !== undefined) instance.y = y;
  if (size !== undefined) instance.size = size;
  if (rotation !== undefined) instance.rotation = rotation;

  return instance;
};

export default rectangle;
