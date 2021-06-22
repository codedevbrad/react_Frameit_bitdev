
// === new === //
function getRandomValue(min, max) {
  	return Math.floor( Math.random() * (max - min + 1) + min );
}

const availableTimes_forRandomGeneration = ( intervals , time_start , hour_end , keepTrails ) => {
    var x = intervals; //minutes interval
    var times = [ ]; // time array
    var tt = ( 60 * time_start ); // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for ( var i = 0; tt < hour_end * 60; i++ ) {
      var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
      var mm = (tt%60); // getting minutes of the hour in 0-55 format.
      var time = times[i] = ("0" + hh ).slice(-2) + ':' + ("0" + mm).slice(-2);
      if ( keepTrails ) {
       	   time = time + ap[Math.floor(hh/12) ]
      }
      tt = tt + x;
    }
    return times;
}

const chooseTime = ( start , end ) => {
		let d = new Date();
  	let t = availableTimes_forRandomGeneration( 15 , start , end , false );
    let rando = getRandomValue( 0 , t.length - 2 );
    return { picked: t[rando] , all: t.slice( rando + 1 , t.length ) }
}

module.exports.generateRandomTimes = (start , end  ) => {
      let chosen    = chooseTime( start , end );
      let pickupVal = getRandomValue( 0 , chosen.all.length - 1 );
      return obj = {
        orderTimeValue:  chosen.picked ,
        pickupTimeValue: chosen.all[ pickupVal ]
      }
}

module.exports.timeIsAcceptable = ( intervals , keepTrails ) => {
    var time_start = 8;
    var hour_end = 22;
    var x = intervals; //minutes interval
    var times = [ ]; // time array
    var tt = ( 60 * time_start ); // start time
    var ap = ['AM', 'PM']; // AM-PM
		var currTime = new Date();

    //loop to increment the time and push results in array
    for ( var i = 0; tt < hour_end * 60; i++ ) {
      var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
      var mm = ( tt % 60 ); // getting minutes of the hour in 0-55 format.

      if ( hh === time_start && ( currTime.getMinutes() + 15 <= mm ) ) {
           let time = ("0" + hh ).slice(-2) + ':' + ("0" + mm).slice(-2);
           if ( keepTrails ) {
           		time = time + ap[Math.floor(hh/12)];
           }
           times.push( time );
      }

      if ( hh === time_start + 1 && mm === 0 && currTime.getMinutes() + 15 > 60 ) {
					 // the next hour from current hour. ignore if currTime > 60. then we miss the 00 from next hour.
      }
      else if ( hh > time_start) {
           let time = ("0" + hh ).slice(-2) + ':' + ("0" + mm).slice(-2);
           if ( keepTrails ) {
           		time = time + ap[Math.floor(hh/12)];
           }
           times.push( time );
      }
      tt = tt + x;
    }
    return times;
}
