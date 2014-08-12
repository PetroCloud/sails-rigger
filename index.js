var path = require('path');
var SailsApp = require('sails').Sails;

exports.lift = function (app, cb) {
  var cwd = process.cwd();

  process.chdir(path.dirname(require.resolve(app)));

  var sails = new SailsApp();
  sails.load({ models: { migrate: 'safe' } }, function () {
    cb(sails);
  });
};
