var assert = require('assert');
var _ = require('lodash');
var rigger = require('./');

describe('sails-rigger', function() {
  describe('#rigger', function() {
    this.timeout(10000);
    var apps = ['@petrocloud/sails-sample'];
    _.each(apps, function(app) {
      it('should work with app ' + app, function(done) {
        rigger.lift(app, {
          models: {
            migrate: 'safe'
          }
        }, function(sails) {
          assert(_.isObject(sails.models));
          done();
        });
      });
    });
  });
});
