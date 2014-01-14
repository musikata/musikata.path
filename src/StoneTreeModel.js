define(
    [
    'backbone'
],
function(
    Backbone
){
    var StoneTreeModel = {};

    StoneTreeModel.Node = Backbone.Model.extend({
        initialize: function(){
            var nodes = this.get("nodes");
            if (nodes){
                this.nodes = new StoneTreeModel.NodeCollection(nodes);
                this.unset("nodes");
            }
        }
    });

    StoneTreeModel.NodeCollection = Backbone.Collection.extend({
        model: StoneTreeModel.Node
    });

    return StoneTreeModel;
});
