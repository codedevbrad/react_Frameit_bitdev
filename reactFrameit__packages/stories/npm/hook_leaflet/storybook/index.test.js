
let { accessToken , geoJsonKey , addressKey } = require( './env' );
let { bundle , individual } = require('../module/methods' );
let fakeAddresses = require('./fakeAddresses');

// test methods ...
let { findAddress  , generateCoordinates , generateNearbyAddresses } = individual;
let { buildMapData , generateMapData } = bundle;

let results = await findAddress( 'dornford house heale lane' , addressKey );

let result = await buildMapData( fakeAddresses , geoJsonKey );

