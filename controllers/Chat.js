'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.createGroup(userIDs) = function createGroup(userIDs) (req, res, next) {
  Chat.createGroup(userIDs)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inviteUsers(userIDs, groupID) = function inviteUsers(userIDs, groupID) (req, res, next) {
  Chat.inviteUsers(userIDs, groupID)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveGroup(groupID) = function leaveGroup(groupID) (req, res, next) {
  Chat.leaveGroup(groupID)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
