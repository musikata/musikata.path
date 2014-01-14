var BOWER_DIR = 'bower_components';

require.config({
  paths: {
    text: BOWER_DIR + '/requirejs-text/text',
    jquery: BOWER_DIR + '/jquery/jquery',
    backbone: BOWER_DIR + '/backbone/backbone',
    underscore: BOWER_DIR + '/underscore/underscore',
    marionette: BOWER_DIR + '/marionette/lib/backbone.marionette',
    handlebars: BOWER_DIR + '/handlebars/handlebars',
  },

  packages: [
    {name: 'path', location: 'src'}
  ],

  shim: {
    'underscore': {
      deps: [],
      exports: '_'
    },

    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'marionette': {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    },

    'handlebars': {
      exports: 'Handlebars'
    },

  }
});
