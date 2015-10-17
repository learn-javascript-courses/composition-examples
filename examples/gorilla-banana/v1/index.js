export class GuitarAmp {
  constructor ({ cabinet = 'default', distortion = '1', volume = '0' }) {
    Object.assign(this, {
      cabinet, distortion, volume
    });
  }
  apply () {
    return true;
  }
}

export class BassAmp extends GuitarAmp {
  constructor (options) {
    super(options);
    this.lowCut = options.lowCut;
  }
}
