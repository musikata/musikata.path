define(function(require){
  var Marionette = require('marionette');
  var Handlerbars = require('handlebars');
  var PathViewTemplate = require('text!./templates/PathView.html');
  var ScrollNodeViewTemplate = require('text!./templates/ScrollNodeView.html');
  var DeckNodeViewTemplate = require('text!./templates/DeckNodeView.html');

  var PathView = Marionette.CompositeView.extend({
    template: Handlebars.compile(PathViewTemplate),

    initialize: function(){
      this.collection = this.model.get('children');
    },

    itemViewContainer: '.nodes',

    itemViewOptions: {
      tag: 'li'
    },

    getItemView: function(item){
      var nodeType = item.get('nodeType');

      var xPathParts = item.get('xPath').split('/');
      var relXPath = xPathParts[xPathParts.length - 1];
      var url = window.location.href.replace(/\/$/, '') + '/' + relXPath;

      if (nodeType === 'deck') {
        return Marionette.ItemView.extend({
          tagName: 'li',
          className: 'node deck-node ' + item.get('status') ,
          template: Handlebars.compile(DeckNodeViewTemplate),
          templateHelpers: { url: url }
        });
      } else if (nodeType === 'scroll') {
        return Marionette.ItemView.extend({
          tagName: 'li',
          className: 'node scroll-node',
          template: Handlebars.compile(ScrollNodeViewTemplate),
          templateHelpers: { url: url }
        });
      }
    }

  });

  return PathView;
});
