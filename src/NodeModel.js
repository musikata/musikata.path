define(function(require){
  var _ = require('underscore');
  var Backbone = require('backbone');

  var NodeModel = Backbone.Model.extend({

    initialize: function(attrs, opts){
      var children = this.get("children") || [];

      if (! (children instanceof Backbone.Collection)) {
        // Recursively create child node models.
        var childCollection = new Backbone.Collection();
        _.each(children, function(child){
          childCollection.add(new NodeModel(child));
        });
        this.set('children', childCollection);
      }
    },

    getNodeByPath: function(nodePath){
      if (_.isUndefined(nodePath) || _.isNull(nodePath)){
        return this;
      }
      var pathParts = nodePath.split('/');
      if (pathParts[0] === ''){
        return this;
      }
      else{
        var nextNodeInPath = this.get('children').get(pathParts[0]);
        if (pathParts.length > 1){
          return nextNodeInPath.getNodeByPath('/' + pathParts.slice(1).join('/'));
        }
        else {
          return nextNodeInPath;
        }
      }
    }

  });

  return NodeModel;
});
