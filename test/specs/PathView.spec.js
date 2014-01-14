define(
  [
    'path/PathView',
    'backbone'
],
function(
  PathView,
  Backbone
){
  describe('PathView', function(){

    it('should be defined', function(){
      expect(PathView).toBeDefined();
    });

    describe('rendering', function(){

      var pathModel;
      var pathView;

      beforeEach(function(){
        pathModel = new Backbone.Model({
          title: 'Llamas 101',
          description: '<p>The description</p>'
        });
        pathView = new PathView({
          model: pathModel
        });
        pathView.render();
      });

      afterEach(function(){
        pathView.remove();
      });

      it('should render the title', function(){
        var $titleEl = pathView.$el.find('.title');
        expect($titleEl.length).toEqual(1);
        expect($titleEl.eq(0).html()).toContain(pathModel.get('title'));
      });

      it('should render the description', function(){
        var $descriptionEl = pathView.$el.find('.description');
        expect($descriptionEl.length).toEqual(1);
        expect($descriptionEl.eq(0).html()).toContain(pathModel.get('description'));
      });

      it('should render the stepping stones', function(){
        expect(true).toBe(false);
      });

    });

  });
});
