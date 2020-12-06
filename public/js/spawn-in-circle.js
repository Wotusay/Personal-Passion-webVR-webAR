AFRAME.registerComponent('spawn-in-circle', {
  schema: {
    radius: {type: 'number', default: 1}
  },

  init: function() {
    const el = this.el;
    const center = el.getAttribute('position');

    const angleRad = this.getRandomAngleInRadians();
    const circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    const worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
    el.setAttribute('position', worldPoint);

    const angleDeg = angleRad * 180 / Math.PI;
    const angleToCenter = -1 * angleDeg + 90;
    const rotationStr = '0 ' + angleToCenter + ' 0';
    el.setAttribute('rotation', rotationStr);
  },

  getRandomAngleInRadians: function() {
    return Math.random()*Math.PI*2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    x = Math.cos(angleRad)*radius;
    y = Math.sin(angleRad)*radius;
    return {x: x, y: y};
  }
});