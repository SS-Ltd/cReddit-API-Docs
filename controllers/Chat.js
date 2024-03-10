'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.createGroup = function createGroup (req, res, next) {
  Chat.createGroup()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inviteUsers = function inviteUsers (req, res, next) {
  Chat.inviteUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveGroup = function leaveGroup (req, res, next) {
  Chat.leaveGroup()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
