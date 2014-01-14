define([
    'path/PathModel',
    'path/PathView',
    'path/StoneView'
],
function(
    PathModel,
    PathView,
    StoneView
){
    describe('PathView', function(){

        it('should be defined', function(){
            expect(PathView).toBeDefined();
        });

        describe('rendering', function(){

            var pathModel;
            var pathView;
            var stoneTree;

            var renderPathView = function(){
                pathModel = new PathModel({
                    title: 'Llamas 101',
                    description: '<p>The description</p>',
                    stoneTree: {
                        nodes: [
                            {
                            nodes: [
                                {label: 'A.1'},
                                {label: 'A.2'}
                            ]
                        },
                        {
                            nodes: [
                                {label: 'B'}
                            ]
                        }
                        ]
                    }
                });

                pathView = new PathView({
                    model: pathModel
                });

                pathView.render();
            };

            afterEach(function(){
                pathView.remove();
            });

            it('should render the title', function(){
                renderPathView();
                var $titleEl = pathView.$el.find('.title');
                expect($titleEl.length).toEqual(1);
                expect($titleEl.eq(0).html()).toContain(pathModel.get('title'));
            });

            it('should render the description', function(){
                renderPathView();
                var $titleEl = pathView.$el.find('.title');
                var $descriptionEl = pathView.$el.find('.description');
                expect($descriptionEl.length).toEqual(1);
                expect($descriptionEl.eq(0).html()).toContain(pathModel.get('description'));
            });

            it('should render the stepping stones', function(){
                spyOn(StoneView.prototype, 'render');
                renderPathView();
                expect(StoneView.prototype.render.callCount).toEqual(3);
            });

        });

    });
});
