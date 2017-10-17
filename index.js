/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-adminlte',
  included: function(app) {
    this._super.included(app);
    app.import('node_modules/@bower_components/moment/moment.js');
    app.import('vendor/shims/moment.js');
    app.import('node_modules/@bower_components/admin-lte/bootstrap/css/bootstrap.css');
    app.import('node_modules/@bower_components/admin-lte/dist/css/skins/_all-skins.css');
    app.import('node_modules/@bower_components/admin-lte/plugins/jQuery/jquery-2.2.3.min.js');
    app.import('node_modules/@bower_components/admin-lte/bootstrap/js/bootstrap.min.js');
    app.import('node_modules/@bower_components/admin-lte/dist/js/app.min.js');
    app.import('node_modules/@bower_components/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js');
    app.import('vendor/shims/jquery.js');
  }
};
