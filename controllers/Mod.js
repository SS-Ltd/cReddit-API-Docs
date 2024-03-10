'use strict';

var utils = require('../utils/writer.js');
var Mod = require('../service/ModService');

module.exports.acceptModInvite(postId) = function acceptModInvite(postId) (req, res, next) {
  Mod.acceptModInvite(postId)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.approvePost(postId) = function approvePost(postId) (req, res, next) {
  Mod.approvePost(postId)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inviteMod(postId) = function inviteMod(postId) (req, res, next) {
  Mod.inviteMod(postId)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveCommunityMod(communityID) = function leaveCommunityMod(communityID) (req, res, next, communityId) {
  Mod.leaveCommunityMod(communityID)(communityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.muteUser(communityID) = function muteUser(communityID) (req, res, next) {
  Mod.muteUser(communityID)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rejectModInvite(postId) = function rejectModInvite(postId) (req, res, next, communityId) {
  Mod.rejectModInvite(postId)(communityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unmuteUser(communityID) = function unmuteUser(communityID) (req, res, next) {
  Mod.unmuteUser(communityID)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
