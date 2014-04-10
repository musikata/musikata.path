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
        if (! nextNodeInPath){
          return undefined;
        }
        if (pathParts.length > 1){
          return nextNodeInPath.getNodeByPath(pathParts.slice(1).join('/'));
        }
        else {
          return nextNodeInPath;
        }
      }
    },
    
    createNodeAtPath: function(nodePath, nodeData){
      var pathParts = nodePath.split('/');
      if (pathParts[0] === ''){
        pathParts.shift();
      }

      // Get or create ancestor nodes.
      var currentNode = this;
      var currentChildren = currentNode.get('children');
      for (var i=0; i < pathParts.length - 1; i++){
        var pathPart = pathParts[i];
        var nextNode = currentChildren.get(pathPart);
        // Create next node if it does not exist yet.
        if (! nextNode) {
          nextNode = new NodeModel({
            id: pathPart
          });
          currentChildren.add(nextNode);
        }
        currentNode = nextNode;
        currentChildren = currentNode.get('children');
      };
      // Create target node.
      var newNode = new NodeModel(_.extend({
        id: pathParts[pathParts.length -1]
      }, nodeData));
      currentChildren.add(newNode);
      return newNode;
    },


  });

  return NodeModel;
});
