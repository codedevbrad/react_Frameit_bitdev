
/** 
 * @param ms: time to wait 
 * */

module.exports = ( { wait } ) => {

    let time = wait;

    // ms
    if ( wait.includes('ms') ) {
        let timeConvertedByMs = parseInt( time.split('ms')[0] );
        time = timeConvertedByMs;
    }

    // s
    else if ( wait.includes('s') ) {
        let timeConvertedBySec = parseInt( time.split('s')[0] );
        time = timeConvertedBySec * 1000;
    }

    else {
        time = parseInt( wait );
    }

    return new Promise( resolve => setTimeout( resolve , time ) )
};
