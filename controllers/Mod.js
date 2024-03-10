'use strict';

var utils = require('../utils/writer.js');
var Mod = require('../service/ModService');

module.exports.acceptModInvite = function acceptModInvite (req, res, next) {
  Mod.acceptModInvite()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.approvePost = function approvePost (req, res, next, postId) {
  Mod.approvePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inviteMod = function inviteMod (req, res, next, subredditId) {
  Mod.inviteMod(subredditId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveCommunityMod = function leaveCommunityMod (req, res, next, subredditId) {
  Mod.leaveCommunityMod(subredditId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.muteUser = function muteUser (req, res, next, subredditId) {
  Mod.muteUser(subredditId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rejectModInvite = function rejectModInvite (req, res, next) {
  Mod.rejectModInvite()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unmuteUser = function unmuteUser (req, res, next, subredditId) {
  Mod.unmuteUser(subredditId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
