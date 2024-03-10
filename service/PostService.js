'use strict';


/**
 * Create post
 *
 * no response value expected for this operation
 **/
exports.createPost = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete Post
 *
 * postId String ID of post to be deleted
 * no response value expected for this operation
 **/
exports.deletePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.editPost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Follow post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.followPost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets comments under a single post
 *
 * postId String 
 * sort String  (optional)
 * returns Feed
 **/
exports.getPostComments = function(postId,sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Hide post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.hidePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lock post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.lockPost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Report post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.reportPost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Save post
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.savePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Vote on a poll
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.votePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

