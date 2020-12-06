const buttonScale = "0.7 0.7 0.7";
const buttonUpScale = "0.9 0.9 0.9";
const dur = '500';
const buttonColor = '#000000';
const butttonRecolor = "#5348ea";
let codeKey = '';

AFRAME.registerComponent('start-event', {
    init: function() {
        const privateButton = document.querySelector('.private');
        const publicButton = document.querySelector('.public');

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
            privateButton.classList.add('clickable');
            publicButton.classList.add('clickable');
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
        const publicButton = document.querySelector('.public');
        const menu = document.querySelector('.menu');
        const privateMenu = document.querySelector('.menu_private');
        const privateButtonCreate = document.querySelector('.create');
        const privateButtonJoin = document.querySelector('.join');

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
        })

        this.el.addEventListener('click', e =>  {
            this.el.classList.remove('clickable');
            menu.setAttribute('visible','false'); 
            publicButton.classList.remove('clickable');

            privateMenu.setAttribute('visible', 'true');
            privateButtonCreate.classList.add('clickable');
            privateButtonJoin.classList.add('clickable');
        })
    }
});

AFRAME.registerComponent('create', {
    init: function(){
        const createMenu = document.querySelector('.create_menu');
        const privateButtonJoin = document.querySelector('.join');
        const privateMenu = document.querySelector('.menu_private');
        const numpadButons = document.querySelectorAll('.numpad');

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);

        })
        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
 
        })
        this.el.addEventListener('click', e => {
            this.el.classList.remove('clickable');
            privateButtonJoin.classList.remove('clickable');
            privateMenu.setAttribute('visible','false');
            createMenu.setAttribute('visible','true');
            numpadButons.forEach(numpad => {
                numpad.classList.add('clickable');
            })
        })
    }
});

AFRAME.registerComponent('join', {
    init: function(){
        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);

        })
        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
 
        })
        this.el.addEventListener('click', e => {
            
        })
    }
});

AFRAME.registerComponent('join-menu', {
    init: function(){
        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);

        })
        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`);
 
        })
        this.el.addEventListener('click', e => {
            
        })
    }
});

AFRAME.registerComponent('numpad', {
    init: function(){
        const numpadButons = document.querySelectorAll('.numpad');
        const inputField = document.querySelector('.input_field');

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:color; to:${buttonColor}; dur:${dur};`);

        })
        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:color; to:${butttonRecolor}; dur:${dur};`);
 
        })
        this.el.addEventListener('click', e => {
            codeKey += this.el.id;

            inputField.setAttribute('value', codeKey);

            if(codeKey.length === 3) {
                numpadButons.forEach(numpadButton => {
                    numpadButton.classList.remove('clickable');
                });
            };
            return codeKey;
        });

    }
});

AFRAME.registerComponent('create-menu', {
    init: function(){

    }
});



AFRAME.registerComponent('back', {
    init: function(){
        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonScale}; dur:${dur};`);
        })
        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:scale; to:${buttonUpScale}; dur:${dur};`); 
        })
        this.el.addEventListener('click', e => {
            
        })
    }
});