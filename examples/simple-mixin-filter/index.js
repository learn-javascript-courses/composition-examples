const highPass = {
  cutoff: 5,

  highPass (n) {
    return n >= this.cutoff;
  }
};

const lowPass = {
  cutoff: 5,

  lowPass (n) {
    return n <= this.cutoff;
  }
};

const filter = Object.assign({}, highPass, lowPass);

export default filter;
