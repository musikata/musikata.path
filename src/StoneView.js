define(function(require){
  var Marionette = require('marionette');
  var Handlebars = require('handlebars');
  var stoneViewTemplate = require('text!./templates/StoneView.html');

  var StoneView = Marionette.ItemView.extend({
    template: Handlebars.compile(stoneViewTemplate),

    events: {
      'click': '_onClick'
    },

    _onClick: function(){
      this.trigger('click', this.model);
    }
  });

  return StoneView;
});
