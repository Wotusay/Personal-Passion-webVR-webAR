AFRAME.registerComponent('random-model', {
    init: function() {
        let el = this.el;
        console.log(el);

        let randomNumberGen = Math.floor(Math.random() * 6);

        console.log(randomNumberGen);
    }

});
