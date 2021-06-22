
let express = require('express') ,
        app = express();

let { accessToken , geoJsonKey , addressKey } = require( './env' );
let { bundle , individual } = require('./module/methods' );
let fakeAddresses = require('./fakeAddresses');

// test methods ...
let { findAddress  , generateCoordinates , generateNearbyAddresses } = individual;
let { buildMapData , generateMapData } = bundle;

app.get('/' , async ( req , res ) => {
    let results = await findAddress( 'dornford house heale lane' , addressKey );
    try {
      res.status( 200 ).send( results );
    } catch ( err ) {
      res.status( 500 ).send( err );
    }
});

app.get('/bundleBuild' , async ( req , res ) => {
    try {
      let result = await buildMapData( fakeAddresses , geoJsonKey );
      res.status( 200 ).send( result );
    } catch( err ) {
      res.status( 500 ).send( err );
    }
});

app.listen( 5000 , ( ) => {
      console.log('started');
} );
