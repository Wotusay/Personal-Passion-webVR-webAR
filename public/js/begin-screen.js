const buttonScale = "0.7 0.7 0.7";
const buttonUpScale = "0.9 0.9 0.9";
const dur = '500';
const buttonColor = '#000000';
const butttonRecolor = "#5348ea";
const reCollorAll = "#2f2d2d";
let codeKey = '';
let codes = [];

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

        const createMenu = document.querySelector('.create_menu');

        const numpadButons = document.querySelectorAll('.numpad');

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
            createMenu.setAttribute('visible','true');
            numpadButons.forEach(numpad => {
                numpad.classList.add('clickable');
            });

        })
    }
});

const replaceUrlParam = (url, paramName, paramValue) => {
    if(paramValue == null)
        paramValue = '';
    url = url.replace(/\?$/,'');
    const pattern = new RegExp('\\b('+paramName+'=).*?(&|$)')
    if(url.search(pattern)>=0){
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue 
};

AFRAME.registerComponent('numpad', {
    init: function(){
        const numpadButons = document.querySelectorAll('.numpad');
        const inputField = document.querySelector('.input_field');
        const submitButton = document.querySelector('.enter');

        this.el.addEventListener('mouseleave', e => {
            this.el.setAttribute('animation',`property:color; to:${buttonColor}; dur:${dur};`);

        });

        this.el.addEventListener('mouseenter', e => {
            this.el.setAttribute('animation',`property:color; to:${butttonRecolor}; dur:${dur};`);
        });

        this.el.addEventListener('click', e => {
            codeKey += this.el.id;

            inputField.setAttribute('value', codeKey);

            if(codeKey.length === 3) {
                codes.push(codeKey);

                numpadButons.forEach(numpadButton => {
                    numpadButton.classList.remove('clickable');
                    setTimeout(function() {
                        numpadButton.setAttribute('animation__done', `property:color; to:${reCollorAll}; dur:${dur};`);
                    }, 500);
                });

                submitButton.setAttribute('animation',`property:color; to:${buttonColor}; dur:${dur};`);
                submitButton.classList.add('clickable');

                submitButton.addEventListener('mouseleave', e => {
                    submitButton.setAttribute('animation',`property:color; to:${buttonColor}; dur:${dur};`);
                });
        
                submitButton.addEventListener('mouseenter', e => {
                    submitButton.setAttribute('animation',`property:color; to:${butttonRecolor}; dur:${dur};`);
                });

                submitButton.addEventListener('click', e => {
                    console.log(window.location.pathname) 

                    const url = window.location.href + 'privateroom.html';

                    window.location.href = replaceUrlParam(url,'code',codeKey);
                });

            };
            return codeKey;
        });

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