'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.createNotification = function createNotification (req, res, next) {
  Notification.createNotification()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllNotifications = function getAllNotifications (req, res, next) {
  Notification.getAllNotifications()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecentNotifications = function getRecentNotifications (req, res, next) {
  Notification.getRecentNotifications()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markAllNotificationsAsRead = function markAllNotificationsAsRead (req, res, next) {
  Notification.markAllNotificationsAsRead()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
