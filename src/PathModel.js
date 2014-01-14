define(
    [
    'backbone',
    './StoneTreeModel'
],
function(
    Backbone,
    StoneTreeModel
){
    var PathModel = Backbone.Model.extend({
        initialize: function(){
            var stoneTree = this.get("stoneTree") || [];
            stoneTree = new StoneTreeModel.Node(stoneTree);
            this.set('stoneTree', stoneTree);
        }
    });

    return PathModel;
});
