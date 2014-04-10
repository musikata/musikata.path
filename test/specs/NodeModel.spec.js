define(function(require){

  var Backbone = require('backbone');
  var NodeModel = require('path/NodeModel');

  /**
   * Tests
   */

  ddescribe('NodeModel', function(){

    it('should be defined', function(){
      expect(NodeModel).toBeDefined();
    });

    describe('constructor', function(){
      it('should create child models', function(){
        var tree = {
          id: 'A',
          children: [
            {
              id: 'A.A',
              children: [
                {id: 'A.A.A'},
                {id: 'A.A.B'}
              ]
            },
            {
              id: 'A.B',
              children: [
                {id: 'A.B.A'},
                {id: 'A.B.B'}
              ]
            }
          ]
        };

        var nodeModel = new NodeModel(tree);
        var secondGenChildren = nodeModel.get('children');
        expect(secondGenChildren instanceof Backbone.Collection).toBe(true);
        var secondGenNode = secondGenChildren.at(0); 
        expect(secondGenNode instanceof NodeModel);
        var thirdGenChildren = secondGenNode.get('children');
        expect(thirdGenChildren instanceof Backbone.Collection).toBe(true);
      });
    });

    describe('getNodeByPath', function(){
      it('should get node by path', function(){
        var tree = {
          id: 'A',
          children: [
            {
              id: 'A.A',
              children: [
                {id: 'A.A.A'},
              ]
            },
          ]
        };
        var nodeModel = new NodeModel(tree);

        expect(nodeModel.getNodeByPath('').get('id')).toBe('A');
        expect(nodeModel.getNodeByPath('A.A').get('id')).toBe('A.A');
        expect(nodeModel.getNodeByPath('A.A/A.A.A').get('id')).toBe('A.A.A');
      });
    });

    describe('createNodeAtPath', function(){
      it('should create node at a path, and ancestors', function(){
        var tree = {
          id: 'A',
          children: [
            {
              id: 'A.A',
              children: [
                {id: 'A.A.A'},
              ]
            },
          ]
        };
        var nodeModel = new NodeModel(tree);

        var newNode = nodeModel.createNodeAtPath('A.B/A.B.A', {
          foo: 'bar'
        });

        expect(nodeModel.getNodeByPath('A.B').get('id')).toBe('A.B');
        expect(nodeModel.getNodeByPath('A.B/A.B.A').get('id')).toBe('A.B.A');
      });
    });

  });
});
