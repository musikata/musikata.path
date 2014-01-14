define(
    [
    'marionette',
    'handlebars',
    'text!./templates/StoneView.html'
],
function(
    Marionette,
    Handlebars,
    StoneViewTemplate
){

    var StoneView = Marionette.ItemView.extend({
        template: Handlebars.compile(StoneViewTemplate)
    });

    return StoneView;
});
