var path = require('path');
var SailsApp = require('sails').Sails;

exports.rigged = function (app, cb) {
  var cwd = process.cwd();

  process.chdir(path.dirname(require.resolve(app)));

  var sails = new SailsApp();
  sails.load({ models: { migrate: 'safe' } }, function () {
    cb(sails);
  });

  /*
  var interval = setInterval(function () {
    if (global.sails) {
      global.sails.config.log.level = 'error';
      clearInterval(interval);
      global.sails.once('lifted', function () {
        process.chdir(cwd);
        cb(global.sails);
      });
    }
  }, 0);
  */
};
