
function readUrlQueryString ( locationRead , urlId ) {
    const query = new URLSearchParams( locationRead );
    const url   = query.get( urlId );
    return url;
}

function getInitialState ( stateName , defaultValue ) {
    return localStorage.getItem( stateName || defaultValue;
}

function setInitialState ( stateName , value ) {
    return localStorage.setItem( stateName , value );
}

module.exports {
    getInitialState , setInitialState
}
