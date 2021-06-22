
const timeMethods  = ( ) => {
      Date.prototype.dateJSON = function() {
          return {
            time :  this.timeNow() ,
            date :  this.dateNow() ,
            month : this.returnMonth() ,
            day :   this.returnDay()
          }
      }

      Date.prototype.timeNow = function() {
        var h = addZero( this.getHours());
        var m = addZero( this.getMinutes());
        var s = addZero( this.getSeconds());
        return h + ':' + m + ":" + s;
      }

      Date.prototype.dateNow = function() {
          return `${ addZero( this.getDate() )}/${ addZero( this.getMonth() + 1 ) }/${ this.getFullYear() }`;
      }

      Date.prototype.returnMonth = function() {
      	let monthVal = this.getMonth();
        return months[ monthVal ];
      }

      // return week.
      Date.prototype.returnDay = function() {
      	 let weekVal = this.getDay();
         return days[ weekVal ];
      }

      Date.prototype.hourDifference = function( timeB ) {
        var aHours = addZero( this.getHours());
        var bHours = addZero(timeB.getHours());

        if ( bHours > aHours   ) {
            return bHours - aHours;
        }
        if ( bHours === aHours ) {
        		var aMins = addZero(this.getMinutes());
            var bMins = addZero(timeB.getMinutes());
            return bMins - aMins;
        }
      }
}

const timeMiddleware = ( function ( ) {
    var done = false;
    return function ( next ) {
      if (done) {
          timeMethods();
          next( );
      } else {
          done = true;
          next();
      }
    }
})();

module.exports.timeMiddleware = timeMiddleware;
module.exports.datePrototype  = timeMethods;
