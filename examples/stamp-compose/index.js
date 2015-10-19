import { compose, init } from 'stamp-utils';

const highPass = init( ({ highPass: options } = {}, { instance }) => {
  instance.highPass = (n) => {
    return n >= options.cutoff;
  };

  return instance;
});

const lowPass = init( ({ lowPass: options } = {}, { instance }) => {
  instance.lowPass = (n) => {
    return n <= options.cutoff;
  };

  return instance;
});

const createFilter = compose(highPass, lowPass);

export default createFilter;
