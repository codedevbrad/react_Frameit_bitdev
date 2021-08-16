
/*
    1. define your model first.
    2. it then creates the model
    3.

*/
{
    service: People' ,
    data: {
      name : String ,
      age : number
    } ,
}

// creates / People
service.controller.js
service.model.js
service.database.js


// service.model

const mongoose = require('mongoose');
// schema object
const People__Schema = new mongoose.Schema ({
  name:  { type: String } ,
   age:  { type: String }
});

module.exports = mongoose.model( 'people' , People__Schema );



 // service.database

 update__people() {

 }

 async_update__people() {

 }

 delete__people() {

 }

 async_delete__People() {

 }


// service.controller

module.exports.get__People   = ( req , res , next ) => {
    People.find( )
          .then( data => res.status( 200 ).send( data ) )
          .catch( err => res.status( 500 ).send(  err ) );
}

module.exports.get__PeopleId = ( req , res , next ) => {

    let { userId } = req.query;

    People.findById( userId )
          .then( data => res.status( 200 ).send( data ) )
          .catch( err => res.status( 500 ).send(  err ) );
}

module.exports.post__People = ( req , res , next ) => {
    let { name , age } = req.body;
    if ( !name , !age ) return res.status( 500 ).send( 'missing fields' );

    People.findById( userId )
          .then( data => res.status( 200 ).send( data ) )
          .catch( err => res.status( 500 ).send(  err ) );
}

module.exports.update__People = ( req , res , next ) => {
    let objectChange = { };

    People.findByIdAndUpdate( userId  , { objectChange } , { new : true } )
          .then( data => res.status( 200 ).send( data ) )
          .catch( err => res.status( 500 ).send(  err ) );
}

module.exports.delete__People = ( req , res , next ) => {
    People.findByIdAndRemove( userId )
          .then( data => res.status( 200 ).send( data ) )
          .catch( err => res.status( 500 ).send(  err ) );
}
