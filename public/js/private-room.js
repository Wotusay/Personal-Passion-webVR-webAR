// This is o get the code form the url.
const getUrlParams = () =>{
    let match;
    let pl = /\+/g;  // Regex for replacing addition symbol with a space
    let search = /([^&=]+)=?([^&]*)/g;
    let decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
    let query = window.location.search.substring(1);
    let urlParams = {};

    match = search.exec(query);
    while (match) {
      urlParams[decode(match[1])] = decode(match[2]);
      match = search.exec(query);
    }

    console.log(urlParams);
    return urlParams;
};

// Private room function.
AFRAME.registerComponent('private-room', {
    init: function() {
        let el = this.el;
        let params = getUrlParams();

        if(!params.code) {
            window.history.back(); 
        };

        const networkedSettings = `app: myApp; room: ${params.code}; debug: false; adapter: webrtc; audio: true;`;

        el.setAttribute('networked-scene', networkedSettings );
    }
});