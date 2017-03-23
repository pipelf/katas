function GraphNode(data) {
    this.data = data;
    this.visited = false;
    this.adjacents = [];
}

GraphNode.prototype.toString =  function() {
    console.log(this.data);
};

module.exports = GraphNode;