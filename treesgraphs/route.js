var GraphNode = require('./GraphNode');
var Graph = require('./Graph');

var node1 = new GraphNode('node 1');
var node2 = new GraphNode('node 2');
var node3 = new GraphNode('node 3');
var node4 = new GraphNode('node 4');
var node5 = new GraphNode('node 5');
var node6 = new GraphNode('node 6');

node1.adjacents = [node2];
node2.adjacents = [node3, node5, node6];
node3.adjacents = [node4, node1];
node4.adjacents = [node5, node6];

var myGraph = new Graph(node1);

myGraph.findRoute(node1, node2);

myGraph.findRoute(node1, node3);

myGraph.findRoute(node1, node4);

myGraph.findRoute(node1, node5);

myGraph.findRoute(node1, node6);

myGraph.findRoute(node3, node1);
