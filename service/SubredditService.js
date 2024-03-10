'use strict';


/**
 * Create community
 *
 * no response value expected for this operation
 **/
exports.createSubreddit = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit subreddit settings
 * Update subreddit settings.
 *
 * body SubredditSettings User subreddit object
 * subreddit String 
 * returns SubredditSettings
 **/
exports.editSubredditSettings = function(body,subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "theUser",
  "description" : "Community description",
  "rules" : [ {
    "rule" : "Mahmoud",
    "appliesTo" : "Posts & comments"
  }, {
    "rule" : "Mahmoud",
    "appliesTo" : "Posts & comments"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve banned users
 * Retrieve banned users
 *
 * subreddit String 
 * no response value expected for this operation
 **/
exports.getBanned = function(subreddit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve edited posts for a subreddit
 * Retrieve the post in this subreddit \"HOT\".
 *
 * subreddit String 
 * returns Feed
 **/
exports.getEditedPosts = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve modqueue posts
 * Retrieve modqueue posts
 *
 * subreddit String 
 * returns Feed
 **/
exports.getModQueuePosts = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve moderator users
 * Retrieve moderator users
 *
 * subreddit String 
 * no response value expected for this operation
 **/
exports.getModerators = function(subreddit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve muted users
 * Retrieve muted users
 *
 * subreddit String 
 * no response value expected for this operation
 **/
exports.getMuted = function(subreddit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve reported posts
 * Retrieve reported posts
 *
 * subreddit String 
 * returns Feed
 **/
exports.getReportedPosts = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve spam posts
 * Retrieve spam posts
 *
 * subreddit String 
 * returns Feed
 **/
exports.getSpammedPosts = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get subreddit details
 * Called when user navigates to subreddit
 *
 * subreddit String 
 * sort String  (optional)
 * returns Community
 **/
exports.getSubreddit = function(subreddit,sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profilePicture" : "drive.creddit.com/test",
  "mods" : [ "[\"SlaxSplash\",\"Baroudy 14\",\"No_Animator_8210\"]", "[\"SlaxSplash\",\"Baroudy 14\",\"No_Animator_8210\"]" ],
  "members" : 1000,
  "name" : "r/cReddit_SW_Project",
  "banner" : "drive.creddit.com/test",
  "rules" : [ "[\"Rule 1\",\"Rule 2\",\"Rule 3\"]", "[\"Rule 1\",\"Rule 2\",\"Rule 3\"]" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve subreddits that user is a moderator
 * Retrieve subreddits that user is a moderator
 *
 * no response value expected for this operation
 **/
exports.getSubredditMod = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get subreddit settings
 * Retrieve subreddit settings to display
 *
 * subreddit String 
 * returns SubredditSettings
 **/
exports.getSubredditSettings = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "theUser",
  "description" : "Community description",
  "rules" : [ {
    "rule" : "Mahmoud",
    "appliesTo" : "Posts & comments"
  }, {
    "rule" : "Mahmoud",
    "appliesTo" : "Posts & comments"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve unmoderated posts
 * Retrieve unmoderated posts
 *
 * subreddit String 
 * returns Feed
 **/
exports.getUnmoderatedPosts = function(subreddit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

