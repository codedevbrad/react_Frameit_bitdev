// =============== // ================= //
let axios = require('axios');

let findAddress = ( query , addressKey ) => {
      const address_url = 'https://ws.postcoder.com/pcw/' + addressKey + '/address/uk/' + query;
      return axios.get( address_url )
          .then(  obj => obj.data )
          .catch( err => err );
}

let generateCoordinates = async ( addresses , geoJsonKey ) => {
      let latLongs = [ ];

      var getCoordinate = async ( addressQuery ) => {
      			let fetched = await axios.get(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${ geoJsonKey }&searchtext=${ addressQuery }`)
                            .then(  res => res.data )
                            .then(  loc => loc )
                            .catch( err => console.log( err ));

             let filtered = fetched.Response.View[0].Result[0].Location;
             let address  = filtered.Address;
             let { District , County , City } = address;
             let addressObj = {
                District , County , City
             }
             let position = filtered.NavigationPosition[0];
             return { queryAddress: addressQuery , addressObj , position , complex: [] };
      };

      for( let i = 0; i < addresses.length; i++ ) {
             let query   = addresses[i];
             let mapData = await getCoordinate( query );
             latLongs.push( mapData );
      }
      return latLongs;
}

var generateNearbyAddresses = async ( [ lat , lng , radius ] , geoJsonKey ) => {

     let addresses = await axios.get( `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${ geoJsonKey }&mode=retrieveAddresses&prox=`+lat +',' + lng + radius )
                         .then(  res => res.data )
                         .then( data => data.Response.View[0].Result );

     let clean = addresses.map( ( { Location }) => {
     			let { DisplayPosition , Address } = Location;
          return { queryAddress: Address.Label , address: Address , position: DisplayPosition , complex: []  };
     });
     return clean;
}

var combineApartments = ( arr ) => {
    return arr.reduce( (acc, current) => {
        const x = acc.find(item =>
        		item.position.Latitude  === current.position.Latitude &&
        		item.position.Longitude === current.position.Longitude
        );

        if (!x) { return acc.concat([current]); }
        else {
            x.complex.push( current );
            return acc;
        }
    } , [ ] );
}

let generateMapData = async ( [ lat , lng , radius ] ) => {
    let query = [ lat , lng , radius ];
    let addresses = await generateNearbyAddresses( query );
    let combined  = combineApartments( addresses );
    return combined;
}

let buildMapData = async ( array , geoJsonKey ) => {
    let cleanData = await generateCoordinates( array , geoJsonKey );
    let combined  = combineApartments( cleanData );
    return combined;
}

module.exports = {
    bundle: {
       generateMapData ,
       buildMapData
    } ,
    individual: {
       findAddress , generateCoordinates , generateNearbyAddresses
    }
}
