AFRAME.registerComponent('hooping', {
        init: function() {

            // needs to be tested
            let counter = -1;
            const activityBoardBasket = document.querySelector('.progress__basket');

            this.el.addEventListener('collisions', (e) => {
                if (counter === 5) {
                    activityBoardBasket.setAttribute('color', `#10b240`);
                    activityBoardBasket.setAttribute('value', `Hoops made: ${counter}/5`)
                    return;
                } else {
                    counter++;
                    activityBoardBasket.setAttribute('value', `Hoops made: ${counter}/5`);
                }

            });
        
    }
});

const spawnBox = () => {
    let box = document.createElement('a-box');
    const boxPlace = document.querySelector('.scene')
    box.setAttribute('src', '#box');
    box.setAttribute('stretchable', '');
    box.setAttribute('grabbable', '');
    box.setAttribute('dynamic-body', 'angularDamping: 0.5; ');
    box.setAttribute('position', '-11.5 3.25 0');
    box.setAttribute('radius', '0.5');
    box.classList.add('throwable');

    boxPlace.appendChild(box);
};

AFRAME.registerComponent('add-boxes', {
    init: function () {
        let counter = 2; 
        const addText = document.querySelector('.add__button');
        const activityBoardBoxes = document.querySelector('.progress__boxes');

        // spawns even when collide with other objects
        this.el.addEventListener('collisions', (e) => {
            if (counter === 6 ){
                addText.setAttribute('value', 'Max boxes reached');
                activityBoardBoxes.setAttribute('color', `#10b240`);
                activityBoardBoxes.setAttribute('value', `Boxes placed: ${counter}/6`);
                return; 
            } else {
                counter++;
                spawnBox();
                activityBoardBoxes.setAttribute('value', `Boxes placed: ${counter}/6`);
            }
        });
    }
});


AFRAME.registerComponent('find-sticks', {
    init: function() {
        let counter = -5;
        const activityBoardSticks = document.querySelector('.progress__sticks');
        const sticks = document.querySelectorAll('.stick');
        sticks.forEach(stick => {
            stick.addEventListener('collisions', (e) => {
                if (counter === 5 ) {
                    activityBoardSticks.setAttribute('color', `#10b240`);
                    activityBoardSticks.setAttribute('value', `Sticks found: ${counter}/5`);
                }  
                if (counter >= 0) {
    
                    if (!e.target.classList.contains('found')) {
                        counter++;
                        activityBoardSticks.setAttribute('value', `Sticks found: ${counter}/5` );
                        e.target.classList.add('found');
                    }  
                    
                    if (e.target.classList.contains('found')) {
                        return;
                    }
    
                } else{
                    counter++;
                    return;
                }
            });

        });

    }
});