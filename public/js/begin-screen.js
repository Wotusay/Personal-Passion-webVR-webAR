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

            this.el.parentNode.removeChild(this.el);
        })
    }
});

AFRAME.registerComponent('public-park', {
    init: function(){
        const menu = document.querySelector('.menu');
        const portalsHtml = document.querySelector('.portalsPublic');
        const portals = portalsHtml.getElementsByClassName('portal');
        const privateButton = document.querySelector('.private')

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })

        this.el.addEventListener('click', e =>  {
            menu.setAttribute('visible','false'); 
            portalsHtml.setAttribute('visible','true');
            portals[0].classList.add('clickable');
            portals[1].classList.add('clickable');
            portals[2].classList.add('clickable');
            this.el.classList.remove('clickable');
            privateButton.classList.remove('clickable')
        })
    }
});

AFRAME.registerComponent('private-park', {
    init: function(){

        this.el.addEventListener('mouseleave', e => {
            this.el.classList.remove('clickable');
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            console.log(this.el)
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })

        this.el.addEventListener('click', e =>  {

        })
    }
});

