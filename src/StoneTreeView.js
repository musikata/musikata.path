define(
    [
    'marionette',
    './StoneView'
],
function(
    Marionette,
    StoneView
){

    var StoneTreeView = Marionette.CollectionView.extend({
        tagName: "ul",

        initialize: function(){
            this.collection = this.model.nodes;
        },

        getItemView: function(item){
            if (item.nodes && item.nodes.length > 0){
                return StoneTreeView;
            }
            else{
                return StoneView;
            }
        },

        appendHtml: function(collectionView, itemView){
            var $li = $('<li></li>');
            $li.append(itemView.el);
            collectionView.$el.append($li);
        }
    });

    return StoneTreeView;
});
