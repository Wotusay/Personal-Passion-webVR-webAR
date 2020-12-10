AFRAME.registerComponent('random-model', {
    init: function() {
        const modelHead = document.querySelector('.randomHead');
        const modelBody = document.querySelector('.randomBody');

        let randomNumberGen = Math.floor(Math.random() * 6);
        console.log(randomNumberGen);

        if (randomNumberGen === 0 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }

        if (randomNumberGen === 1 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }

        if (randomNumberGen === 2 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }

        if (randomNumberGen === 3 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }

        if (randomNumberGen === 4 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }

        if (randomNumberGen === 5 ) {
            modelHead.setAttribute('src', '#player-head');
            modelBody.setAttribute('src', '#player-body');

        }
    }

});
