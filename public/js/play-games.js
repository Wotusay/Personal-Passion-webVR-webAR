AFRAME.registerComponent('hooping', {
        init: function() {
            let counter = 0;
            const activityBoardBasket = document.querySelector('.progress__basket');

            this.el.addEventListener('collisions', (e) => {
                if (counter === 5) {
                    activityBoardBasket.setAttribute('value', `#10b240`);
                    activityBoardBasket.setAttribute('color', `Hoops made: ${counter}/5`)
                    return;
                }
                console.log(e);
                counter++;
                activityBoardBasket.setAttribute('value', `Hoops made: ${counter}/5`);
            });
        
    }
});

const spawnBox = () => {
    let box = document.createElement('a-box');
    const boxPlace = document.querySelector('.allboxes')
    console.log(box);
    box.setAttribute('src', '#box');
    box.setAttribute('stretchable', '');
    box.setAttribute('grabbable', '');
    box.setAttribute('dynamic-body', 'angularDamping: 0.5; ');
    box.setAttribute('position', '-11.5 3.25 0');
    box.setAttribute('radius', '0.5');
    box.classList.add('throwable');

    console.log(box);
    boxPlace.appendChild(box);
};

AFRAME.registerComponent('add-boxes', {
    init: function () {
        let counter = 2; 
        const addText = document.querySelector('.add__button');
        const activityBoardBoxes = document.querySelector('.progress__boxes');

        this.el.addEventListener('collisions', (e) => {
            if (counter === 8 ){
                addText.setAttribute('value', 'Max boxes reached');
                activityBoardBoxes.setAttribute('color', `#10b240`);
                activityBoardBoxes.setAttribute('value', `Boxes placed: ${counter}/8`);
                return; 
            } else {
                console.log(e);
                counter++;
                spawnBox();
                console.log(counter);
                activityBoardBoxes.setAttribute('value', `Boxes placed: ${counter}/8`);
            }
        });
    }
});