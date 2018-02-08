'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:{
    type: String,
    required("What's the title of your post?")
  },
  // message:{
  //   type:String,
  //   required("What's the content of your post?")
  // },
  Created_date:{
    type: Date,
    default: Date.now
  }
  // allowComment:{
  //   type: Boolean,
  //   required("Would you like to allow commenting?"),
  //   default: true
  // }
});
module.exports = mongoose.Model('Posts', PostSchema);
