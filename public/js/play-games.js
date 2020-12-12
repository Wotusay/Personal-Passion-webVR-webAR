AFRAME.registerComponent('basket-counter', {
        init: function() {

            this.el.addEventListener('collisions', (e) => {
                
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
            this.el.addEventListener('collisions', (e) => {
                if (counter === 7 ){
                    addText.setAttribute('value', 'Max boxes reached');
                    return; 
                } else {
                    console.log(e);
                    counter++;
                    spawnBox();
                    console.log(counter);
                    
                }
            });
        }
}
);