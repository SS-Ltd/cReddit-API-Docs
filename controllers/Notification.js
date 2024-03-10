'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.createNotification(HOT) = function createNotification(HOT) (req, res, next) {
  Notification.createNotification(HOT)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllNotifications(HOT) = function getAllNotifications(HOT) (req, res, next) {
  Notification.getAllNotifications(HOT)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecentNotifications(HOT) = function getRecentNotifications(HOT) (req, res, next) {
  Notification.getRecentNotifications(HOT)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markAllNotificationsAsRead(HOT) = function markAllNotificationsAsRead(HOT) (req, res, next) {
  Notification.markAllNotificationsAsRead(HOT)()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
