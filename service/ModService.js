'use strict';


/**
 * Accept moderation invite
 * Accept moderation invite
 *
 * no response value expected for this operation
 **/
exports.acceptModInvite = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Approve a post
 * Approve a post.
 *
 * postId String ID of the post to be approved
 * no response value expected for this operation
 **/
exports.approvePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * invite a moderator
 * invite a moderator
 *
 * subredditId String ID of the subreddit to be moderated
 * no response value expected for this operation
 **/
exports.inviteMod = function(subredditId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Leave community moderation
 * Leave community moderation
 *
 * subredditId String 
 * no response value expected for this operation
 **/
exports.leaveCommunityMod = function(subredditId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * mute user in community
 * mute user in community
 *
 * subredditId String ID of the subreddit which the user should be muted
 * no response value expected for this operation
 **/
exports.muteUser = function(subredditId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * reject moderation invite
 * reject moderation invite
 *
 * no response value expected for this operation
 **/
exports.rejectModInvite = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * unmute user in community
 * unmute user in community
 *
 * subredditId String ID of the subreddit which the user should be unmuted
 * no response value expected for this operation
 **/
exports.unmuteUser = function(subredditId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

