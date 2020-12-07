
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


AFRAME.registerComponent('private-room', {
    init: function() {
        let el = this.el;
        let params = getUrlParams();

        if(!params.code) {
            window.history.back(); 
        }

    }
});