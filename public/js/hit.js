AFRAME.registerComponent('resetBasket', {
        init: function () {

            const ballOne = document.querySelector('.ball1');
            const ballTwo = document.querySelector('.ball2');
            const basketsBalls = {ballOne, ballTwo};

            this.el.addEventListener('collisions', (e) => {

                console.log(e);
                basketsBalls.ballOne.setAttribute('position', {
                    x:13,
                    y:0.22,
                    z:-0.5
                });

                basketsBalls.ballTwo.setAttribute('position', {
                    x:13,
                    y:1.25,
                    z:-0.5
                });
                  
        });
    }
});


AFRAME.registerComponent('resetBoxes', {
    init: function () {
        this.el.addEventListener('collisions', (e) => {

    });
}
});