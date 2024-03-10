'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.createMessage = function createMessage (req, res, next, body) {
  Message.createMessage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMessage = function deleteMessage (req, res, next, messageId) {
  Message.deleteMessage(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserMessages = function getUserMessages (req, res, next) {
  Message.getUserMessages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserSentMessages = function getUserSentMessages (req, res, next) {
  Message.getUserSentMessages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserUnreadMessages = function getUserUnreadMessages (req, res, next) {
  Message.getUserUnreadMessages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messageRead_all_messagesPOST = function messageRead_all_messagesPOST (req, res, next) {
  Message.messageRead_all_messagesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportMessage = function reportMessage (req, res, next, body, messageId) {
  Message.reportMessage(body, messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unreadMessage = function unreadMessage (req, res, next, body) {
  Message.unreadMessage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
