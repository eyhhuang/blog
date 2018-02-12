'use strict';

var mongoose = require('mongoose'),
  Post = mongoose.model('Posts');

exports.list_all_posts = function(req, res){
  Post.find({},function(err,post)=>{
    if(err)
      res.status(500).send(err);
    //res.json(post);
    res.status(200).json({post})
  });
};

exports.create_a_post = function(req, res){
  //console.log(req.body);
  const title = req.body.title;
  if(!title)res.status(422).json({error: 'Title is required.'});
  const message = req.body.message;
  if(!message)res.status(422).json({error: 'Message is required.'});
  var new_post = new Post(
    title,
    content,
    created_date = new Date()
  );
  new_post.save(function(err,post){
    if(err)
      res.status(500).send(err);
    res.json(post);
  });
};
om
exports.read_a_post = function(req, res)=>{
  const id = req.params.postId;
  Post.findById(id, function(err,post){
    if(err)
      res.status(500).send(err);
    res.status(200).json(post);
  });
};
exports.edit_a_post = function(req, res){
  const id = req.params.postId;
  Post.findOneAndUpdate(id,req.body, {new: true}, function(err,post)=>{
    if(err)
      res.status(500).send(err);
    res.status(200).json(post);
  });
};

exports.comment_a_post = function(req,res){
  const id = req.params.postId;
  const user = req.body.user;
  const body = req.body.body;
  var data = {
    user,
    body,
    created_date: new Date()
  };
  Post.findOneAndUpdate(id,{$push: {comment: data}}, {safe=true}, function(err,post){
    if(err)
      res.status(500).send(err);
    res.status(200).json(post)
  })
}

exports.delete_a_comment = function(req,res)=>{
  const id = req.params.postId;
}

exports.delete_a_post = function(req,res)=>{
  const id = req.params.postId;
  Post.remove(id, function(err,post){
    if(err)
      res.status(500).send(err);
    res.status(200).json({message: "Post successfully deleted"})
  });
};
