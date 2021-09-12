let { time } = require('./modules/package_time');
let { datePrototype , timeMiddleware  } = require('./modules/package_timeMethods');
let { datesBetween } = require('./modules/package_timeDifference');
let { generateRandomTimes , timeIsAcceptable } = require('./modules/package_randomDates');

module.exports = {
    time , datePrototype , timeMiddleware ,
    datesBetween ,
    generateRandomTimes , timeIsAcceptable
}
