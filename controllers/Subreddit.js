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

module.exports.getBanned(subreddit) = function getBanned(subreddit) (req, res, next, subreddit) {
  Subreddit.getBanned(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEditedPosts(subreddit) = function getEditedPosts(subreddit) (req, res, next, subreddit) {
  Subreddit.getEditedPosts(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModQueuePosts(subreddit) = function getModQueuePosts(subreddit) (req, res, next, subreddit) {
  Subreddit.getModQueuePosts(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModerators(subreddit) = function getModerators(subreddit) (req, res, next, subreddit) {
  Subreddit.getModerators(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMuted(subreddit) = function getMuted(subreddit) (req, res, next, subreddit) {
  Subreddit.getMuted(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportedPosts(subreddit) = function getReportedPosts(subreddit) (req, res, next, subreddit) {
  Subreddit.getReportedPosts(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSpammedPosts(subreddit) = function getSpammedPosts(subreddit) (req, res, next, subreddit) {
  Subreddit.getSpammedPosts(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubreddit = function getSubreddit (req, res, next, subreddit) {
  Subreddit.getSubreddit(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditMod() = function getSubredditMod() (req, res, next) {
  Subreddit.getSubredditMod()()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditPosts(HOT) = function getSubredditPosts(HOT) (req, res, next, subreddit) {
  Subreddit.getSubredditPosts(HOT)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditPosts(NEW) = function getSubredditPosts(NEW) (req, res, next, subreddit) {
  Subreddit.getSubredditPosts(NEW)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditPosts(RISING) = function getSubredditPosts(RISING) (req, res, next, subreddit) {
  Subreddit.getSubredditPosts(RISING)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubredditPosts(TOP) = function getSubredditPosts(TOP) (req, res, next, subreddit) {
  Subreddit.getSubredditPosts(TOP)(subreddit)
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

module.exports.getUnmoderatedPosts(subreddit) = function getUnmoderatedPosts(subreddit) (req, res, next, subreddit) {
  Subreddit.getUnmoderatedPosts(subreddit)(subreddit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
