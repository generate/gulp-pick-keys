'use strict';

var utils = require('./utils');

module.exports = function(options) {
  var opts = utils.extend({}, options);
  var msg = opts.message || 'Which properties do you want to keep in';
  var questions = new utils.Questions(opts);

  return utils.through.obj(function(file, enc, next) {
    var json = JSON.parse(file.contents.toString());
    var keys = Object.keys(json);

    questions.choices('keys', msg + ' ' + file.basename + '?', keys);
    questions.ask('keys', {save: false}, function(err, answers) {
      if (err) {
        next(err);
        return;
      }
      if (!answers.keys) {
        console.log(utils.log.timestamp, utils.log.warning, ' no properties selected, skipping', file.basename);
        next();
        return;
      }
      var rest = utils.pick(json, answers.keys);
      file.contents = new Buffer(JSON.stringify(rest, null, 2));
      next(null, file);
    });
  });
};
