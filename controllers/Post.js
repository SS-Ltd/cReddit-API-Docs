'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.createPost = function createPost (req, res, next) {
  Post.createPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next, postId) {
  Post.deletePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editPost = function editPost (req, res, next, postId) {
  Post.editPost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.followPost = function followPost (req, res, next, postId) {
  Post.followPost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPostComments = function getPostComments (req, res, next, postId, sort) {
  Post.getPostComments(postId, sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hidePost = function hidePost (req, res, next, postId) {
  Post.hidePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lockPost = function lockPost (req, res, next, postId) {
  Post.lockPost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportPost = function reportPost (req, res, next, postId) {
  Post.reportPost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.savePost = function savePost (req, res, next, postId) {
  Post.savePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votePost = function votePost (req, res, next, postId) {
  Post.votePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
