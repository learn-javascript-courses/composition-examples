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

const createFilter = ({ highPassCutoff = 5, lowPassCutoff = 5 }) => {
  let target = {};

  target = highPass(target, { cutoff: highPassCutoff });
  target = lowPass(target, { cutoff: lowPassCutoff });

  return target;
};

export default createFilter;
