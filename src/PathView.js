define(
  [
    'marionette',
    'handlebars',
    'text!./templates/PathView.html'
],
function(
  Marionette,
  Handlerbars,
  PathViewTemplate
){

  var PathView = Marionette.CompositeView.extend({
    template: Handlebars.compile(PathViewTemplate)
  });

  return PathView;
});
