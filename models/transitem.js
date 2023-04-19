
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var toDoItemSchema = Schema( {
  description: String,
  amount: Number,
  category: String,
  userId: ObjectId
} );

module.exports = mongoose.model( 'transitem', toDoItemSchema );