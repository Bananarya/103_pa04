
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  username:String,
  passphrase: String,
  age:Number,
  userId: {type:ObjectId, ref:'user' }
} );

module.exports = mongoose.model( 'User', userSchema );
