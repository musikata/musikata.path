define(
    [
    'underscore',
    'marionette',
    'handlebars',
    'text!./templates/PathView.html',
    './StoneTreeView',
],
function(
    _,
    Marionette,
    Handlerbars,
    PathViewTemplate,
    StoneTreeView
){

    var PathView = Marionette.Layout.extend({
        template: Handlebars.compile(PathViewTemplate),

        regions: {
            stoneTree: '.stone-tree'
        },

        onRender: function(){
            this.stoneTree.show(new StoneTreeView({
                model: this.model.get('stoneTree')
            }));
        }
    });

    return PathView;
});
