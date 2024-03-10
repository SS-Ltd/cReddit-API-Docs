'use strict';


/**
 * Create notification
 * Create notification
 *
 * no response value expected for this operation
 **/
exports.createNotification(HOT) = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all notifications for a user
 * Get all notifications for a user
 *
 * returns Notification
 **/
exports.getAllNotifications(HOT) = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resourceId" : "asnfjsvjknsdjkvnjdsnvj",
  "isRead" : true,
  "id" : "sjdshfjsVNJNSDJv",
  "type" : "message",
  "userId" : "asnfjsvjknsdjkvnjdsnvj"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get 5 recent notifications
 * Get 5 recent notifications
 *
 * no response value expected for this operation
 **/
exports.getRecentNotifications(HOT) = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Mark all notifications as read
 * Mark all notifications as read
 *
 * no response value expected for this operation
 **/
exports.markAllNotificationsAsRead(HOT) = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

