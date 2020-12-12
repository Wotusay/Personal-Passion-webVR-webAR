AFRAME.registerComponent('basket-counter', {
        init: function () {

            this.el.addEventListener('collisions', (e) => {
                console.log(e);
        });
        
    }
});

AFRAME.registerComponent('add-boxes', {
    init: function () {
        this.el.addEventListener('collisions', (e) => {
    });
}
});