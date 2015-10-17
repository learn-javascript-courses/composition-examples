import { BassAmp } from '../v1';

export class ChannelStrip extends BassAmp {
  constructor (options) {
    super(options);
    this.inputLevel = options.inputLevel;
  }
}
