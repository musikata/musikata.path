define(
  [
    'syllabus/SyllabusView',
    'backbone'
],
function(
  SyllabusView,
  Backbone
){
  describe('SyllabusView', function(){

    it('should be defined', function(){
      expect(SyllabusView).toBeDefined();
    });

    describe('rendering', function(){

      var syllabusModel;
      var syllabusView;

      beforeEach(function(){
        syllabusModel = new Backbone.Model({
          title: 'Llamas 101',
          description: '<p>The description</p>'
        });
        syllabusView = new SyllabusView({
          model: syllabusModel
        });
        syllabusView.render();
      });

      afterEach(function(){
        syllabusView.remove();
      });

      it('should render the title', function(){
        var $titleEl = syllabusView.$el.find('.title');
        expect($titleEl.length).toEqual(1);
        expect($titleEl.eq(0).html()).toContain(syllabusModel.get('title'));
      });

      it('should render the description', function(){
        var $descriptionEl = syllabusView.$el.find('.description');
        expect($descriptionEl.length).toEqual(1);
        expect($descriptionEl.eq(0).html()).toContain(syllabusModel.get('description'));
      });

      it('should render the stepping stones', function(){
        expect(true).toBe(false);
      });

    });

  });
});
