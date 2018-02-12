'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type:String,
    required:true
  }
   message:{
    type:String,
    required: true
  },
  created_date:{
    type: Date,
    default: Date.now
  },
  comment:[
    user:{
      type:String,
      required: true
    }
    message:{
      type:String,
      required:true
    }
    created_date:{
      type: Date,
      default: Date.now
    }
  ]
    type: map,
    default: NULL
  }
});
module.exports = mongoose.model('Posts', PostSchema);
