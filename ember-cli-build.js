/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('bower_components/moment/moment.js');
  app.import('vendor/shims/moment.js');
  app.import('bower_components/admin-lte/bootstrap/css/bootstrap.css');
  app.import('bower_components/admin-lte/dist/css/skins/_all-skins.css');
  app.import('bower_components/admin-lte/plugins/jQuery/jquery-2.2.3.min.js');
  app.import('bower_components/admin-lte/bootstrap/js/bootstrap.min.js');
  app.import('bower_components/admin-lte/dist/js/app.min.js');
  app.import('bower_components/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js');
  app.import('vendor/shims/jquery.js');
  return app.toTree();
};
