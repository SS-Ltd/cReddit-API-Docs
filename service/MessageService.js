'use strict';


/**
 * Create a message
 * Create message.
 *
 * body Message 
 * no response value expected for this operation
 **/
exports.createMessage = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a message
 * Delete message.
 *
 * messageId String ID of the message to be deleted
 * no response value expected for this operation
 **/
exports.deleteMessage = function(messageId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user messages
 * Retrieve user messages to display
 *
 * returns Inbox
 **/
exports.getUserMessages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "LIFE",
  "from" : "Team Backend",
  "text" : "El API sha8al :)"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user sent messages
 * Retrieve user messages that he has sent to display
 *
 * returns Message
 **/
exports.getUserSentMessages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "LIFE",
  "to" : "Silver_Flamingo",
  "text" : "Everything is gonna be great :)"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user unread messages
 * Retrieve user unread messages to display
 *
 * returns Inbox
 **/
exports.getUserUnreadMessages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "LIFE",
  "from" : "Team Backend",
  "text" : "El API sha8al :)"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Read all messages
 * Read all messages.
 *
 * no response value expected for this operation
 **/
exports.messageRead_all_messagesPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Report a messages
 * Report a messages.
 *
 * body MessageId_report_body 
 * messageId String ID of the message to be reported
 * no response value expected for this operation
 **/
exports.reportMessage = function(body,messageId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unread a specific message
 * Unread a specific message.
 *
 * body Message_unread_body 
 * no response value expected for this operation
 **/
exports.unreadMessage = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

