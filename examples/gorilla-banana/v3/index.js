import {
  distortion,
  volume,
  cabinet,
  lowCut,
  inputLevel,
  apply
} from './components.js';

/*
GuitarAmp
  .distortion
  .volume
  .cabinet
  .apply()

BassAmp
  .lowCut
  .volume
  .cabinet
  .apply()

ChannelStrip
  .inputLevel
  .lowCut
  .volume
  .apply()
*/

export const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, apply, options);
};

export const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, apply, options);
};

export const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, apply, options);
};
