const buttonScale = "0.7 0.7 0.7";
const buttonUpScale = "0.9 0.9 0.9";
const dur = '500';

AFRAME.registerComponent('start-event', {
    init: function() {

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })
        
        this.el.addEventListener('click', e =>  {
            this.el.setAttribute('visible', 'false');
        })
    }
});


AFRAME.registerComponent('public-prak', {
    init: function(){

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })
        
        this.el.addEventListener('click', e =>  {
            console.log(e);
        })
    }
})


