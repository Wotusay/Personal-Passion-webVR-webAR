AFRAME.registerComponent('random-model', {
    init: function() {
        let randomNumberGen = Math.floor(Math.random() * 6);
        const randomHead = 'randomHead';
        const randomBody = 'randomBody';

        if (randomNumberGen === 0 ) {
            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body');
            };
            
        };

        if (randomNumberGen === 1 ) {

            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head-o');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body-o');
            };

        };

        if (randomNumberGen === 2 ) {
            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head-p');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body-p');
            };
        };

        if (randomNumberGen === 3 ) {
            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head-b');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body-b');
            };
        };

        if (randomNumberGen === 4 ) {
            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head-r');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body-r');
            };
        };

        if (randomNumberGen === 5 ) {
            if (this.el.className === randomHead){
                this.el.setAttribute('src', '#player-head-y');
            };

            if (this.el.className === randomBody) {
                this.el.setAttribute('src', '#player-body-y');
            };
        };
    }

});
