var assert = require('assert');
var _ = require('lodash');
var rigger = require('./');

describe('sails-rigged', function () {

  describe('#rigged', function () {
    this.timeout(10000);
    var apps = [ 'sails-todomvc', 'xtuple-api' ];

    _.each(apps, function (app) {
      it('should work with app '+ app, function (done) {

        rigger.lift(app, { models: { migrate: 'safe' } }, function (sails) {
          assert(_.isObject(sails.models));
          done();
        });

      });
    });

  });

});
