
### hooking up the functions to the Date constructor.

```javascript
let { time , timeMiddleware , timeDifference , datesBetween } = require('@codedevbrad/better_date');

time();

// or
app.use( ( req , res , next ) => timeMiddleware( next ));

```

### set a random date.
```javascript
let date = new Date();
date.setRandomDate( year , month , day );
```
| perams | description | type |
| ------ | ----------- | ---- |
|  year  | set the year |Number |
| month  | should set a month from 0 - this current month | boolean  |
| day    | should set a month from 0 - this current day | boolean |

example: set a date for 2020. month should be any month from january to this current month. and the same for the day.
```javascript
date.setRandomDate( 2020 , true , true );
```

 ### returning date information

```javascript
console.log( date.dateJSON() );
{
  time: '19:27:37'  , // Date.prototype.timeNow
  date: '22/02/2020', // Date.prototype.dateNow
  month: 'February' , // Date.prototype.returnMonth
    day: 'Saturday'   // Date.prototype.returnDay
}
```

* Date.prototype.dateJSON
* Date.prototype.timeNow
* Date.prototype.dateNow
* Date.prototype.returnMonth
* Date.prototype.returnDay
* Date.prototype.hourDifference

### generating a start and end date.
```javascript
let chosen1 = datesBetween( 'day' ) ,
    chosen2 = datesBetween(' month' , 01 ) ,
    chosen3 = datesBetween( 'year' );

let { start , end } = chosen1;
console.log( start.dateJSON() , end.dateJSON() );
```
