var GraphNode = require('./GraphNode');
var Graph = require('./Graph');

var node1 = new GraphNode('root');
var node2 = new GraphNode('node 2');
var node3 = new GraphNode('node 3');
var node4 = new GraphNode('node 4');
var node5 = new GraphNode('node 5');
node1.adjacents.push(node2);
node2.adjacents.push(node3);
node2.adjacents.push(node5);
node3.adjacents.push(node4);
node3.adjacents.push(node1);

var myGraph = new Graph(node1);

//myGraph.findRoute(node1, node3);
myGraph.printGraph(node1);