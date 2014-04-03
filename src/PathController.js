define(function(require){
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  var PathController = function(){
  };

  _.extend(PathController.prototype, {
    viewPathNode: function(pathId, nodeId){

      // Get node data.
      var dataDfd = new $.Deferred();
      Backbone.trigger('path:data:getNodeById', {
        pathId: pathId,
        nodeId: nodeId,
        deferred: dataDfd
      });

      dataDfd.done(function(nodeData){
        // Issue call to render path node.
        var renderDfd = new $.Deferred();
        Backbone.trigger('view:render', {
          model: nodeData.nodeModel,
          deferred: renderDfd
        });
      });
    }
  });

  return PathController;
});
