define(function(require){
  var Marionette = require('marionette');
  var Handlerbars = require('handlebars');
  var PathViewTemplate = require('text!./templates/PathView.html');

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

      if (nodeType === 'exercise') {
        return Marionette.ItemView.extend({
          template: Handlebars.compile('<a href="{{url}}">exercise: {{ id }}</a>'),
          templateHelpers: function(){
            return {
              url: window.location.href.replace(/\/$/, '') + '/' + this.model.id
            }
          }
        });
      } else if (nodeType === 'scroll') {
        return Marionette.ItemView.extend({
          template: Handlebars.compile('<a href="{{url}}">scroll: {{ id }}</a>'),
          templateHelpers: function(){
            return {
              url: window.location.href.replace(/\/$/, '') + '/' + this.model.id
            }
          }
        });
      }
    }

  });

  return PathView;
});
