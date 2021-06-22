let { time } = require('./library/package_time');
let { datePrototype , timeMiddleware  } = require('./library/package_timeMethods');
let { datesBetween } = require('./library/package_timeDifference');
let { generateRandomTimes , timeIsAcceptable } = require('./library/package_randomDates');

module.exports = {
    time , datePrototype , timeMiddleware ,
    datesBetween ,
    generateRandomTimes , timeIsAcceptable
}
