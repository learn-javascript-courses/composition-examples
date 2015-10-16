const highPass = {
  cutoff: 5,                    // <--  .cutoff property
  filter (n) {                  // <--  .filter() is a method.
    return n >= this.cutoff;    // <--  this.cutoff refers to the
                                //      cutoff property above.
  }
};

export default highPass;
