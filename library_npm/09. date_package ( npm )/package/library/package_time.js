function addZero(i) { if (i < 10) { i = "0" + i; } return i; }

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days   = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

function getRandomValue(min, max) {
  	return Math.floor( Math.random() * (max - min + 1) + min );
}

const toJSON = function( date ) {
    return {
      time :  timeNow( date ) ,
      date :  dateNow(date) ,
      month : returnMonth(date) ,
      day :   returnDay(date)
    }
}

const timeNow = function( date ) {
  var h = addZero( date.getHours());
  var m = addZero( date.getMinutes());
  var s = addZero( date.getSeconds());
  return h + ':' + m + ":" + s;
}

const dateNow = ( date ) => {
  return `${ addZero( date.getDate() )}/${ addZero( date.getMonth() + 1 ) }/${ date.getFullYear() }`;
}


const returnMonth = function( date) {
	let monthVal = date.getMonth();
  return months[ monthVal ];
}

// return week.
const returnDay = function( date ) {
	 let weekVal = date.getDay();
   return days[ weekVal ];
}

const hourDifference = function( timeA , timeB ) {
          var aHours = addZero( timeA.getHours());
          var bHours = addZero( timeB.getHours());

          if ( bHours > aHours   ) {
              return bHours - aHours;
          }
          if ( bHours === aHours ) {
              var aMins = addZero(timeA.getMinutes());
              var bMins = addZero(timeB.getMinutes());
              return bMins - aMins;
          }
}

const daysInMonth = ( month , year ) => {
   return new Date(year, month, 0).getDate();
};


function timeDifference ( date1 , date2 , timelessthan ) {
		var diff = date2.getTime() - date1.getTime();
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    let isNegative = diff.toString().charAt( 0 ) === '-';
    let time = ( hh * 60 ) + mm + ( ss / 60 );

    return {
    		isNegative : isNegative ,
        time : {
            hour: hh ,
            mins: mm ,
            secs: ss
        } ,
        differenceIsOk: {
            withinframe: time > timelessthan ,
            timeValue: time
        }
     }
}

const customMethods = { timeDifference , toJSON , timeNow , dateNow , returnMonth , returnDay , daysInMonth };

module.exports.time = customMethods;
