const registerComponent = require('../core/component').registerComponent;


const MODEL_URLS = {
    Left: '../textures/hands/leftHandHigh.glb',
    Right:'../textures/hands/rightHandHigh.glb'
}

const ANIMATIONS = {
    open: 'Open',
    point: 'Point',
    pointThumb: 'Point + Thumb',
    fist: 'Fist',
    hold: 'Hold',
    thumbUp: 'Thumb Up'
  };

  const EVENTS = {};
EVENTS[ANIMATIONS.fist] = 'grip';
EVENTS[ANIMATIONS.thumbUp] = 'pistol';
EVENTS[ANIMATIONS.point] = 'pointing';