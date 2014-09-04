var path = require('path');
var SailsApp = require('sails').Sails;
var _ = require('lodash');

exports.lift = function (app, config, cb) {
  var cwd = process.cwd();

  process.chdir(path.dirname(require.resolve(app)));

  var sails = new SailsApp();
  sails.load(_.merge({ hooks: { grunt: false } }, config || { }), function () {
    cb(sails);
  });

  process.chdir(cwd);
};
