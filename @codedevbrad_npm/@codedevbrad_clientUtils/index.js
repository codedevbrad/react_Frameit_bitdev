const browserSpecificAnimation = require('./modules/helper.browserAnimations');
const delay          = require('./modules/helper.delay');
const detectViewport = require('./modules/helper.detectBrowserViewport');
const randomValue    = require('./modules/helper.randomValue');
const intersectAPI   = require('./modules/helper.detectIntersectObserver');
const elementObserve = require('./modules/helper.detectElementChange');
const { getInitialState , setInitialState } = require('./modules/helper.localStorage');

module.exports = {
    browserSpecificAnimation , delay , detectViewport , randomValue ,
    intersectAPI ,
    elementObserve ,
    getInitialState , setInitialState
}
