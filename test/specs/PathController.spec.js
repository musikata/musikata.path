define(function(require){

  var Backbone = require('backbone');
  var PathController = require('path/PathController');

  ddescribe('PathController', function(){

    it('should be defined', function(){
      expect(PathController).toBeDefined();
    });

    describe('viewPathNode', function(){
      var testPath = new Backbone.Model({
        id: 'testPath',
        children: new Backbone.Collection([
          new Backbone.Model({
            id: 'testNode'
          })
        ])
      });

      // Setup mock data service.
      Backbone.on('path:data:getNodeById', function(opts){
        opts.deferred.resolve({
          nodeModel: testPath.get('children').get(opts.nodeId)
        });
      });

      beforeEach(function(){
        pathController = new PathController();
      });

      it('should issue render event for specified node', function(){
        var spy = jasmine.createSpy('renderSpy');
        Backbone.once('view:render', spy);
        pathController.viewPathNode('testPath', 'testNode');
        expect(spy).toHaveBeenCalled();
        expect(spy.mostRecentCall.args[0].model).toBe(
          testPath.get('children').get('testNode'));
      });
      
    });

  });
});
