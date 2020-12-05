const buttonScale = "0.7 0.7 0.7";
const buttonUpScale = "0.9 0.9 0.9";
const dur = '500';



AFRAME.registerComponent('start-event', {
    init: function() {
        const menu = document.querySelector('.menu');
        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })
        
        this.el.addEventListener('click', e =>  {
            this.el.setAttribute('visible', 'false');
            menu.setAttribute('visible', 'true');
        })
    }
});


AFRAME.registerComponent('public-park', {
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



AFRAME.registerComponent('private-park', {
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

