const compose = (...args) => {
  return function factory (...factoryArgs) {
    let instance = {};

    args.forEach((f) => {
      const i = f(instance, ...factoryArgs);

      if (i) {
        instance = i;
      }
    });

    return instance;
  };
};

const highPass = (target = {}, { cutoff = 5 } = {}) => {
  target.highPass = (n) => {
    return n >= cutoff;
  };
  return target;
};

const lowPass = (target = {}, { cutoff = 5 } = {}) => {
  target.lowPass = (n) => {
    return n <= cutoff;
  };
  return target;
};

const createFilter = compose(highPass, lowPass);

export default createFilter;
