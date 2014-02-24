define(function(require){
  var Backbone = require('backbone');
  var StoneView = require('path/StoneView');

  describe('StoneView', function(){

    var generateStoneView = function(){
      var stoneModel = new Backbone.Model({
        label: 'the label',
        icon: 'the-icon'
      });

      var stoneView = new StoneView({
        model: stoneModel
      });

      return stoneView;
    };

    it('should be defined', function(){
      expect(StoneView).toBeDefined();
    });

    describe('rendering', function(){

      var view;

      beforeEach(function(){
        view = generateStoneView();
        view.render();
      });

      afterEach(function(){
        view.remove();
      });

      it('should render the label', function(){
        expect(view.$el.html()).toContain(view.model.get('label'));
      });

      it('should render the icon', function(){
        var $icon = view.$el.find('.icon');
        expect($icon.length).toBe(1);
        expect($icon.attr('class')).toContain(view.model.get('icon'));
      });

      it('should trigger an event on click', function(){
        var clickSpy = jasmine.createSpy('clickSpy');
        view.on('click', clickSpy);
        view.$el.trigger('click');
        expect(clickSpy).toHaveBeenCalledWith(view.model);
      });

    });

  });
});
