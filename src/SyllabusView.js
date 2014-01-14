define(
  [
    'marionette',
    'handlebars',
    'text!./templates/SyllabusView.html'
],
function(
  Marionette,
  Handlerbars,
  SyllabusViewTemplate
){

  var SyllabusView = Marionette.CompositeView.extend({
    template: Handlebars.compile(SyllabusViewTemplate)
  });

  return SyllabusView;
});
