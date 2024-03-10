'use strict';

var utils = require('../utils/writer.js');
var Subreddit = require('../service/SubredditService');

module.exports.createSubreddit = function createSubreddit (req, res, next) {
  Subreddit.createSubreddit()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSubredditSettings = function editSubredditSettings (req, res, next, body, subreddit) {
  Subreddit.editSubredditSettings(body, subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBanned = function getBanned (req, res, next, subreddit) {
  Subreddit.getBanned(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEditedPosts = function getEditedPosts (req, res, next, subreddit) {
  Subreddit.getEditedPosts(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModQueuePosts = function getModQueuePosts (req, res, next, subreddit) {
  Subreddit.getModQueuePosts(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModerators = function getModerators (req, res, next, subreddit) {
  Subreddit.getModerators(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMuted = function getMuted (req, res, next, subreddit) {
  Subreddit.getMuted(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportedPosts = function getReportedPosts (req, res, next, subreddit) {
  Subreddit.getReportedPosts(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSpammedPosts = function getSpammedPosts (req, res, next, subreddit) {
  Subreddit.getSpammedPosts(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubreddit = function getSubreddit (req, res, next, subreddit, sort) {
  Subreddit.getSubreddit(subreddit, sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditMod = function getSubredditMod (req, res, next) {
  Subreddit.getSubredditMod()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditSettings = function getSubredditSettings (req, res, next, subreddit) {
  Subreddit.getSubredditSettings(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnmoderatedPosts = function getUnmoderatedPosts (req, res, next, subreddit) {
  Subreddit.getUnmoderatedPosts(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
