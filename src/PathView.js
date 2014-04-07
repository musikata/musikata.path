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
    itemView: Marionette.ItemView.extend({
      tag: 'li',
      template: Handlebars.compile('{{ id }}')
    })

  });

  return PathView;
});
