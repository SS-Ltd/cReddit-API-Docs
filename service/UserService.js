'use strict';


/**
 * Block Community
 * Block a specific community.
 *
 * subreddit String Name of the community to block
 * no response value expected for this operation
 **/
exports.blockCommunity = function(subreddit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Block User
 * Block a specific user.
 *
 * username String Username of the user to block
 * no response value expected for this operation
 **/
exports.blockUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Allows user to change email
 * Change user email address.
 *
 * body ChangeEmail 
 * no response value expected for this operation
 **/
exports.changeEmail = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Change password (for when user doesn't remember password and follows link in email)
 *
 * body ChangePassword 
 * no response value expected for this operation
 **/
exports.changePassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Clear user history
 * Clear user browsing history.
 *
 * no response value expected for this operation
 **/
exports.clearHistory = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create user (Signup)
 * Register a new user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user
 *
 * no response value expected for this operation
 **/
exports.deleteUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit user settings
 * Update user settings.
 *
 * body UserSettings User settings object
 * returns UserSettings
 **/
exports.editUserSettings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Egypt",
  "preferences" : {
    "socialLinks" : [ {
      "displayName" : "El twitter bta3y",
      "platform" : "twitter",
      "url" : "https://twitter.com/faUwUsa"
    }, {
      "displayName" : "El twitter bta3y",
      "platform" : "twitter",
      "url" : "https://twitter.com/faUwUsa"
    } ],
    "inboxMessagesNotif" : true,
    "repliesNotif" : true,
    "communityContentSort" : "top",
    "apple" : "apple id",
    "openNewTab" : true,
    "twitter" : "twitter handle",
    "followEmail" : true,
    "modNotif" : true,
    "upvotesNotif" : true,
    "cakeDayNotif" : true,
    "isActiveCommunityVisible" : true,
    "communityThemes" : true,
    "chatMessagesNotif" : true,
    "globalContentView" : "card",
    "chatRequests" : true,
    "showAdultContent" : true,
    "isContentVisible" : true,
    "google" : "jondoe@gmail.com",
    "mentionsNotif" : true,
    "newFollowerNotif" : true,
    "invitationNotif" : true,
    "commentsNotif" : true,
    "autoPlayMedia" : true,
    "allowFollow" : true,
    "darkMode" : true,
    "chatEmail" : true
  },
  "gender" : "Man",
  "displayName" : "theUser",
  "about" : "Hello world",
  "email" : "jondoe@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Follow User
 * Follow a specific user.
 *
 * username String Username of the user to follow
 * no response value expected for this operation
 **/
exports.followUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send an email to the user to reset password
 *
 * body ForgotPassword Send reset link
 * no response value expected for this operation
 **/
exports.forgotPassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send an email to the user to remind user of username
 *
 * body ForgotUsername Send username in an email
 * no response value expected for this operation
 **/
exports.forgotUsername = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user downvoted posts
 * Retrieve user's downvoted posts.
 *
 * username String 
 * returns Post
 **/
exports.getUserDownvotes = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : 50,
  "upvotes" : 1500,
  "pollVotes" : {
    "option3" : 40,
    "option1" : 10,
    "option2" : 20
  },
  "isDownvoted" : false,
  "isNSFW" : false,
  "isUpvoted" : true,
  "postId" : "350651awd651awd",
  "ownerId" : "350651awd651awd",
  "title" : "Hello World",
  "downvotes" : 100,
  "content" : "This is my content",
  "isFollowed" : true,
  "isSpoiler" : false,
  "ownerProfilePicture" : "drive.creddit.com/test",
  "uploadDate" : "06/03/2024 22:10:03",
  "children" : [ "", "" ],
  "isSaved" : true,
  "isLocked" : true,
  "communityProfilePicture" : "drive.creddit.com/test",
  "communityId" : "350651awd651awd"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user data
 * Retrieve information about a specific user.
 *
 * username String 
 * returns Overview
 **/
exports.getUserOverview = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "posts" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user settings
 * Retrieve user settings to display
 *
 * returns UserSettings
 **/
exports.getUserSettings = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Egypt",
  "preferences" : {
    "socialLinks" : [ {
      "displayName" : "El twitter bta3y",
      "platform" : "twitter",
      "url" : "https://twitter.com/faUwUsa"
    }, {
      "displayName" : "El twitter bta3y",
      "platform" : "twitter",
      "url" : "https://twitter.com/faUwUsa"
    } ],
    "inboxMessagesNotif" : true,
    "repliesNotif" : true,
    "communityContentSort" : "top",
    "apple" : "apple id",
    "openNewTab" : true,
    "twitter" : "twitter handle",
    "followEmail" : true,
    "modNotif" : true,
    "upvotesNotif" : true,
    "cakeDayNotif" : true,
    "isActiveCommunityVisible" : true,
    "communityThemes" : true,
    "chatMessagesNotif" : true,
    "globalContentView" : "card",
    "chatRequests" : true,
    "showAdultContent" : true,
    "isContentVisible" : true,
    "google" : "jondoe@gmail.com",
    "mentionsNotif" : true,
    "newFollowerNotif" : true,
    "invitationNotif" : true,
    "commentsNotif" : true,
    "autoPlayMedia" : true,
    "allowFollow" : true,
    "darkMode" : true,
    "chatEmail" : true
  },
  "gender" : "Man",
  "displayName" : "theUser",
  "about" : "Hello world",
  "email" : "jondoe@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user submitted posts
 * Retrieve user's submitted posts.
 *
 * username String 
 * returns Post
 **/
exports.getUserSubmitted = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : 50,
  "upvotes" : 1500,
  "pollVotes" : {
    "option3" : 40,
    "option1" : 10,
    "option2" : 20
  },
  "isDownvoted" : false,
  "isNSFW" : false,
  "isUpvoted" : true,
  "postId" : "350651awd651awd",
  "ownerId" : "350651awd651awd",
  "title" : "Hello World",
  "downvotes" : 100,
  "content" : "This is my content",
  "isFollowed" : true,
  "isSpoiler" : false,
  "ownerProfilePicture" : "drive.creddit.com/test",
  "uploadDate" : "06/03/2024 22:10:03",
  "children" : [ "", "" ],
  "isSaved" : true,
  "isLocked" : true,
  "communityProfilePicture" : "drive.creddit.com/test",
  "communityId" : "350651awd651awd"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user upvoted posts
 * Retrieve user's upvoted posts.
 *
 * username String 
 * returns Post
 **/
exports.getUserUpvotes = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : 50,
  "upvotes" : 1500,
  "pollVotes" : {
    "option3" : 40,
    "option1" : 10,
    "option2" : 20
  },
  "isDownvoted" : false,
  "isNSFW" : false,
  "isUpvoted" : true,
  "postId" : "350651awd651awd",
  "ownerId" : "350651awd651awd",
  "title" : "Hello World",
  "downvotes" : 100,
  "content" : "This is my content",
  "isFollowed" : true,
  "isSpoiler" : false,
  "ownerProfilePicture" : "drive.creddit.com/test",
  "uploadDate" : "06/03/2024 22:10:03",
  "children" : [ "", "" ],
  "isSaved" : true,
  "isLocked" : true,
  "communityProfilePicture" : "drive.creddit.com/test",
  "communityId" : "350651awd651awd"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user data
 * Retrieve information about a specific user.
 *
 * username String 
 * no response value expected for this operation
 **/
exports.getUserView = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Check if username is available
 * Check if a username is available for registration.
 *
 * username String 
 * no response value expected for this operation
 **/
exports.isUsernameAvailable = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logs user into the system using
 * Log in with username and password.
 *
 * body UserLogin 
 * no response value expected for this operation
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logs user into the system using google services
 * Log in with google OAuth token
 *
 * no response value expected for this operation
 **/
exports.loginUserGoogle = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send an email to the user to reset password
 *
 * body ResetPassword Send reset link
 * no response value expected for this operation
 **/
exports.resetPassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unblock
 *
 * subreddit String Name of the community to Unblock
 * no response value expected for this operation
 **/
exports.unblockCommunity = function(subreddit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unblock
 *
 * username String Username of the user to unblock
 * no response value expected for this operation
 **/
exports.unblockUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unfollow
 *
 * username String Username of the user to follow
 * no response value expected for this operation
 **/
exports.unfollowUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Email Verification
 * Verify user email
 *
 * refreshToken String 
 * no response value expected for this operation
 **/
exports.verifyUser = function(refreshToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

